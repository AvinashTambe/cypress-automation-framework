const imaps = require('imap-simple');
const { simpleParser } = require('mailparser');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        fetchOTP({ emailUser, emailPass, imapHost }) {
          const imapConfig = {
            imap: {
              user: emailUser,
              password: emailPass,
              host: imapHost,
              port: 993,
              tls: true,
              authTimeout: 30000
            }
          };

          return imaps.connect(imapConfig).then((connection) => {
            return connection.openBox('INBOX').then(() => {
              const searchCriteria = ['UNSEEN']; // Only fetch unread emails
              const fetchOptions = { bodies: ['TEXT'], markSeen: true };

              return connection.search(searchCriteria, fetchOptions).then((messages) => {
                if (messages.length === 0) {
                  throw new Error("❌ No new OTP email found!");
                }

                const latestEmail = messages[messages.length - 1]; // Get the latest email
                return simpleParser(latestEmail.parts[0].body).then((mail) => {
                  const otpMatch = mail.text.match(/\b\d{6}\b/); // Extract 6-digit OTP
                  if (!otpMatch) {
                    throw new Error("❌ OTP not found in email!");
                  }
                  return otpMatch[0]; // Return OTP
                });
              });
            });
          });
        }
      });
    },
  },
};
