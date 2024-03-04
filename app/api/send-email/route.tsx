import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: '...',
    to: 'silviu.iordache92@gmail.com',
    subject: 'Welcome!',
    react: <WelcomeTemplate name="Silviu" />,
  });

  return NextResponse.json({})
}