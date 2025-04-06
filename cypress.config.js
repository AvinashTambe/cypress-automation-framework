const imaps = require('imap-simple');
const { simpleParser } = require('mailparser');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // 👉 Webpack preprocessor setup
      on('file:preprocessor', webpackPreprocessor({
        webpackOptions: require('./webpack.config'),
        watchOptions: {},
      }));

      // 👉 Your custom email/OTP fetcher task
      on('task', {
        fetchOTP({ emailUser, emailPass, imapHost }) {
          const imapConfig = {
            imap: {
              user: emailUser,
              password: emailPass,
              host: imapHost,
              port: 993,
              tlsOptions: {
                rejectUnauthorized: false  // ✅ This line is key
              },
              authTimeout: 30000
            }
          };

          return imaps.connect(imapConfig).then((connection) => {
            return connection.openBox('INBOX').then(() => {
              const searchCriteria = ['UNSEEN'];
              const fetchOptions = { bodies: ['TEXT'], markSeen: true };

              return connection.search(searchCriteria, fetchOptions).then((messages) => {
                if (messages.length === 0) {
                  throw new Error("❌ No new OTP email found!");
                }

                const latestEmail = messages[messages.length - 1];
                return simpleParser(latestEmail.parts[0].body).then((mail) => {
                  const otpMatch = mail.text.match(/\b\d{6}\b/);
                  if (!otpMatch) {
                    throw new Error("❌ OTP not found in email!");
                  }
                  return otpMatch[0];
                });
              });
            });
          });
        }
      });

      return config;
    },

    specPattern: 'cypress/e2e/**/*.cy.{js,ts}', // Optional: match your .js and .ts tests
    supportFile: 'cypress/support/e2e.js',  // or update to your support file path if using one
  }
};
