import React from "react";
export default function Portfolio() {
  return (
<div className="p-8 font-sans bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 min-h-screen">
  {/* Header */}
  <section className="text-center py-12 bg-white rounded-2xl shadow-md mb-8">
    <h1 className="text-5xl font-extrabold text-indigo-700">Haris</h1>
    <p className="mt-4 text-xl text-gray-600">Full Stack Developer</p>
    <p className="mt-2 text-md text-gray-500">ASP.NET | VB.NET | .NET Core | React | Angular | PostgreSQL | MSSQL</p>
  </section>

  {/* About */}
  <section className="py-8">
    <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 inline-block mb-4">About Me</h2>
    <p className="text-lg leading-relaxed">
      I'm a passionate full stack developer with <span className="font-semibold text-indigo-700">3 years of experience</span>
      delivering robust web solutions. I’ve worked extensively on modernizing legacy systems —
      transforming <span className="font-semibold text-indigo-600">VB.NET desktop apps and XML-driven Java Spring backends</span> 
      into modern, scalable React and Angular applications.
      My focus is on performance, clean architecture, and user-friendly design.
    </p>
  </section>

  {/* Skills */}
  <section className="py-8">
    <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 inline-block mb-4">Skills</h2>
    <ul className="list-disc ml-6 text-lg space-y-2">
      <li><strong>Backend:</strong> ASP.NET MVC, .NET Core, Web API, VB.NET</li>
      <li><strong>Frontend:</strong> React, Angular, JavaScript, Tailwind CSS</li>
      <li><strong>Databases:</strong> PostgreSQL, MS SQL Server</li>
      <li><strong>Migration:</strong> Legacy XML + Java Spring apps to modern JS frameworks</li>
      <li><strong>Tools:</strong> Git, GitHub, Vercel, Postman</li>
    </ul>
  </section>

  {/* Projects */}
  <section className="py-8">
  <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 inline-block mb-4">Projects</h2>
  <ul className="list-disc ml-6 text-lg space-y-6">

    <li>
      <strong>CRM-Fincontinuo (C3L1)</strong><br />
      A specialized CRM system built for Fincontinuo to manage loan applications. Initially developed in VB.NET (frontend) and Java (backend) with XML, it was renovated in React, with ongoing backend migration to Python.
      <ul className="list-disc ml-6 mt-1 text-base">
        <li>Automated loan workflow, user tracking, multi-language support</li>
        <li>Data security (GDPR), audit logs, API integrations</li>
      </ul>
      <span className="block mt-2 text-base font-medium">Stack: React, Redux, Material-UI, Java, Python (ongoing), PostgreSQL</span>
    </li>

    <li>
      <strong>School Management System</strong><br />
      Developed for academic institutions to manage students, teachers, staff, salaries, and fees.
      <ul className="list-disc ml-6 mt-1 text-base">
        <li>Academic, financial, and admin module integration</li>
        <li>User roles for admin, staff, and principal</li>
      </ul>
      <span className="block mt-2 text-base font-medium">Stack: .NET Core, Angular, MSSQL Server</span>
    </li>

    <li>
      <strong>DCP – Directorate of Civilian Personnel (PAF)</strong><br />
      Developed for Pakistan Air Force to manage all civilian personnel data. 
      <ul className="list-disc ml-6 mt-1 text-base">
        <li>Posting locations, BPS scales, service ranks, personal & family info</li>
        <li>Reimbursements, transfers, children/spouse/relative records</li>
        <li>Full CRUD system with VB.NET & MS SQL</li>
      </ul>
      <span className="block mt-2 text-base font-medium">Stack: VB.NET, SQL Server</span>
    </li>

    <li>
      <strong>DCP Dashboard</strong><br />
      A modern Angular-based dashboard for PAF civilians to quickly view their information, including service details, current postings, and ranks. No data entry is allowed—purely a view-based solution.
      <ul className="list-disc ml-6 mt-1 text-base">
        <li>Clean UI to fetch and display individual records</li>
        <li>Optimized for fast lookup and mobile access</li>
      </ul>
      <span className="block mt-2 text-base font-medium">Stack: Angular, .NET Core, SQL Server</span>
    </li>

    <li>
      <strong>Financial Management System</strong><br />
      Built for businesses to handle budgeting, cash flow, expenses, and financial reporting.
    </li>

    <li>
      <strong>ERP Suite</strong><br />
      Modular ERP including HR, payroll, inventory, and CRM, developed with .NET Core & Angular.
    </li>

    <li>
      <strong>Legacy Application Renovations</strong><br />
      Migrated VB.NET/Java/XML systems to modern stacks like React and Angular, preserving logic while enhancing performance.
    </li>

    <li>
      <strong>Admin Dashboards</strong><br />
      Designed executive dashboards with KPIs, reports, and graphs using React & PostgreSQL.
    </li>

  </ul>
</section>



  {/* Contact */}
  <section className="py-8">
    <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 inline-block mb-4">Contact</h2>
    <p className="text-lg">📧 Email: <a href="mailto:haris.aup.edu@gmail.com" className="text-indigo-600 underline">haris.aup.edu@gmail.com</a></p>
  </section>
</div>

  );
}
