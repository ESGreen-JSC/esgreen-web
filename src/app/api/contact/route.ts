import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const RECIPIENT = 'contact@esgreen.vn'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

type FormType = 'newsletter' | 'contact' | 'demo' | 'consultation'

const SUBJECT_MAP: Record<FormType, string> = {
  newsletter: 'Khách hàng đăng ký nhận bản tin mới',
  contact: 'Khách hàng đăng ký tư vấn',
  demo: 'Khách hàng đăng ký demo',
  consultation: 'Khách hàng yêu cầu tư vấn 1-1',
}

function buildHtml(type: FormType, data: Record<string, string>): string {
  const rows = Object.entries(data)
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:8px 12px;font-weight:600;color:#2d6a4f;border-bottom:1px solid #eee">${k}</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${v}</td></tr>`)
    .join('')

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#2d6a4f;color:white;padding:20px;border-radius:12px 12px 0 0">
        <h2 style="margin:0">🌿 ESGreen — ${SUBJECT_MAP[type]}</h2>
      </div>
      <div style="padding:20px;background:#f8faf8;border-radius:0 0 12px 12px">
        <table style="width:100%;border-collapse:collapse">${rows}</table>
        <p style="margin-top:16px;color:#666;font-size:13px">
          Gửi lúc: ${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}
        </p>
      </div>
    </div>`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { type, ...data } = body as { type: FormType } & Record<string, string>

    if (!type || !SUBJECT_MAP[type]) {
      return NextResponse.json({ error: 'Invalid form type' }, { status: 400 })
    }

    if (type === 'newsletter' && !data.email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn('[Contact API] SMTP not configured — logging form data instead:')
      console.log(JSON.stringify({ type, ...data }, null, 2))
      return NextResponse.json({ ok: true, warning: 'SMTP not configured' })
    }

    await transporter.sendMail({
      from: `"ESGreen Website" <${process.env.SMTP_USER}>`,
      to: RECIPIENT,
      subject: SUBJECT_MAP[type],
      html: buildHtml(type, data),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[Contact API] Error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
