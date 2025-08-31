"use client";

export default function Internship() {
  return (
    <>
      <div className="md:p-10  space-y-10 flex flex-col items-center ">
        <div>
          <h1 className="text-4xl md:text-5xl text-center p-5 font-bold  md:mb-6">
            Experience
          </h1>
        </div>

        <div className=" w-[90%]">
          <h2 className="text-2xl font-semibold mb-2">Colibyt Technologies</h2>
          <p className="text-sm md:text-xl font-medium mb-2">
            Full-Stack Developer | August &apos;24 - Present
          </p>
          <ul className="list-disc list-outside md:ml-4">
            <li>
              Roles and responsibilities include developing a BaaS (Intelchain)
              and its community . Made it using
              <span className="font-semibold">
                &nbsp; MERN Stack, Next.js and Prisma DB.
              </span>
              .
            </li>
            <li>
              Made Noddi and its portal, for buying the nodes using Intellicoin.
            </li>
            <li>
              Also used Web Sockets for real-time data interpretation and build
              responsive and user-friendly interfaces with React and Next.js and
              added Crypto Payments.
            </li>
          </ul>
        </div>

        <div className=" w-[90%]">
          <h2 className="text-2xl font-semibold mb-2">Handlebuzz</h2>
          <p className=" text-sm md:text-xl font-medium mb-2">
            Full-Stack Developer | July &apos;23 - July &apos;24
          </p>
          <ul className="list-disc list-outside md:ml-4">
            <li>
              Roles & responsibilities include building engaging projects using
              modern technologies like
              <span className="font-semibold">
                &nbsp; HTML , CSS , Javascript , React.js.
              </span>
              .
            </li>
            <li>
              The UI/UX is enhanced using specific React functionalities (e.g.,
              hooks like useState, useContext, useEffect etc).
            </li>
            <li>
              Efficient backend and database using MongoDB and MySQL and Node.js runtime environment.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
