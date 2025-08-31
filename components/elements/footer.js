import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" text-white pl-20  shadow-2xl shadow-white-100 border-t py-10 px-6">
      <div className="max-w-7xl px-10 w-[80%] mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Panel */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {/* Logo Placeholder */}
            <div className=" flex items-center justify-center text-gray-900 font-bold">
              <Image
                src="/images/logo.png"
                className=" rounded-br-xl bg-white rounded-tr-sm rounded-tl-xl rounded-bl-sm flex-shrink-0"
                width={50}
                height={50}
                alt="Logo"
              />
            </div>
            <h1 className="text-2xl font-semibold">CoderRoom</h1>
          </div>
          <p className="text-gray-400 text-center mb-4">Turning ideas into Reality</p>
          <Link href="/contact" >
             <button className="inline-flex h-12 animate-shimmer mt-4 w-full items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
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
