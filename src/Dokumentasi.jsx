import React from "react";
import { dokum, dokum2 } from "./dokum";
import "./styles.css";

const Dokumentasi = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Dokumentasi</h1>
      <h2 className="text-2xl font-semibold text-center my-8">
        Simulasi Gempa
      </h2>
      <div className="relative pb-4">
        <div className="photo-container">
          {dokum.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-80 h-80">
              <img
                src={item.imgurl}
                alt={`foto ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center my-8">UMN Festival</h2>
      <div className="grid grid-cols-3 gap-4">
        {dokum2.map((item, index) => (
          <div key={index} className="group relative">
            <img
              src={item.imgurl}
              alt={`foto ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dokumentasi;
