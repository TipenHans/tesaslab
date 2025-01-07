import React from "react";

const Daftar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    swal(
      "Pendaftaran Berhasil!",
      "Selamat, Anda telah berhasil mendaftar ke UMNDOC. Pantau terus media sosial Instagram @umndoc untuk informasi selanjutnya",
      "success"
    );
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-8 mb-4">
        Pendaftaran UMNDOC
      </h1>
      <p className="text-lg text-center mb-8">
        Daftarkan dirimu untuk menjadi bagian dari UMN Documentation sekarang!
      </p>
      <div className="p-6 border rounded-lg shadow-lg animate__animated animate__fadeIn max-w-lg mx-auto">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nama Lengkap:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <br />
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <br />
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Nomor Telepon:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <br />
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Daftar;
