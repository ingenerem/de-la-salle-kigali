"use client";

// useState lets this component remember changing values.
// We use it for loading, success, and error messages.
import { useState } from "react";

// All visible text comes from this file.
// Later, this makes translation easier.
import { applyContent } from "./messages/en";

export default function ApplyPage() {
  // true while the form is sending.
  // This disables the button and shows "Submitting..."
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Message shown when the form submits successfully.
  const [successMessage, setSuccessMessage] = useState("");

  // Message shown when something goes wrong.
  const [errorMessage, setErrorMessage] = useState("");

  // This runs when the user clicks Submit.
  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;

  setSuccessMessage("");
  setErrorMessage("");
  setIsSubmitting(true);

  const formData = new FormData(form);

  const payload = {
    studentFirstName: formData.get("studentFirstName"),
    studentLastName: formData.get("studentLastName"),
    dateOfBirth: formData.get("dateOfBirth"),
    gradeApplyingFor: formData.get("gradeApplyingFor"),
    currentSchool: formData.get("currentSchool"),
    parentName: formData.get("parentName"),
    relationship: formData.get("relationship"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    address: formData.get("address"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    let data: { message?: string } = {};

    try {
      data = await response.json();
    } catch {
      data = {};
    }

    if (!response.ok) {
      setSuccessMessage("");
      setErrorMessage(data.message || "Application could not be submitted.");
      return;
    }

    setErrorMessage("");
    setSuccessMessage(data.message || "Application submitted successfully.");

    form.reset();
  } catch {
    setSuccessMessage("");
    setErrorMessage("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
}
  async function handleSubmitting(event: React.SyntheticEvent<HTMLFormElement>) {


    // Stops the browser from refreshing the page.
    event.preventDefault();

    // Clear old messages before trying again.
    setSuccessMessage("");
    setErrorMessage("");

    // Start loading state.
    setIsSubmitting(true);

    // Gets all form fields using their name="" values.
    const formData = new FormData(event.currentTarget);

    // This object must match what /api/apply expects.
    const payload = {
      studentFirstName: formData.get("studentFirstName"),
      studentLastName: formData.get("studentLastName"),
      dateOfBirth: formData.get("dateOfBirth"),
      gradeApplyingFor: formData.get("gradeApplyingFor"),
      currentSchool: formData.get("currentSchool"),
      parentName: formData.get("parentName"),
      relationship: formData.get("relationship"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      address: formData.get("address"),
      message: formData.get("message"),
    };

    try {
      // Send form data to our Next.js API route.
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          // Tells the API we are sending JSON.
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Read the response from the API.
      const data = await response.json();

      // If API returned an error status, show error message.
      if (!response.ok) {
       
        setSuccessMessage("");
        setErrorMessage(data.message || "Application could not be submitted.");
        return;
      }

      setErrorMessage("");
       console.log(response, "----------------------", data.message)
      setSuccessMessage(data.message || "Application submitted successfully.");

      event.currentTarget.reset();
    } catch {
      setSuccessMessage("");
      setErrorMessage("Something went wrong. Please try again.");
      console.log()
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">

      <section className="mx-auto max-w-4xl">
        {/* Page heading */}
        <div className="mb-8 text-center">
          <p className="mb-3 inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-800">
            {applyContent.badge}
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
            {applyContent.title}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            {applyContent.description}
          </p>
        </div>

        {/* onSubmit connects the form to handleSubmit */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
        >
          {/* Student section */}
          <div className="mb-10">
            <h2 className="mb-5 border-b border-slate-200 pb-3 text-xl font-bold text-blue-950">
              {applyContent.sections.student}
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="studentFirstName" label={applyContent.fields.studentFirstName} required />
              <Field name="studentLastName" label={applyContent.fields.studentLastName} required />
              <Field name="dateOfBirth" label={applyContent.fields.dateOfBirth} type="date" required />
              <Field
                name="gradeApplyingFor"
                label={applyContent.fields.gradeApplyingFor}
                placeholder={applyContent.placeholders.gradeApplyingFor}
                required
              />
              <Field
                name="currentSchool"
                label={applyContent.fields.currentSchool}
                placeholder={applyContent.placeholders.currentSchool}
                className="sm:col-span-2"
              />
            </div>
          </div>

          {/* Parent section */}
          <div className="mb-10">
            <h2 className="mb-5 border-b border-slate-200 pb-3 text-xl font-bold text-blue-950">
              {applyContent.sections.parent}
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="parentName" label={applyContent.fields.parentName} required />
              <Field
                name="relationship"
                label={applyContent.fields.relationship}
                placeholder={applyContent.placeholders.relationship}
                required
              />
              <Field name="phone" label={applyContent.fields.phone} type="tel" required />
              <Field name="email" label={applyContent.fields.email} type="email" required />
              <Field name="address" label={applyContent.fields.address} className="sm:col-span-2" />
            </div>
          </div>

          {/* Documents are optional for MVP */}
          <div className="mb-10">
            <h2 className="mb-5 border-b border-slate-200 pb-3 text-xl font-bold text-blue-950">
              {applyContent.sections.documents}
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              <FileField label={applyContent.fields.birthCertificate} />
              <FileField label={applyContent.fields.previousReport} />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                {applyContent.fields.message}
              </label>

              <textarea
                name="message"
                rows={5}
                placeholder={applyContent.placeholders.message}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Error message only appears if errorMessage is not empty */}
          {errorMessage && (
            <div className="mb-5 rounded-2xl border border-red-300 bg-red-50 px-5 py-4">
              <p className="text-sm font-semibold !text-red-700">
                {errorMessage}
              </p>
            </div>
          )}
          {/* Success message only appears if successMessage is not empty */}
          {successMessage && (
            <p className="mb-4 rounded-2xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
              {successMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-blue-950 px-6 py-4 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-900 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : applyContent.submit}
          </button>
        </form>
      </section>
    </main>
  );
}

// Reusable text input component.
// name is very important: FormData uses it to collect the value.
function Field({
  name,
  label,
  type = "text",
  placeholder,
  required = false,
  className = "",
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}

// Reusable file input component.
// Files are optional and not submitted yet in this MVP version.
function FileField({ label }: { label: string }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <input
        type="file"
        className="w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-blue-950 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:bg-slate-100"
      />
    </div>
  );
}