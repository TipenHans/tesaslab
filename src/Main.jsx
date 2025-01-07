import React from "react";
import Map2 from "./Map2";

const Main = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-center mt-8 mb-4">
        Selamat Datang
      </h1>

      <div className="flex space-x-6 w-full max-w-5xl p-6">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold mb-4">Apa itu UMN DOC?</h2>
          <p className="text-sm text-gray-600">
            UMN Documentation atau UMN Doc adalah lembaga kampus yang bertugas
            dalam bidang dokumentasi dan broadcasting acara-acara di kampus.
          </p>
        </div>

        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold mb-4">Job Desc</h2>
          <p className="text-sm text-gray-600">
            Jobdesc yang terdapat di umn documentation adalah photographer,
            videographer, konten operator, swticher, campers, dan job-desc
            lainnya yang berhubungan dengan
          </p>
        </div>
      </div>
      <div className="mb-8">
        <Map2 />
      </div>
    </div>
  );
};

export default Main;
