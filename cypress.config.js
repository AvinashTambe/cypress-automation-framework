const Imap = require('imap');
const { simpleParser } = require('mailparser');
const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on('task', {
                getOTPFromEmail() {
                    return new Promise((resolve, reject) => {
                        if (!config.env.EMAIL_USER || !config.env.EMAIL_PASS) {
                            return reject("Missing email credentials in cypress.env.json");
                        }

                        const imap = new Imap({
                            user: config.env.EMAIL_USER,
                            password: config.env.EMAIL_PASS,
                            host: config.env.IMAP_HOST || 'imap.gmail.com',
                            port: config.env.IMAP_PORT || 993,
                            tls: true,
                            tlsOptions: { rejectUnauthorized: false }  // Fixes self-signed certificate issue
                        });

                        imap.once('ready', () => {
                            imap.openBox('INBOX', false, (err, box) => {
                                if (err) {
                                    imap.end();
                                    return reject("Error opening inbox: " + err.message);
                                }

                                imap.search(['UNSEEN', ['SINCE', new Date()]], (err, results) => {
                                    if (err) {
                                        imap.end();
                                        return reject("Search error: " + err.message);
                                    }

                                    if (results.length === 0) {
                                        imap.end();
                                        return reject("No new emails found.");
                                    }

                                    const f = imap.fetch(results, { bodies: '' });
                                    f.on('message', (msg) => {
                                        msg.on('body', (stream) => {
                                            simpleParser(stream, (err, parsed) => {
                                                if (err) {
                                                    imap.end();
                                                    return reject("Error parsing email: " + err.message);
                                                }

                                                const otpRegex = /\b\d{6}\b/;
                                                const otpMatch = parsed.text.match(otpRegex);
                                                const otp = otpMatch ? otpMatch[0] : null;

                                                if (otp) {
                                                    imap.end();
                                                    return resolve(otp);
                                                } else {
                                                    imap.end();
                                                    return reject("OTP not found in email.");
                                                }
                                            });
                                        });
                                    });

                                    f.once('error', (err) => {
                                        imap.end();
                                        return reject("Fetch error: " + err.message);
                                    });

                                    f.once('end', () => imap.end());
                                });
                            });
                        });

                        imap.once('error', (err) => reject("IMAP error: " + err.message));
                        imap.once('end', () => console.log('IMAP connection closed'));
                        imap.connect();
                    });
                }
            });

            return config;
        }
    }
});
