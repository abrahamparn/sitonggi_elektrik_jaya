import React from "react";
import Facebook from "../assets/Icon/Facebook.png";
import Instagram from "../assets/Icon/Instagram.png";
import LinkedIn from "../assets/Icon/LinkedIn.png";
import Youtube from "../assets/Icon/YouTube.png";
import Play from "../assets/Icon/Play.png";
import Play2 from "../assets/Icon/Play2.png";
export default function Footer() {
  return (
    <section className="bg-black_stg ps-[54px] pe-[54px] pt-[67px] pb-[74px]">
      <div className="sm:flex sm:flex-col mdplus:grid mdplus:grid-cols-12 xl:space-x-40 lg:space-x-30 mdplus:space-x-24">
        <div className="mdplus:col-span-4 sm:flex sm:flex-col sm:mb-3">
          <h2 className="text-3xl font-bold text-yellow_stg mb-3">
            PT. SITONGGI ELEKTRIK JAYA
          </h2>
          <p className="text-white leading-10 sm:mb-3 lg:mb-8">
            Jl.Ruko Dukuh Zamrud Blok GD52
            <br />
            Kel.Pedurenan RT/RW.003/009
            <br />
            Telp. 0812-9177-3354
          </p>
          <div className="flex flex-row sm:space-x-2 md:space-x-8 lg:space-x-8">
            <img src={Instagram} />
            <img src={Facebook} />
            <img src={Youtube} />
            <img src={LinkedIn} />
          </div>
        </div>
        <div className="mdplus:col-span-2 sm:mb-3 text-white font-bold flex flex-col mdplus:items-center">
          <ul className="mdplus:space-y-5 sm:space-y-4">
            <li className="flex flex-row mdplus:justify-center mdplus:text-lg">
              Peta Situs
            </li>
            <li className="flex flex-row items-center">
              <img src={Play2} /> Beranda
            </li>
            <li className="flex flex-row items-center">
              <img src={Play2} /> Produk
            </li>
            <li className="flex flex-row items-center">
              <img src={Play2} /> Proyek
            </li>
            <li className="flex flex-row items-center">
              <img src={Play2} /> Perusahaan
            </li>
            <li className="flex flex-row items-center">
              <img src={Play2} /> FAQ
            </li>
          </ul>
        </div>
        <div className="col-span-6 text-white flex flex-col  sm:space-y-4 mdplus:space-y-5 xl:space-y-8">
          <p className="font-bold mdplus:text-lg xl:text-xl">
            Langganan dengan berita kami
          </p>
          <p>Dapatkan kesempatan mendapatkan harga-harga terbaik dari kami.</p>
          <form className="flex justify-start items-center ">
            <input
              type="email"
              className="sm:w-[150px] sm:p-[3px] md:w-[300px] md:p-2 rounded-l-lg bg-transparent border  border-t-yellow_stg border-l-yellow_stg border-b-yellow_stg border-r-transparent focus:outline-none placeholder-white focus:border-orange-600 focus:border-r-transparent"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white  sm:px-2 sm:py-1 md:px-6 md:py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
