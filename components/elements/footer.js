import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" text-white pl-20  shadow-xl shadow-white-500  py-10 px-6">
      <div className="max-w-7xl px-10 w-[90%] mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Panel */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {/* Logo Placeholder */}
            <div className=" flex items-center justify-center text-gray-900 font-bold">
              <Image
                src="/images/logo.png"
                className=" rounded-br-xl  rounded-tr-sm rounded-tl-xl rounded-bl-sm flex-shrink-0"
                width={50}
                height={50}
                alt="Logo"
              />
            </div>
            <h1 className="text-2xl font-semibold">CoderRoom</h1>
          </div>
          <p className="text-gray-400">Turning ideas into Reality</p>
          <Link href="/contact">
            <button className="mt-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Right Panel */}
        <div className="space-y-3 ">
          <h2 className="text-xl font-semibold">For Enquiry</h2>
          <p className="text-gray-300">📞 9810694357</p>
          <p className="text-gray-300">📧 itsmemayank02@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
