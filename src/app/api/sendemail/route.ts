import nodemailer from "nodemailer";
import { email, emailSchema } from "@/libs/emailSchema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const reqBody = await req.json();
  const { error, value }: { error: any; value: email } =
    emailSchema.validate(reqBody);
  if (error) return NextResponse.json(error.details[0].message);

  const htmlMsg = `
   <div style="display: flex; gap: 1rem;">
  <span style="font-weight: bold; font-size: 16px;">الاسم :</span>
  <span style="font-size: 16px;">${value.fullName}</span>
</div>

<div style="display: flex; gap: 1rem;">
  <span style="font-weight: bold; font-size: 16px;">رقم الهاتف :</span>
  <span style="font-size: 16px;">${value.phoneNumber}</span>
</div>

<div style="display: flex; gap: 1rem;">
  <span style="font-weight: bold; font-size: 16px;">الراتب :</span>
  <span style="font-size: 16px;">${value.salary}</span>
</div>

<div style="display: flex; gap: 1rem;">
  <span style="font-weight: bold; font-size: 16px;">البنك :</span>
  <span style="font-size: 16px;">${value.bank}</span>
</div>

<div style="display: flex; gap: 1rem;">
  <span style="font-weight: bold; font-size: 16px;">قطاع العمل :</span>
  <span style="font-size: 16px;">${value.work}</span>
</div>`;

  try {
    await nodemailer
      .createTransport({
        service: "gmail",
        auth: {
          user: "fayalalmotahda@gmail.com",
          pass: "szhc ihya fdgd ztmr",
        },
      })
      .sendMail({
        from: "fayalalmotahda@gmail.com",
        to: "fayalalmotahda@gmail.com",
        subject: "Message Received(fayal-almotahda)",
        html: htmlMsg,
      });

    return NextResponse.json("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json("Failed to send email");
  }
}
