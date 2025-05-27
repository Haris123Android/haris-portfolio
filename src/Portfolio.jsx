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
        building scalable and robust web applications using modern technologies. I specialize in creating high-performance systems 
        with clean architecture and beautiful user interfaces.
      </p>
    </section>
  
    {/* Skills */}
    <section className="py-8">
      <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 inline-block mb-4">Skills</h2>
      <ul className="list-disc ml-6 text-lg space-y-2">
        <li><strong>Backend:</strong> ASP.NET MVC, .NET Core, Web API, VB.NET</li>
        <li><strong>Frontend:</strong> React, Angular, JavaScript, Tailwind CSS</li>
        <li><strong>Databases:</strong> PostgreSQL, MS SQL Server</li>
        <li><strong>Tools:</strong> Git, GitHub, Vercel, Postman</li>
      </ul>
    </section>
  
    {/* Projects */}
    <section className="py-8">
      <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 inline-block mb-4">Projects</h2>
      <ul className="list-disc ml-6 text-lg space-y-3">
        <li><strong>Financial Management System</strong> — A secure web-based solution to handle multi-user finance and accounting operations.</li>
        <li><strong>ERP System</strong> — Developed modular enterprise resource planning software covering HR, Inventory, and Sales.</li>
        <li><strong>Admin Dashboard</strong> — Built multiple dashboards for data visualization, analytics, and dynamic reporting.</li>
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
