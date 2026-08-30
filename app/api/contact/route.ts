import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
  activity?: string;
  phone?: string;
  offer?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;
    console.log("Contact request body:", body);
    const { name, email, message, activity, phone, offer } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      //   if (process.env.NODE_ENV !== 'production') {
      //     console.warn('RESEND_API_KEY is missing. Skipping email send in development.', {
      //       name,
      //       email,
      //       message,
      //     });
      //     return NextResponse.json({ success: true, devFallback: true }, { status: 200 });
      //   }

      return NextResponse.json(
        { error: "Missing RESEND_API_KEY v2 " },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "formulaire@resend.dev",
      to: "atelierdouglas.web@gmail.com",
      subject: `Nouveau message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6; color: #222;">
            <h2 style="margin: 0 0 20px; font-size: 20px;">
            Nouveau message de ${name}
            </h2>

        <div style="
        background: #f7f3f0;
        border: 2px solid #cb540a;
        border-radius: 10px;
        padding: 14px 16px;
        ">
        <p style="margin: 0 0 6px;"><strong>Nom :</strong> ${name}</p>
        <p style="margin: 0 0 6px;"><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
        <p style="margin: 0 0 6px;"><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <p style="margin: 0 0 6px;"><strong>Activité :</strong> ${activity || "Non renseignée"}</p>
        <p style="margin: 0;"><strong>Offre :</strong> ${offer || "Non renseignée"}</p>
        </div>
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />

            <p style="margin-bottom: 6px;"><strong>Son Message :</strong></p>
            <p style="margin-top: 0;">
            ${message.replace(/\n/g, "<br />")}
            </p>
        </div>
        `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
