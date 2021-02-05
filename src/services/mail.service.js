const nodemailer = require("nodemailer");
const CustomError = require("./../utils/custom-error");
const { mailer, APP_NAME } = require("./../config");

class MailService {
  constructor(user) {
    this.user = user;
  }

  async send(subject, content, recipient, from) {
    from = from || `${APP_NAME} <cerebrum@${mailer.DOMAIN}>`
    content = content || " "

    if (!recipient || recipient.length < 1) throw new CustomError("Recipient is required");
    if (!subject) throw new CustomError("Subject is required");

    // Define nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: mailer.HOST,
      port: mailer.PORT,
      service: mailer.SERVICE,
      secure: mailer.SECURE,
      auth: {
        user: mailer.USER,
        pass: mailer.PASSWORD
      }
    });

    
    const result = await transporter.sendMail({
      from,
      to: Array.isArray(recipient) ? recipient.join() : recipient,
      subject,
      text: content
    });

    if (!result) throw new CustomError("Unable to send mail")

    return result
  }

  async sendEmailVerificationMail(link) {
    const subject = "Email Verification";
    const content = `Dear ${this.user.firstName}, 

    Thank you for Creating a Cerebrum account
  
    To finish setting up this account, we just need to make sure this email address is yours.

    Please click on the link to verify your email: ${link} 
    
    
    
    Thanks,
    The Cerebrum Team.`
    const recipient = this.user.email


    return await this.send(subject, content, recipient)
  }

  async sendPasswordResetMail(link) {
    const subject = "Reset password";
    const content = `Dear${this.user.firstName}, 
    
    
 Someone, hopefully you, has requested assistance in resetting their password. To do so, you will need to click on the following link and follow the instructions given to you.
    
Please click on the link to reset your password:${link}

If you received a password-assistance email you didn't request, it's possible that someone else entered your email by mistake. If you didn't initiate the request, don't worry - your account is still secure, and you don't need to take any further action.
`;
    const recipient = this.user.email

    return await this.send(subject, content, recipient)
  }
}

module.exports = MailService