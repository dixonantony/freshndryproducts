# Contact Form Setup

The `/contact` page sends submissions through `@emailjs/browser`. It does not use a local Express mail server.

## EmailJS configuration

The EmailJS service ID, template ID, and public key are currently configured in `src/components/ContactForm.tsx`. In the EmailJS dashboard, confirm that:

- The service is connected and its recipient settings are correct.
- The template uses the parameters `from_name`, `from_email`, `phone`, `subject`, and `message`.
- The form's public key is enabled for the deployed website's domain.

EmailJS public keys and IDs are intended for client-side use. Never put a private email password or EmailJS private key in frontend code. For stronger abuse protection, configure allowed origins and rate limits in the email service.

## Local development

Install dependencies and run the Vite app:

```bash
npm install
npm run dev
```

Open `http://localhost:3000/contact` and submit a test message. The form provides success and failure states; if delivery fails, verify the EmailJS service, template parameter names, and allowed domain in the dashboard.

## Production

Deploy the Vite frontend over HTTPS. The form is a browser-to-EmailJS integration, so no separate mail server or Gmail app password is required. Review EmailJS usage limits and spam controls before publishing.