import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      studentFirstName,
      studentLastName,
      dateOfBirth,
      gradeApplyingFor,
      currentSchool,
      parentName,
      relationship,
      phone,
      email,
      address,
      message,
    } = body;

    if (
      !studentFirstName ||
      !studentLastName ||
      !dateOfBirth ||
      !gradeApplyingFor ||
      !parentName ||
      !relationship ||
      !phone ||
      !email
    ) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "De La Salle Kigali <onboarding@resend.dev>",
      to: ["ingenerem@gmail.com"],
      subject: `New Application - ${studentFirstName} ${studentLastName}`,
      html: `
        <h2>New Student Application</h2>

        <h3>Student Information</h3>
        <p><strong>Name:</strong> ${studentFirstName} ${studentLastName}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
        <p><strong>Grade Applying For:</strong> ${gradeApplyingFor}</p>
        <p><strong>Current School:</strong> ${currentSchool || "Not provided"}</p>

        <h3>Parent / Guardian Information</h3>
        <p><strong>Name:</strong> ${parentName}</p>
        <p><strong>Relationship:</strong> ${relationship}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address || "Not provided"}</p>

        <h3>Additional Message</h3>
        <p>${message || "No message provided."}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { message: "Email could not be sent." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Application submitted successfully." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}