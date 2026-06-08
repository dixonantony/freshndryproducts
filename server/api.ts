import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Contact form endpoint
router.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ['info@freshndryproducts.com', 'albin.freshndry@gmail.com'],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #00AEEF 0%, #005691 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Fresh N Dry Products</h1>
            <p style="color: white; margin: 10px 0 0 0;">New Contact Form Submission</p>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb;">
            <h2 style="color: #1e293b; margin-top: 0;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #475569;">Name:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1e293b;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #475569;">Email:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="mailto:${email}" style="color: #00AEEF; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #475569;">Phone:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1e293b;">
                  ${phone}
                </td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #475569;">Subject:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1e293b;">
                  ${subject}
                </td>
              </tr>
            </table>
            
            <div style="margin-top: 20px;">
              <strong style="color: #475569;">Message:</strong>
              <div style="background: white; padding: 15px; margin-top: 10px; border-radius: 8px; border: 1px solid #e5e7eb; color: #1e293b; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="background: #1e293b; padding: 20px; text-align: center;">
            <p style="color: #94a3b8; margin: 0; font-size: 14px;">
              This email was sent from the Fresh N Dry Products contact form
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

export default router;

// Made with Bob
