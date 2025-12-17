import React from "react";
import CvDoc from "/imgs/resume.pdf";

function Resume() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold">
          My <span className="text-[#cc5ef7]">Resume</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Download or view my latest resume below
        </p>
      </div>

      {/* Download Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href={CvDoc}
          download="SijanShrestha_Resume.pdf"
          rel="noopener noreferrer"
          className="bg-[#cc5ef7] text-white px-6 py-3 rounded-lg shadow-lg shadow-[#cc5ef7]/30 hover:bg-[#ad48d4] hover:shadow-xl hover:shadow-[#cc5ef7]/40 active:scale-95 flex items-center gap-3 transition-all font-semibold focus:outline-none focus:ring-2 focus:ring-[#cc5ef7]/50 focus:ring-offset-2 focus:ring-offset-black"
        >
          <i className="fi fi-sr-cloud-download-alt text-xl"></i>
          <span>Download Resume</span>
        </a>
      </div>

      {/* Preview Section */}
      <div className="flex flex-col items-center w-full max-w-3xl">
        <img
          src="/imgs/resume.svg"
          alt="Resume Preview"
          className="w-full h-auto rounded-xl shadow-2xl border border-white/5"
        />
      </div>
    </div>
  );
}

export default Resume;
