import { Resend } from "resend";

const resend = new Resend("re_PiCmnr35_BHaQGRyJMi8ACKHADJK23jra");

(async function () {
  const { data, error } = await resend.emails.send({
    from: "bandrock2806@gmail.com",
    to: [""],
    subject: "Hello World",
    html: "<strong>It works!</strong>",
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
