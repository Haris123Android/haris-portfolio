import React from "react";
export default function Portfolio() {
  return (
    <div className="p-6 font-sans bg-gray-100 text-gray-800">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">Haris - Full Stack Developer</h1>
        <p className="mt-4 text-lg">ASP.NET | React | Angular | PostgreSQL | MSSQL</p>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-2">
          I'm a full stack developer with 5+ years of experience delivering high-quality
          solutions in web development using .NET, VB.NET, React, Angular, PostgreSQL, and MSSQL.
        </p>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>ASP.NET MVC, .NET Core, Web API, VB.NET</li>
          <li>React, Angular, JavaScript</li>
          <li>PostgreSQL, MS SQL Server</li>
        </ul>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="mt-2">Portfolio examples or links to GitHub/Upwork projects here</p>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>Email: haris@nexobyte.com</p>
      </section>
    </div>
  );
}
