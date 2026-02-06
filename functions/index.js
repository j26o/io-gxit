import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import { initializeApp } from 'firebase-admin/app';
import { createTransport } from 'nodemailer';
import { defineString } from 'firebase-functions/params';

initializeApp();

const smtpHost = defineString('SMTP_HOST');
const smtpPort = defineString('SMTP_PORT');
const smtpUser = defineString('SMTP_USER');
const smtpPass = defineString('SMTP_PASS');
const notifyTo = defineString('NOTIFY_TO');

export const onContactCreated = onDocumentCreated({ document: 'contacts/{docId}', database: 'gxit' }, async (event) => {
  const data = event.data?.data();
  if (!data) return;

  const transporter = createTransport({
    host: smtpHost.value(),
    port: Number(smtpPort.value()),
    secure: Number(smtpPort.value()) === 465,
    auth: {
      user: smtpUser.value(),
      pass: smtpPass.value(),
    },
  });

  const html = `
    <h2>New Contact Form Submission</h2>
    <table style="border-collapse:collapse;">
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Name</td><td>${escapeHtml(data.name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Email</td><td><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Company</td><td>${escapeHtml(data.company || '—')}</td></tr>
    </table>
    <h3>Message</h3>
    <p>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
  `;

  await transporter.sendMail({
    from: `"GXIT Contact Form" <${smtpUser.value()}>`,
    to: notifyTo.value(),
    replyTo: data.email,
    subject: `New inquiry from ${data.name}`,
    html,
  });
});

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
