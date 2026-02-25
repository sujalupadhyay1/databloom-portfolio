import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const feedbackSchema = z.object({
  name: z.string().min(2),
  contact: z.string().optional(),
  email: z.string().email(),
  feedback: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = feedbackSchema.parse(json);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = 'New Feedback from your Portfolio';
    const textBody = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.contact ? `Contact: ${data.contact}` : null,
      '',
      'Feedback:',
      data.feedback,
    ]
      .filter(Boolean)
      .join('\n');

    await transporter.sendMail({
      from: process.env.FEEDBACK_FROM_EMAIL ?? process.env.SMTP_USER,
      to: 'sujalupadhyay13@gmail.com',
      subject,
      text: textBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'INVALID_INPUT', issues: error.issues },
        { status: 400 },
      );
    }

    const err = error as { code?: string; response?: string; message?: string };
    const detail = [err.code, err.response, err.message].filter(Boolean).join(' | ');

    console.error('Error sending feedback email', { detail, error });

    return NextResponse.json(
      {
        success: false,
        error: 'EMAIL_SEND_FAILED',
        detail: process.env.NODE_ENV === 'production' ? undefined : detail || 'Unknown error',
      },
      { status: 500 },
    );
  }
}

