import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, surname, email, phone, priority, message } = body;

    const fullName = `${firstName || ''} ${surname || ''}`.trim() || 'Valued Client';

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required fields.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.SENDER_EMAIL || 'support@refundauthority.co';
    const senderName = process.env.SENDER_NAME || 'Refund Authority Support';
    const adminEmail = process.env.ADMIN_EMAIL || 'support@refundauthority.co';

    // If API key is not set or still uses placeholder, fallback to clean demo success response
    if (!apiKey || apiKey.includes('YOUR_BREVO_API_KEY_HERE')) {
      console.log('=== [DEMO MODE: BREVO API KEY NOT CONFIGURED YET] ===');
      console.log(`From: ${fullName} <${email}>`);
      console.log(`Phone: ${phone || 'N/A'}`);
      console.log(`Priority: ${priority || 'Medium'}`);
      console.log(`Message: ${message}`);
      console.log('====================================================');

      return NextResponse.json(
        {
          success: true,
          demo: true,
          message: 'Inquiry received! (Demo mode: Please replace BREVO_API_KEY in .env.local with your real key).',
        },
        { status: 200 }
      );
    }

    // Logo URL for HTML email headers (public HTTPS URL)
    const logoUrl = 'https://dfccerdfced.space/wp-content/uploads/2026/02/brandlogo.webp';

    // -------------------------------------------------------------
    // EMAIL 1: ADMIN NOTIFICATION (Sent to support@refundauthority.co)
    // -------------------------------------------------------------
    const adminHtmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Case Evaluation Inquiry</title>
      </head>
      <body style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #F4F6F8; margin: 0; padding: 20px; color: #101828;">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #E2E8F0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          
          <!-- Header Bar with Logo -->
          <tr>
            <td style="background-color: #003366; padding: 24px 30px; text-align: center; border-bottom: 4px solid #FFCC00;">
              <img src="${logoUrl}" alt="Refund Authority" style="max-height: 48px; width: auto; display: block; margin: 0 auto 8px;" />
              <h1 style="color: #ffffff; font-size: 20px; font-weight: 600; margin: 0; letter-spacing: -0.5px;">New Case Evaluation Inquiry</h1>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 30px;">
              <div style="margin-bottom: 20px;">
                <span style="display: inline-block; padding: 6px 14px; background-color: #FFCC00; color: #101828; font-weight: 700; font-size: 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">
                  Priority: ${priority || 'Medium'}
                </span>
                <span style="float: right; color: #64748B; font-size: 12px; line-height: 26px;">
                  ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>

              <!-- Details Table -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 25px; font-size: 14px;">
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 10px 0; color: #003366; font-weight: 700; width: 140px;">Client Name:</td>
                  <td style="padding: 10px 0; color: #101828; font-weight: 600;">${fullName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 10px 0; color: #003366; font-weight: 700;">Email Address:</td>
                  <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #00509E; font-weight: 600; text-decoration: none;">${email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 10px 0; color: #003366; font-weight: 700;">Phone Number:</td>
                  <td style="padding: 10px 0; color: #101828;">${phone || 'N/A'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 10px 0; color: #003366; font-weight: 700;">Case Priority:</td>
                  <td style="padding: 10px 0; color: #101828; font-weight: 600;">${priority || 'Medium'}</td>
                </tr>
              </table>

              <!-- Message Details Box -->
              <div style="margin-top: 20px;">
                <h3 style="color: #003366; font-size: 15px; font-weight: 700; margin: 0 0 10px 0;">Case Summary / Message:</h3>
                <div style="background-color: #F0F4F8; padding: 20px; border-left: 4px solid #00509E; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #1E293B; white-space: pre-wrap;">${message}</div>
              </div>

              <!-- Quick Action Button -->
              <div style="margin-top: 30px; text-align: center;">
                <a href="mailto:${email}?subject=RE: Refund Authority Case Inquiry - ${encodeURIComponent(fullName)}" style="display: inline-block; padding: 12px 28px; background-color: #00509E; color: #ffffff; font-weight: 700; font-size: 14px; text-decoration: none; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,80,158,0.25);">
                  Reply to Client Directly
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #F8FAFC; padding: 20px 30px; border-top: 1px solid #E2E8F0; font-size: 12px; color: #64748B; text-align: center; line-height: 1.5;">
              Refund Authority Case Management Portal<br />
              This is an automated notification sent to <strong>${adminEmail}</strong>.
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Call Brevo REST API v3 Endpoint to send admin email
    const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: senderName,
          email: senderEmail,
        },
        to: [
          {
            email: adminEmail,
            name: 'Refund Authority Case Team',
          },
        ],
        replyTo: {
          email: email,
          name: fullName,
        },
        subject: `[${priority || 'Medium'} Priority] New Case Inquiry from ${fullName}`,
        htmlContent: adminHtmlContent,
      }),
    });

    if (!brevoRes.ok) {
      const errorJson = await brevoRes.json();
      console.error('Brevo API Admin Email Error:', errorJson);
      return NextResponse.json(
        { error: errorJson.message || 'Failed to send message via Brevo API.' },
        { status: brevoRes.status }
      );
    }

    const adminResult = await brevoRes.json();
    console.log('✅ Brevo Admin Notification Email Sent Successfully. MessageId:', adminResult.messageId);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('Contact API Error:', err);
    return NextResponse.json(
      { error: 'An unexpected server error occurred.' },
      { status: 500 }
    );
  }
}
