import nodemailer from "nodemailer";

export async function sendEmailWithAttachment(
  email: string,
  body: string
): Promise<void> {
  await sendEmail(email, "Nueva consulta médica veterinaria creada", body);
}

export async function sendEmail(
  to: string,
  subject: string,
  body: string
): Promise<void> {
  const transporter = nodemailer.createTransport({
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

  await transporter.sendMail(mailOptions); // Envía el correo electrónico con las opciones especificadas
}
