import React from "react";
import testimoni_banner from "../../assets/Image/testimoni/testimoni_banner.png";
import testimoni_user from "../../assets/Image/testimoni/testimoni_user1.png";
import testimoni_background from "../../assets/Image/testimoni/testimoni_background.png";
import testimoni_left from "../../assets/Image/testimoni/testimoni_left.png";
import testimoni_right from "../../assets/Image/testimoni/testimoni_right.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 20000, easing: (t) => t };

export default function Testimoni() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 1, // Default to 1 slide per view for mobile and smaller screens
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 768px)": {
        // md breakpoint for Tailwind CSS
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        // lg breakpoint for Tailwind CSS
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
      "(min-width: 1280px)": {
        // xl breakpoint for Tailwind CSS
        slides: {
          perView: 4,
          spacing: 20,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  const [sliderRef2] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 1, // Default to 1 slide per view for mobile and smaller screens
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 768px)": {
        // md breakpoint for Tailwind CSS
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        // lg breakpoint for Tailwind CSS
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
      "(min-width: 1280px)": {
        // xl breakpoint for Tailwind CSS
        slides: {
          perView: 4,
          spacing: 20,
        },
      },
    },
    created(s) {
      s.moveToIdx(-5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs - 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs - 5, true, animation);
    },
  });
  return (
    <div className="bg-skin_stg pb-20">
      <div className="relative ">
        <img src={testimoni_banner} className="object-cover h-[320px] w-full" />
        <div className="absolute top-0 left-0 bg-black w-full h-full flex items-center justify-center bg-opacity-20"></div>
        <div className="absolute top-0 left-0 flex w-full h-full  items-center justify-center">
          <h2 className="text-white text-1xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            Pendapat Tentang Kepuasan Customer Kami
          </h2>
        </div>
      </div>

      <div ref={sliderRef} className="keen-slider mt-[-70px] ">
        <div className="keen-slider__slide number-slide1">
          <div className="flex flex-col items-center gap-4 p-6  rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
              src={testimoni_user}
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-sm"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Antonio Carlos
            </h3>
            <p className="text-sm font-medium text-gray-500">
              Manager PT. Listrikindo
            </p>
            <p className="text-sm text-gray-600 text-center">
              "Saya sudah menggunakan produk kabel listrik dari Sitonggi untuk
              proyek-proyek industri kami selama beberapa tahun, dan saya sangat
              terkesan dengan kualitasnya. Kabel-kabel mereka tidak hanya kuat
              namun juga konsisten dalam kinerjanya. Keandalan kabel Sitonggi
              telah memberikan kami keyakinan bahwa infrastruktur listrik kami
              beroperasi dengan aman dan efisien.”
            </p>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2">
          <div className="flex flex-col items-center gap-4 p-6  rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
              src={testimoni_user}
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-sm"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Antonio Carlos
            </h3>
            <p className="text-sm font-medium text-gray-500">
              Manager PT. Listrikindo
            </p>
            <p className="text-sm text-gray-600 text-center">
              "Saya sudah menggunakan produk kabel listrik dari Sitonggi untuk
              proyek-proyek industri kami selama beberapa tahun, dan saya sangat
              terkesan dengan kualitasnya. Kabel-kabel mereka tidak hanya kuat
              namun juga konsisten dalam kinerjanya. Keandalan kabel Sitonggi
              telah memberikan kami keyakinan bahwa infrastruktur listrik kami
              beroperasi dengan aman dan efisien.”
            </p>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3">
          {" "}
          <div className="flex flex-col items-center gap-4 p-6  rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
              src={testimoni_user}
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-sm"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Antonio Carlos
            </h3>
            <p className="text-sm font-medium text-gray-500">
              Manager PT. Listrikindo
            </p>
            <p className="text-sm text-gray-600 text-center">
              "Saya sudah menggunakan produk kabel listrik dari Sitonggi untuk
              proyek-proyek industri kami selama beberapa tahun, dan saya sangat
              terkesan dengan kualitasnya. Kabel-kabel mereka tidak hanya kuat
              namun juga konsisten dalam kinerjanya. Keandalan kabel Sitonggi
              telah memberikan kami keyakinan bahwa infrastruktur listrik kami
              beroperasi dengan aman dan efisien.”
            </p>
          </div>
        </div>
        <div className="keen-slider__slide number-slide4">
          {" "}
          <div className="flex flex-col items-center gap-4 p-6  rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
              src={testimoni_user}
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-sm"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Antonio Carlos
            </h3>
            <p className="text-sm font-medium text-gray-500">
              Manager PT. Listrikindo
            </p>
            <p className="text-sm text-gray-600 text-center">
              "Saya sudah menggunakan produk kabel listrik dari Sitonggi untuk
              proyek-proyek industri kami selama beberapa tahun, dan saya sangat
              terkesan dengan kualitasnya. Kabel-kabel mereka tidak hanya kuat
              namun juga konsisten dalam kinerjanya. Keandalan kabel Sitonggi
              telah memberikan kami keyakinan bahwa infrastruktur listrik kami
              beroperasi dengan aman dan efisien.”
            </p>
          </div>
        </div>
        <div className="keen-slider__slide number-slide5">
          {" "}
          <div className="flex flex-col items-center gap-4 p-6  rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
              src={testimoni_user}
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-sm"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Antonio Carlos
            </h3>
            <p className="text-sm font-medium text-gray-500">
              Manager PT. Listrikindo
            </p>
            <p className="text-sm text-gray-600 text-center">
              "Saya sudah menggunakan produk kabel listrik dari Sitonggi untuk
              proyek-proyek industri kami selama beberapa tahun, dan saya sangat
              terkesan dengan kualitasnya. Kabel-kabel mereka tidak hanya kuat
              namun juga konsisten dalam kinerjanya. Keandalan kabel Sitonggi
              telah memberikan kami keyakinan bahwa infrastruktur listrik kami
              beroperasi dengan aman dan efisien.”
            </p>
          </div>
        </div>
        <div className="keen-slider__slide number-slide6">
          {" "}
          <div className="flex flex-col items-center gap-4 p-6  rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
              src={testimoni_user}
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-sm"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Antonio Carlos
            </h3>
            <p className="text-sm font-medium text-gray-500">
              Manager PT. Listrikindo
            </p>
            <p className="text-sm text-gray-600 text-center">
              "Saya sudah menggunakan produk kabel listrik dari Sitonggi untuk
              proyek-proyek industri kami selama beberapa tahun, dan saya sangat
              terkesan dengan kualitasnya. Kabel-kabel mereka tidak hanya kuat
              namun juga konsisten dalam kinerjanya. Keandalan kabel Sitonggi
              telah memberikan kami keyakinan bahwa infrastruktur listrik kami
              beroperasi dengan aman dan efisien.”
            </p>
          </div>
        </div>
      </div>

      <div ref={sliderRef2} className="keen-slider mt-10">
        <div className="keen-slider__slide number-slide1">
          <div className="flex flex-col items-center gap-4 p-6  rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
              src={testimoni_user}
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-sm"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Antonio Carlos
            </h3>
            <p className="text-sm font-medium text-gray-500">
              Manager PT. Listrikindo
            </p>
            <p className="text-sm text-gray-600 text-center">
              "Saya sudah menggunakan produk kabel listrik dari Sitonggi untuk
              proyek-proyek industri kami selama beberapa tahun, dan saya sangat
              terkesan dengan kualitasnya. Kabel-kabel mereka tidak hanya kuat
              namun juga konsisten dalam kinerjanya. Keandalan kabel Sitonggi
              telah memberikan kami keyakinan bahwa infrastruktur listrik kami
              beroperasi dengan aman dan efisien.”
            </p>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2">
          <div className="flex flex-col items-center gap-4 p-6  rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
              src={testimoni_user}
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-sm"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Antonio Carlos
            </h3>
            <p className="text-sm font-medium text-gray-500">
              Manager PT. Listrikindo
            </p>
            <p className="text-sm text-gray-600 text-center">
              "Saya sudah menggunakan produk kabel listrik dari Sitonggi untuk
              proyek-proyek industri kami selama beberapa tahun, dan saya sangat
              terkesan dengan kualitasnya. Kabel-kabel mereka tidak hanya kuat
              namun juga konsisten dalam kinerjanya. Keandalan kabel Sitonggi
              telah memberikan kami keyakinan bahwa infrastruktur listrik kami
              beroperasi dengan aman dan efisien.”
            </p>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3">
          {" "}
          <div className="flex flex-col items-center gap-4 p-6  rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
              src={testimoni_user}
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-sm"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Antonio Carlos
            </h3>
            <p className="text-sm font-medium text-gray-500">
              Manager PT. Listrikindo
            </p>
            <p className="text-sm text-gray-600 text-center">
              "Saya sudah menggunakan produk kabel listrik dari Sitonggi untuk
              proyek-proyek industri kami selama beberapa tahun, dan saya sangat
              terkesan dengan kualitasnya. Kabel-kabel mereka tidak hanya kuat
              namun juga konsisten dalam kinerjanya. Keandalan kabel Sitonggi
              telah memberikan kami keyakinan bahwa infrastruktur listrik kami
              beroperasi dengan aman dan efisien.”
            </p>
          </div>
        </div>
        <div className="keen-slider__slide number-slide4">
          {" "}
          <div className="flex flex-col items-center gap-4 p-6  rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
              src={testimoni_user}
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-sm"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Antonio Carlos
            </h3>
            <p className="text-sm font-medium text-gray-500">
              Manager PT. Listrikindo
            </p>
            <p className="text-sm text-gray-600 text-center">
              "Saya sudah menggunakan produk kabel listrik dari Sitonggi untuk
              proyek-proyek industri kami selama beberapa tahun, dan saya sangat
              terkesan dengan kualitasnya. Kabel-kabel mereka tidak hanya kuat
              namun juga konsisten dalam kinerjanya. Keandalan kabel Sitonggi
              telah memberikan kami keyakinan bahwa infrastruktur listrik kami
              beroperasi dengan aman dan efisien.”
            </p>
          </div>
        </div>
        <div className="keen-slider__slide number-slide5">
          {" "}
          <div className="flex flex-col items-center gap-4 p-6  rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
              src={testimoni_user}
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-sm"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Antonio Carlos
            </h3>
            <p className="text-sm font-medium text-gray-500">
              Manager PT. Listrikindo
            </p>
            <p className="text-sm text-gray-600 text-center">
              "Saya sudah menggunakan produk kabel listrik dari Sitonggi untuk
              proyek-proyek industri kami selama beberapa tahun, dan saya sangat
              terkesan dengan kualitasnya. Kabel-kabel mereka tidak hanya kuat
              namun juga konsisten dalam kinerjanya. Keandalan kabel Sitonggi
              telah memberikan kami keyakinan bahwa infrastruktur listrik kami
              beroperasi dengan aman dan efisien.”
            </p>
          </div>
        </div>
        <div className="keen-slider__slide number-slide6">
          {" "}
          <div className="flex flex-col items-center gap-4 p-6  rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <img
              src={testimoni_user}
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-sm"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Antonio Carlos
            </h3>
            <p className="text-sm font-medium text-gray-500">
              Manager PT. Listrikindo
            </p>
            <p className="text-sm text-gray-600 text-center">
              "Saya sudah menggunakan produk kabel listrik dari Sitonggi untuk
              proyek-proyek industri kami selama beberapa tahun, dan saya sangat
              terkesan dengan kualitasnya. Kabel-kabel mereka tidak hanya kuat
              namun juga konsisten dalam kinerjanya. Keandalan kabel Sitonggi
              telah memberikan kami keyakinan bahwa infrastruktur listrik kami
              beroperasi dengan aman dan efisien.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
