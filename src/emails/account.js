const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendWelcomeEmail = (email,name) =>{
    sgMail.send({
        to: email,
        from: 'cosmicpepe2001@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}.`
    });
};

const sendDeletionEmail = (email,name) =>{
    sgMail.send({
        to: email,
        from: 'cosmicpepe2001@gmail.com',
        subject: "We're sorry to see you go ;_;",
        text: `Please let us know your reasons for cancellation and how we can improve by filling this form , ${name}.`
    });
};

module.exports = {
    sendWelcomeEmail,sendDeletionEmail
};