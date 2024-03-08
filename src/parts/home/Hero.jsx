import BGImage from "../../assets/Image/BGImage.png";
import Address from "../../assets/Icon/Address.png";
import Contact from "../../assets/Icon/Contact.png";
import Email from "../../assets/Icon/Email.png";
import { useState, useEffect } from "react";
("use client");

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the hamburger menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state
    console.log("clicked");
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]); // This effect depends on isMenuOpen
  return (
    <section className="relative sm:min-h-[580px] lg:min-h-[720px] xl:min-h-[861px] ">
      <img
        src={BGImage}
        className="absolute top-0 left-0 w-full h-full z-0 object-cover opacity-100"
      />

      <div className="relative z-10 h-full bg-gray text-white ">
        <div className="flex flex-row md:hidden p-5  bg-white justify-between">
          <p className="text-yellow_stg font-bold">
            PT. SITONGGI ELEKTRIK JAYA
          </p>
          <button onClick={toggleMenu}>
            <div className="space-y-2">
              <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            </div>
          </button>
        </div>
        {/* INI BUAT MD KE BAWAH */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
          {/* Your menu items here */}
          <div className="z-50 w-screen h-screen text-black bg-white ">
            {/* Menu items can be listed here */}
            <a
              href="#"
              className=" p-3 ps-8 text-xl font-semibold text-yellow_stg "
            >
              Beranda
            </a>
            <a href="#produk" className=" p-3 ps-8 text-xl font-semibold">
              Produk
            </a>
            <a href="#proyek" className=" p-3 ps-8 text-xl font-semibold">
              Proyek
            </a>
            <a href="#testimoni" className=" p-3 ps-8 text-xl font-semibold">
              Testimoni
            </a>
            <a href="#kontakKami" className=" p-3 ps-8 text-xl font-semibold">
              Kontak Kami
            </a>
          </div>
        </div>
        {/* INI BUAT MD KE ATAS */}
        <div className="hidden md:flex flex-row items-center md:gap-x-5 lg:gap-x-10 xl:gap-x-16 h-full bg-neutral-900 md:p-2 lg:p-3 xl:p-5 bg-opacity-70">
          <div className="h-full md:me-6 lg:me-12 xl:me-16">
            <p className="text-center md:text-base lg:text-lg xl:text-2xl text-yellow_stg font-bold ">
              PT. SITONGGI ELEKTRIK JATA
            </p>
          </div>
          <div className="flex flex-row h-full justify-center items-center">
            <img
              src={Contact}
              className="md:object-fill lg:object-none md:h-[40px] lg:h-[50px] md:w-[20px] lg:w-[30px]"
            />
            <div className="flex flex-col md:text-xs lg:text-sm xl:text-base ">
              <p className="text-yellow_stg">Telephone</p>
              <p>0812-9177-3354</p>
            </div>
          </div>
          <div className="flex flex-row h-full justify-center items-center">
            <img
              src={Email}
              className="md:object-fill lg:object-none md:h-[40px] lg:h-[50px] md:w-[20px] lg:w-[30px]"
            />
            <div className="flex flex-col md:text-xs lg:text-sm xl:text-base">
              <p className="text-yellow_stg">Email</p>
              <p>sitonggie@yahoo.Com</p>
            </div>
          </div>
          <div className="flex flex-row h-full justify-center items-center">
            <img
              src={Address}
              className="md:object-fill lg:object-none md:h-[40px] lg:h-[50px] md:w-[20px] lg:w-[30px]"
            />
            <div className="flex flex-col md:text-xs lg:text-sm xl:text-base">
              <p className="text-yellow_stg">Address</p>
              <p>Jl.Ruko Dukuh Zamrud Blok GD52</p>
            </div>
          </div>
        </div>
        <div className="hidden  flex-row md:flex bg-white md:me-[60px] lg:me-[80px] xl:me-[109px] md:ms-[60px] lg:ms-[80px] xl:ms-[109px] rounded-lg text-black justify-between md:pb-1 md:pt-1 xl:pb-2 xl:pt-2 md:ps-[31px] lg:ps-[51px] md:pe-[31px] lg:pe-[51px] xl:ps-[71px] xl:pe-[71px] border-2 border-yellow_stg">
          <div className="flex flex-row items-center md:gap-4 lg:gap-7 xl:gap-12 md:text-sm lg:text-base lg:font-semibold xl:font-bold ">
            <a href="#" className="text-yellow_stg">
              Beranda
            </a>
            <a href="#produk">Produk</a>
            <a href="#proyek">Proyek</a>
            <a href="#testimoni">Testimoni</a>
            <a href="#kontakKami">Kontak Kami</a>
          </div>
          <button className="bg-yellow_stg md:pe-6 lg:pe-8 xl:pe-10 md:ps-6 lg:ps-8 xl:ps-10 md:pt-1 lg:pt-2 xl:pt-4 md:pb-1 lg:pb-2 xl:pb-4 rounded-lg text-white">
            Kontak Kami
          </button>
        </div>
        <div className="sm:mt-10 md:mt-0 text-center sm:pt-2 md:pt-16 lg:pt-20 xl:pt-24 sm:ps-8 md:ps-20 lg:ps-24 xl:ps-28 sm:pe-8 md:pe-20 lg:pe-24 xl:pe-28 sm:ms-2 md:ms-16 lg:ms-20 xl:ms-24 sm:me-2 md:me-16 lg:me-20 xl:me-24 flex flex-col sm:gap-10 lg:gap-12 xl:gap-16">
          <p className="text-white sm:text-3xl md:text-4xl lg:text-4xl xl:text-7xl sm:font-bold md:font-bold">
            <a className="text-yellow_stg">Pilihan Tepat</a> untuk <br />{" "}
            Membangun Infrastruktur Anda.
          </p>
          <p className="text-white sm:text-base md:text-base lg:text-lg xl:text-xl font-semibold sm:me-4 md:me-16 lg:me-20 xl:me-36 sm:ms-4 md:ms-16 lg:ms-20 xl:ms-36">
            Sitonggi menjadi mitra terpercaya dalam menyediakan semua kebutuhan
            listrik untuk berbagai jenis infrastruktur, dari rumah tangga hingga
            proyek industri besar.
          </p>
          <div>
            <button className="sm:text-lg md:text-lg lg:text-xl xl:text-2xl bg-yellow_stg sm:pb-1 md:pb-2 lg:pb-4 xl:pb-6 sm:pt-1 md:pt-2 lg:pt-4 xl:pt-6 sm:ps-8 md:ps-10  lg:ps-14 xl:ps-20 sm:pe-8 md:pe-10 lg:pe-14 xl:pe-20 rounded-lg font-bold">
              Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
