import React from "react";
import CvDoc from "/imgs/resume.pdf";

function Resume() {
  return (
    <div className="flex flex-col md:flex-col justify-center items-center gap-10 mb-12 mt-12">
      {/* Download Section */}
      <div className="flex flex-col items-center">
        <a
          href={CvDoc}
          download="SijanShrestha_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#cc5ef7] text-white px-6 py-3 rounded shadow hover:bg-[#ad48d4] flex items-center gap-2 transition"
        >
          <i className="fi fi-sr-cloud-download-alt text-2xl"></i>
          Download Resume
        </a>
      </div>
      {/* Preview Section */}
      <div className="flex flex-col items-center w-full md:w-2/3">
        <img
          src="/imgs/resume.svg"
          alt="Resume Preview"
          className="w-full max-w-2xl h-auto rounded shadow"
        />
      </div>
    </div>
  );
}

export default Resume;
