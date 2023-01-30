import nodemailer from "nodemailer";
import { createAuthMail } from "./template";

const { MAIL_ID, MAIL_APP_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MAIL_ID,
    pass: MAIL_APP_PASSWORD,
  },
});

export async function sendMail({
  email,
  verifyCode,
}: {
  email: string;
  verifyCode: string;
}) {
  return await transporter.sendMail({
    from: MAIL_ID,
    to: email,
    subject: "[오늘의 퀘스트] 이메일 인증",
    html: createAuthMail(verifyCode),
  });
}
