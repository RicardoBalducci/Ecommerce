"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = exports.sendEmailWithAttachment = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
async function sendEmailWithAttachment(email, body) {
    await sendEmail(email, "Nueva consulta médica veterinaria creada", body);
}
exports.sendEmailWithAttachment = sendEmailWithAttachment;
async function sendEmail(to, subject, body) {
    const transporter = nodemailer_1.default.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.PASSWORD_EMAIL,
        },
    });
    const mailOptions = {
        from: process.env.USER_EMAIL,
        to,
        subject,
        text: body,
    };
    await transporter.sendMail(mailOptions);
}
exports.sendEmail = sendEmail;
//# sourceMappingURL=email.service.js.map