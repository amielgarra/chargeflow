var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });

class EmailService {
    async sendEmail(to, subject, body) {
        const params = {
            Destination: {
                ToAddresses: [to],
            },
            Message: {
                Body: {
                    Html: {
                        Charset: "UTF-8",
                        Data: `<html><body style="width: 100%">
						  ${body}
						</body></html>`,
                    },
                },
                Subject: { Data: subject },
            },
            Source: "amiel.garra@outlook.com",
            SourceArn: "arn:aws:ses:us-east-1:108705567938:identity/amiel.garra@outlook.com",
        };
        let key = await ses.sendEmail(params).promise();
        console.log("Email sent successfully.", key);
    }
}

module.exports = new EmailService();
