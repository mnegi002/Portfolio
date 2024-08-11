"use client";

export default function Internship() {
  return (
    <>
      <div className="p-10">
        <h1 className="text-5xl text-center p-5 font-bold mb-6">Experience</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Handlebuzz</h2>
          <p className="text-xl font-medium mb-2">Frontend Developer Intern | 01 February, 2023 - 31 March, 2023</p>
          <ul className="list-disc list-inside ml-4">
            <li>Developed <span className="font-semibold">responsive</span> and <span className="font-semibold">user-friendly</span> web interfaces using HTML, CSS, and JavaScript, ensuring seamless user experiences across devices.</li>
            <li>Spearheaded the creation of dynamic websites like <span className="font-semibold">Vimarshdarpan</span> and <span className="font-semibold">Zamzamportal</span>, resulting in a <span className="font-semibold">50% increase</span> in monthly active users and a <span className="font-semibold">45% boost</span> in user retention rates.</li>
            <li>Collaborated with cross-functional teams to improve website performance and <span className="font-semibold">optimize</span> front-end functionalities.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">TheIndianDev Technologies</h2>
          <p className="text-xl font-medium mb-2">Frontend Developer Intern | 12 June, 2023 - 12 August, 2023</p>
          <ul className="list-disc list-inside ml-4">
            <li>Built engaging mini-projects using modern technologies like HTML, CSS, JavaScript, and <span className="font-semibold">React.js</span>.</li>
            <li>Enhanced UI/UX by utilizing specific React functionalities (e.g., <span className="font-semibold">hooks</span> like useState, useContext, useEffect).</li>
            <li>Developed a variety of projects, including <span className="font-semibold">mini-games</span>, <span className="font-semibold">clones</span>, a <span className="font-semibold">chatting application</span>, and <span className="font-semibold">food ordering websites</span>.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
