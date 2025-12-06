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

    const lines = [];

    lines.push(`Name: ${fullNameLine}`);
    lines.push(`Email: ${email}`);
    lines.push("");

    lines.push("ACADEMICS");
    if (bscYear || bscUniversity) {
      lines.push(`B.Sc: Year: ${bscYear} | University/College: ${bscUniversity}`);
    }
    if (mscYear || mscSubject || mscUniversity) {
      lines.push(`M.Sc: Year: ${mscYear} | Subject: ${mscSubject} | University: ${mscUniversity}`);
    }
    if (mscAppliedYear || mscAppliedSubject || mscAppliedUniversity) {
      lines.push(
        `M.Sc (Applied): Year: ${mscAppliedYear} | Subject: ${mscAppliedSubject} | University: ${mscAppliedUniversity}`
      );
    }
    if (phdYear || phdSubject || phdUniversity) {
      lines.push(`Ph.D: Year: ${phdYear} | Subject: ${phdSubject} | University: ${phdUniversity}`);
    }
    lines.push("");

    if (researchPapers) {
      lines.push("RESEARCH / PAPERS PUBLISHED");
      lines.push(researchPapers);
      lines.push("");
    }

    if (fieldWorkExperience) {
      lines.push("FIELD WORK EXPERIENCE");
      lines.push(fieldWorkExperience);
      lines.push("");
    }

    if (professionalCareer) {
      lines.push("PROFESSIONAL CAREER (WITH COUNTRY)");
      lines.push(professionalCareer);
      lines.push("");
    }

    const cvText = lines.join("\n");

    console.log("New Be-Member submission:");
    console.log(cvText);

    if (photo && typeof photo === "object") {
      const photoArrayBuffer = await photo.arrayBuffer();
      const photoBytes = Buffer.from(photoArrayBuffer);
      console.log("Photo uploaded:", {
        filename: photo.name,
        size: photoBytes.length,
        type: photo.type,
      });
    }

    return new Response(
      JSON.stringify({ success: true, message: "CV created and logged on server." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error handling Be-Member submission", error);
    return new Response(
      JSON.stringify({ success: false, message: "Server error while processing CV." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
