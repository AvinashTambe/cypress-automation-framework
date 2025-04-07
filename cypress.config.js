const imaps = require('imap-simple');
const { simpleParser } = require('mailparser');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // 👉 Your custom email/OTP fetcher task
      on('task', {
        fetchOTP({ emailUser, emailPass, imapHost }) {
          const imapConfig = {
            imap: {
              user: emailUser,
              password: emailPass,
              host: imapHost,
              port: 993,
              tls: true,
              tlsOptions: {
                rejectUnauthorized: false
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

    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
  },

  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mochawesome",
      overwrite: false,
      html: true,
      json: true
    }
  }
};
