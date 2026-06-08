# Contact Form Setup Guide

## Overview
A contact form has been added to the Fresh N Dry Products website. When users submit the form, emails will be sent to both `info@freshndryproducts.com` and `albin.freshndry@gmail.com`.

## Setup Instructions

### 1. Configure Email Credentials

Create a `.env` file in the root directory with your email credentials:

```bash
cp .env.example .env
```

Then edit the `.env` file with your actual credentials:

```env
# Email Configuration
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASSWORD=your-app-specific-password

# Server Configuration
PORT=3001
```

### 2. Gmail App Password Setup

For Gmail accounts, you need to create an **App-Specific Password**:

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Scroll down to **App passwords**
4. Select **Mail** and **Other (Custom name)**
5. Name it "Fresh N Dry Contact Form"
6. Copy the generated 16-character password
7. Use this password in your `.env` file as `EMAIL_PASSWORD`

**Important:** Never use your regular Gmail password. Always use an app-specific password.

### 3. Running the Application

#### Option 1: Run Frontend and Backend Together (Recommended)
```bash
npm run dev:all
```

This will start:
- Frontend (Vite) on http://localhost:3000
- Backend (Express) on http://localhost:3001

#### Option 2: Run Separately
Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
npm run dev:server
```

### 4. Accessing the Contact Form

- Navigate to http://localhost:3000/contact
- Or click "Contact Us" in the navigation menu or footer

## Features

### Contact Form Fields
- **Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Subject** (required)
- **Message** (required)

### Email Recipients
Emails are automatically sent to:
- info@freshndryproducts.com
- albin.freshndry@gmail.com

### Form Validation
- Client-side validation for required fields
- Email format validation
- Success/error messages displayed to users

### Email Template
Professional HTML email template includes:
- Company branding
- All form field data
- Reply-to functionality (user's email)
- Responsive design

## File Structure

```
├── src/
│   ├── components/
│   │   ├── ContactForm.tsx      # Contact form component
│   │   ├── Navbar.tsx           # Updated with Contact Us link
│   │   └── Footer.tsx           # Updated with Contact Us link
│   └── App.tsx                  # Updated with routing
├── server/
│   ├── api.ts                   # Email API endpoint
│   └── index.ts                 # Express server
├── .env                         # Your email credentials (create this)
└── .env.example                 # Template for .env file
```

## Troubleshooting

### Email Not Sending
1. Check that `.env` file exists and has correct credentials
2. Verify you're using an app-specific password, not your regular password
3. Check that the backend server is running on port 3001
4. Look for error messages in the terminal running the backend

### CORS Issues
The backend is configured to allow requests from any origin. If you encounter CORS issues:
- Ensure both frontend and backend are running
- Check browser console for specific error messages

### Port Already in Use
If port 3001 is already in use:
1. Change the PORT in `.env` file
2. Update the fetch URL in `ContactForm.tsx` to match the new port

## Security Notes

- Never commit the `.env` file to version control
- Use app-specific passwords for Gmail
- Consider rate limiting for production use
- Validate and sanitize all inputs on the backend

## Production Deployment

For production:
1. Use environment variables provided by your hosting platform
2. Set up proper CORS restrictions
3. Add rate limiting to prevent spam
4. Consider using a dedicated email service (SendGrid, AWS SES, etc.)
5. Enable HTTPS
6. Add CAPTCHA to prevent bot submissions

## Support

For issues or questions, contact the development team.