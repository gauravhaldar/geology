"use client";

import React from "react";
import Image from "next/image";

export default function FacultyMembersPage() {
  return (
    <main className="min-h-screen bg-[#0f1815] py-16 text-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-bold mb-8 text-[#C8A14D]">
          Department of Geology
        </h1>

        <section className="space-y-4 text-justify leading-relaxed text-slate-100/90">
        <p>
          The Department of Geology was established in the year 1951 initially in the
          Faculty of Technology and Engineering with limited staff and equipment&apos;s
          with undergraduate teaching. The present venue of the Department in the
          Faculty of Science was established in 1965 with full fledged undergraduate,
          postgraduate courses and research programmes in varied disciplines of
          Geology. An extension wing was added in 1987. At present there are 12
          faculty members in the Department, of which six are Professors.
        </p>
        <p>
          The Department is offering B.Sc., M. Sc., MSc. (Applied Geology) and M.Sc.
          (Petroleum Geology) courses. Since its inception, a total of 145 students
          have completed their Ph.D. and 12 students are working at present for their
          Ph.D. The research students include those with fellowships from CSIR, major
          research projects and also from ONGC, GSI, ISRO, PRL and state government
          departments. The Department is well known nationally and internationally for
          high quality teaching and cutting edge research particularly in the areas of
          Quaternary Geology, palaeoclimatology, Geomorphology, Neotectonics,
          Sedimentology, Metamorphic Petrology, Ichnology, Palaeohydrology and Remote
          sensing. Majority of the teaching staff are actively pursuing their
          research with the help of funding from Department of Science and Technology
          (DST), Ministry of Earth Science, ISRO, UGC and others. Over the years, the
          Department has gained a reputation as a major contributor to the frontline
          research in Earth Science in the country. All staff members are well known
          for producing high quality research which is published and cited in reputed
          national and international journals.
        </p>
        <p>
          The Department has traditionally maintained a vibrant atmosphere of teaching
          and research. The main strength of the Department is the well qualified and
          highly distinguished faculty. The staff members are well known for their
          research work in their respective fields. The Department also has several
          laboratories and state of art equipments for carrying out teaching and
          research. The syllabi of the various courses are periodically upgraded in
          line with contemporary trends and needs. This is reflected in the large
          number of students qualifying in NET and other competitive examinations.
          The students also get placement regularly in several reputed government and
          private organisations.
        </p>
        <p>
          Geology has always been an interesting and alluring subject, which attracts
          students in large numbers. For students opting for Geology, we have adopted
          the modern world techniques of rapid communication and knowledge dispersal
          by providing opportunities for active participation of the students. Field
          based practical knowledge is given priority. Sincere efforts are
          continuously made for creating additional infrastructure to bring about
          quality changes in the existing facilities to upgrade the standard of
          teaching.
        </p>
        <p>
          The Department is housed in three storied building along with an extension
          wing. All staff members are provided with individual rooms in addition to
          the laboratories. The Department has well equipped laboratories with
          sophisticated instruments, several lecture rooms with audio-visual
          facilities and computer room with internet facility for staff and students.
          Specialised laboratories with advanced instruments which include
          Sedimentology lab, Geochemistry lab, Remote Sensing lab, Advanced Optical
          lab and Micropalaeontology lab. The Department also has advanced field
          equipments like GPR, GPS, Resistivity meter and fieldwork camping
          facilities. The Department also has a well furnished Seminar room and
          library. A centralised canteen facility of the Faculty of Science for
          students is located adjacent to the Department.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#C8A14D]">Research</h2>
        <p className="mb-3 text-justify leading-relaxed text-slate-100/90">
          The Department is known for producing high quality research publications in
          reputed national and international journals. All staff members have
          excellent academic credentials and are recognised for guiding research
          students. Some of the staff members possess very high citation index, a
          reflection of the high quality research being carried out in the
          Department. Some of the aspects of research being actively pursued by the
          staff members of the Department are as follows:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Quaternary climatic and Hydrogeological changes in Western India.
          </li>
          <li>
            Evolution of Coastal plains and sediment disposal system along Gulf of
            Cambay and Kachchh.
          </li>
          <li>Geometry and nature of active faults in Gujarat.</li>
          <li>
            Evolution of Great and little Rann of Kachchh using subsurface cores.
          </li>
          <li>
            Environmental conditions during late Quaternary in the Nal-Bhal
            corridor.
          </li>
          <li>
            Structural and metamorphic history of the Aravalli Group of rocks of NE
            Gujarat.
          </li>
          <li>
            Ichnological and Sedimentological studies of Mesozoic and Cenozoic
            sequences in Gujarat.
          </li>
        </ul>
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-3 text-[#C8A14D]">
            Head of Department
          </h2>
          <div className="mb-3 flex items-center gap-3">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/20">
              <Image
                src="/HOD.jpeg"
                alt="Head of Department - Prof. Atul V. Joshi"
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div>
              <p className="font-medium">Prof. Atul V. Joshi</p>
              <p className="text-sm text-slate-300">Head of Department</p>
            </div>
          </div>
          <p className="mt-2 text-sm">Phone: 0265-2785560</p>
          <p className="text-sm">Email: head-geology@msubaroda.ac.in</p>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-3 text-[#C8A14D]">
            Faculty Members
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Prof. Atul V. Joshi &mdash; Professor</li>
            <li>Prof. Bhushan S. Deota &mdash; Professor</li>
            <li>Prof. Deepak M. Maurya &mdash; Professor</li>
            <li>Prof. Dhananjay A. Sant &mdash; Professor</li>
            <li>Prof. Manoj A. Limaye &mdash; Professor</li>
            <li>Prof. Satish J. Patel &mdash; Professor</li>
          </ul>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-3 text-[#C8A14D]">
            Other Teaching Staff
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Dr. Alpa Sridhar &mdash; Woman Scientist</li>
            <li>Dr. Chinmay Dongare &mdash; Temporary Assistant Professor</li>
            <li>Dr. Aditya U. Joshi &mdash; Temporary Assistant Professor</li>
            <li>Dr. Vijay Sharma &mdash; Temporary Assistant Professor</li>
            <li>Ms. Nishi Shah &mdash; Temporary Teaching Assistant</li>
            <li>Ms. Poonam Mangtani &mdash; Temporary Teaching Assistant</li>
          </ul>
        </div>
      </section>
      </div>
    </main>
  );
}
