import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const prefix = formData.get("prefix") || "";
    const firstName = formData.get("firstName") || "";
    const lastName = formData.get("lastName") || "";
    const email = formData.get("email") || "";

    const bscYear = formData.get("bscYear") || "";
    const bscUniversity = formData.get("bscUniversity") || "";

    const mscYear = formData.get("mscYear") || "";
    const mscSubject = formData.get("mscSubject") || "";
    const mscUniversity = formData.get("mscUniversity") || "";

    const mscAppliedYear = formData.get("mscAppliedYear") || "";
    const mscAppliedSubject = formData.get("mscAppliedSubject") || "";
    const mscAppliedUniversity = formData.get("mscAppliedUniversity") || "";

    const phdYear = formData.get("phdYear") || "";
    const phdSubject = formData.get("phdSubject") || "";
    const phdUniversity = formData.get("phdUniversity") || "";

    const researchPapers = formData.get("researchPapers") || "";
    const fieldWorkExperience = formData.get("fieldWorkExperience") || "";
    const professionalCareer = formData.get("professionalCareer") || "";

    const photo = formData.get("photo");

    const fullNameLine = `${prefix ? prefix + " " : ""}${firstName} ${lastName}`.trim();

    const htmlSections = [];

    htmlSections.push(`<h2 style="margin:0 0 12px;font-size:18px;color:#0f172a;">New Be Member Submission</h2>`);
    htmlSections.push(
      `<p style="margin:0 0 16px;font-size:14px;color:#111827;">A new member has submitted their details through the website.</p>`
    );

    htmlSections.push(
      `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:640px;font-size:14px;">` +
        `<tr><td colspan="2" style="padding:8px 0;font-weight:600;font-size:15px;color:#0f172a;border-bottom:1px solid #e5e7eb;">Personal Details</td></tr>` +
        `<tr><td style="padding:6px 4px;color:#6b7280;width:160px;">Name</td><td style="padding:6px 4px;color:#111827;">${fullNameLine || "-"}</td></tr>` +
        `<tr><td style="padding:6px 4px;color:#6b7280;">Email</td><td style="padding:6px 4px;color:#111827;">${email || "-"}</td></tr>` +
      `</table>`
    );

    const academicRows = [];
    if (bscYear || bscUniversity) {
      academicRows.push(
        `<tr><td style="padding:6px 4px;color:#6b7280;">B.Sc</td><td style="padding:6px 4px;color:#111827;">Year: ${
          bscYear || "-"
        }<br/>University/College: ${bscUniversity || "-"}</td></tr>`
      );
    }
    if (mscYear || mscSubject || mscUniversity) {
      academicRows.push(
        `<tr><td style="padding:6px 4px;color:#6b7280;">M.Sc</td><td style="padding:6px 4px;color:#111827;">Year: ${
          mscYear || "-"
        }<br/>Subject: ${mscSubject || "-"}<br/>University: ${mscUniversity || "-"}</td></tr>`
      );
    }
    if (mscAppliedYear || mscAppliedSubject || mscAppliedUniversity) {
      academicRows.push(
        `<tr><td style="padding:6px 4px;color:#6b7280;">M.Sc (Applied)</td><td style="padding:6px 4px;color:#111827;">Year: ${
          mscAppliedYear || "-"
        }<br/>Subject: ${mscAppliedSubject || "-"}<br/>University: ${
          mscAppliedUniversity || "-"
        }</td></tr>`
      );
    }
    if (phdYear || phdSubject || phdUniversity) {
      academicRows.push(
        `<tr><td style="padding:6px 4px;color:#6b7280;">Ph.D</td><td style="padding:6px 4px;color:#111827;">Year: ${
          phdYear || "-"
        }<br/>Subject: ${phdSubject || "-"}<br/>University: ${phdUniversity || "-"}</td></tr>`
      );
    }

    if (academicRows.length > 0) {
      htmlSections.push(
        `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:640px;font-size:14px;margin-top:18px;">` +
          `<tr><td colspan="2" style="padding:8px 0;font-weight:600;font-size:15px;color:#0f172a;border-bottom:1px solid #e5e7eb;">Academics</td></tr>` +
          academicRows.join("") +
        `</table>`
      );
    }

    if (researchPapers) {
      htmlSections.push(
        `<div style="margin-top:18px;">` +
          `<div style="padding:0 0 6px;font-weight:600;font-size:15px;color:#0f172a;border-bottom:1px solid #e5e7eb;">Research / Papers Published</div>` +
          `<p style="margin:8px 0 0;white-space:pre-line;font-size:14px;color:#111827;">${researchPapers}</p>` +
        `</div>`
      );
    }

    if (fieldWorkExperience) {
      htmlSections.push(
        `<div style="margin-top:18px;">` +
          `<div style="padding:0 0 6px;font-weight:600;font-size:15px;color:#0f172a;border-bottom:1px solid #e5e7eb;">Field Work Experience</div>` +
          `<p style="margin:8px 0 0;white-space:pre-line;font-size:14px;color:#111827;">${fieldWorkExperience}</p>` +
        `</div>`
      );
    }

    if (professionalCareer) {
      htmlSections.push(
        `<div style="margin-top:18px;">` +
          `<div style="padding:0 0 6px;font-weight:600;font-size:15px;color:#0f172a;border-bottom:1px solid #e5e7eb;">Professional Career (with Country)</div>` +
          `<p style="margin:8px 0 0;white-space:pre-line;font-size:14px;color:#111827;">${professionalCareer}</p>` +
        `</div>`
      );
    }

    const htmlBody =
      `<div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;background:#f3f4f6;padding:24px;">` +
      `<div style="max-width:700px;margin:0 auto;background:#ffffff;border-radius:12px;padding:20px 24px;border:1px solid #e5e7eb;">` +
      htmlSections.join("") +
      `</div>` +
      `</div>`;

    const textLines = [];
    textLines.push(`Name: ${fullNameLine}`);
    textLines.push(`Email: ${email}`);
    textLines.push("");
    textLines.push("ACADEMICS");
    if (bscYear || bscUniversity) {
      textLines.push(`B.Sc: Year: ${bscYear} | University/College: ${bscUniversity}`);
    }
    if (mscYear || mscSubject || mscUniversity) {
      textLines.push(
        `M.Sc: Year: ${mscYear} | Subject: ${mscSubject} | University: ${mscUniversity}`
      );
    }
    if (mscAppliedYear || mscAppliedSubject || mscAppliedUniversity) {
      textLines.push(
        `M.Sc (Applied): Year: ${mscAppliedYear} | Subject: ${mscAppliedSubject} | University: ${mscAppliedUniversity}`
      );
    }
    if (phdYear || phdSubject || phdUniversity) {
      textLines.push(
        `Ph.D: Year: ${phdYear} | Subject: ${phdSubject} | University: ${phdUniversity}`
      );
    }
    textLines.push("");
    if (researchPapers) {
      textLines.push("RESEARCH / PAPERS PUBLISHED");
      textLines.push(researchPapers);
      textLines.push("");
    }
    if (fieldWorkExperience) {
      textLines.push("FIELD WORK EXPERIENCE");
      textLines.push(fieldWorkExperience);
      textLines.push("");
    }
    if (professionalCareer) {
      textLines.push("PROFESSIONAL CAREER (WITH COUNTRY)");
      textLines.push(professionalCareer);
      textLines.push("");
    }
    const textBody = textLines.join("\n");

    const smtpUser = process.env.SMTP_USER || "warlock7906@gmail.com";
    const smtpPass = process.env.SMTP_PASS || "oxba kvga utrc shtc";
    const smtpTo = process.env.SMTP_TO || "warlock7906@gmail.com";

    if (!smtpUser || !smtpPass) {
      console.error("SMTP credentials are not configured in environment variables. Form data will be accepted but no email will be sent.");
    }

    let transporter = null;
    if (smtpUser && smtpPass) {
      transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });
    }

    const attachments = [];
    if (photo && typeof photo === "object" && photo.size && photo.name) {
      const photoArrayBuffer = await photo.arrayBuffer();
      const photoBytes = Buffer.from(photoArrayBuffer);
      attachments.push({
        filename: photo.name,
        content: photoBytes,
        contentType: photo.type || "application/octet-stream",
      });
    }

    // Fire-and-forget email send so the API can respond quickly
    if (transporter) {
      transporter
        .sendMail({
          from: smtpUser,
          to: smtpTo,
          subject: `New Be Member submission - ${fullNameLine || "Unknown"}`,
          text: textBody,
          html: htmlBody,
          attachments,
        })
        .then(() => {
          console.log("Be-member email sent successfully for", fullNameLine || "Unknown");
        })
        .catch((err) => {
          console.error("Error sending be-member email", err);
        });
    }

    return new Response(
      JSON.stringify({ success: true, message: "Details submitted and processed on server." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error handling Be-Member submission", error);
    return new Response(
      JSON.stringify({ success: false, message: "Server error while sending details." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
