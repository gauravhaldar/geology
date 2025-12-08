"use client";

import { useState } from "react";

export default function BeMemberPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    setSuccess("");
    setError("");

    const formData = new FormData(form);

    try {
      const res = await fetch("/api/be-member", {
        method: "POST",
        body: formData,
      });

      let data = null;
      try {
        data = await res.json();
      } catch (e) {
        data = null;
      }

      if (data && data.success) {
        setSuccess("Your CV details have been submitted successfully.");
        form.reset();
      } else {
        setError("There was a problem submitting the form. Please try again.");
      }
    } catch (err) {
      setError("There was a problem submitting the form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-[#0c1513] py-16 text-slate-100">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-10 max-w-2xl">
          <h1 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
            Membership & CV Submission
          </h1>
          <p className="mt-3 text-3xl font-semibold text-slate-50">Become a Member</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200">
            Fill in the form below to create your CV. Your details will be shared with the
            department for review and inclusion in alumni and professional networks.
          </p>
        </div>

        {success && (
          <div className="mb-4 rounded-xl border border-emerald-400/40 bg-emerald-900/30 px-4 py-3 text-sm text-emerald-100 shadow-md shadow-black/40">
            {success}
          </div>
        )}
        {error && (
          <div className="mb-4 rounded-xl border border-red-400/40 bg-red-900/30 px-4 py-3 text-sm text-red-100 shadow-md shadow-black/40">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-10 rounded-2xl border border-white/10 bg-[#050908] px-6 py-8 shadow-xl shadow-black/50 md:px-8"
          encType="multipart/form-data"
        >
        {/* Photo */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-slate-50">Photo</h2>
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Upload Photo
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              className="block w-full text-sm text-slate-100 file:mr-4 file:rounded-md file:border-0 file:bg-emerald-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#050908] hover:file:bg-emerald-400"
            />
          </div>
        </section>

        {/* Basic Information */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-slate-50">Personal Details</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Prefix
              </label>
              <select
                name="prefix"
                className="block w-full rounded-md border border-white/15 bg-[#050908] px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/60"
                required
              >
                <option value="">Select</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="block w-full rounded-md border border-white/15 bg-[#050908] px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/60"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className="block w-full rounded-md border border-white/15 bg-[#050908] px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/60"
                required
              />
            </div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="block w-full rounded-md border border-white/15 bg-[#050908] px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/60"
                required
              />
            </div>
          </div>
        </section>

        {/* Academics */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-slate-50">Academics</h2>

          <div className="space-y-4">
            {/* B.Sc */}
            <div className="grid gap-4 md:grid-cols-3">
              <div className="md:col-span-1 flex items-center">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A14D]">
                  B.Sc
                </span>
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Year
                </label>
                <input
                  type="text"
                  name="bscYear"
                  className="block w-full rounded-md border border-white/15 bg-[#050908] px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/60"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  University / College
                </label>
                <input
                  type="text"
                  name="bscUniversity"
                  className="block w-full rounded-md border border-white/15 bg-[#050908] px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/60"
                />
              </div>
            </div>

            {/* M.Sc */}
            <div className="grid gap-4 md:grid-cols-4">
              <div className="md:col-span-1 flex items-center">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A14D]">
                  M.Sc
                </span>
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Year
                </label>
                <input
                  type="text"
                  name="mscYear"
                  className="block w-full rounded-md border border-white/15 bg-[#050908] px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/60"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="mscSubject"
                  className="block w-full rounded-md border border-white/15 bg-[#050908] px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/60"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  University
                </label>
                <input
                  type="text"
                  name="mscUniversity"
                  className="block w-full rounded-md border border-white/15 bg-[#050908] px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/60"
                />
              </div>
            </div>

            {/* M.Sc Applied */}
            <div className="grid gap-4 md:grid-cols-4">
              <div className="md:col-span-1 flex items-center">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A14D]">
                  M.Sc (Applied)
                </span>
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Year
                </label>
                <input
                  type="text"
                  name="mscAppliedYear"
                  className="block w-full rounded-md border border-white/15 bg-[#050908] px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/60"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="mscAppliedSubject"
                  className="block w-full rounded-md border border-white/15 bg-[#050908] px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/60"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  University
                </label>
                <input
                  type="text"
                  name="mscAppliedUniversity"
                  className="block w-full rounded-md border border-white/15 bg-[#050908] px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/60"
                />
              </div>
            </div>

            {/* Ph.D */}
            <div className="grid gap-4 md:grid-cols-4">
              <div className="md:col-span-1 flex items-center">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A14D]">
                  Ph.D
                </span>
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Year
                </label>
                <input
                  type="text"
                  name="phdYear"
                  className="block w-full rounded-md border border-white/15 bg-[#050908] px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/60"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="phdSubject"
                  className="block w-full rounded-md border border-white/15 bg-[#050908] px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/60"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  University
                </label>
                <input
                  type="text"
                  name="phdUniversity"
                  className="block w-full rounded-md border border-white/15 bg-[#050908] px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/60"
                />
              </div>
            </div>

            {/* Research / Papers */}
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Research / Papers Published
              </label>
              <textarea
                name="researchPapers"
                rows={4}
                className="block w-full rounded-md border border-white/15 bg-[#050908] px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/60"
              />
            </div>
          </div>
        </section>

        {/* Field Work Experience */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-slate-50">Field Work Experience</h2>
          <textarea
            name="fieldWorkExperience"
            rows={4}
            className="block w-full rounded-md border border-white/15 bg-[#050908] px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/60"
          />
        </section>

        {/* Professional Career */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-slate-50">Professional Career</h2>
          <p className="mb-2 text-xs text-slate-300">
            Include organization, role/designation and country.
          </p>
          <textarea
            name="professionalCareer"
            rows={4}
            className="block w-full rounded-md border border-white/15 bg-[#050908] px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/60"
          />
        </section>

        <div className="pt-4">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center rounded-full border border-emerald-400/60 bg-emerald-500 px-6 py-2 text-sm font-semibold tracking-[0.16em] text-[#050908] hover:bg-emerald-400 hover:border-emerald-300 disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      </div>
    </section>
  );
}
