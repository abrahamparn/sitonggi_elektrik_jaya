import CheckmarkIcon from "../../assets/Image/CheckmarkIcon.png";
import Gallery1 from "../../assets/Image/Gallery1.png";
import Gallery2 from "../../assets/Image/Gallery2.png";
import TimeFrameIcon from "../../assets/Image/TimeFrameIcon.png";
import UserFrameIcon from "../../assets/Image/UserFrameIcon.png";
import styles from "./Overview.module.css";

const Overview = () => {
  return (
    <div className="container mx-auto p-5 my-20">
      {/* Overview Description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-10">
        <div className="lg:m-5">
          <h2 className="text-4xl md:text-4xl font-bold mb-3">
            Kami Menyediakan Berbagai Kabel <br />
            <span className="text-orange-400">Berkualitas Tinggi</span>
          </h2>
          <p className="font-semibold ">
            Kami menyediakan kabel-kabel dengan teknologi inovatif untuk
            memastikan kualitas dan performa terbaik dalam penggunaan listrik
            sehari-hari.
            <br></br>
            <br></br>
            Dengan dukungan teknis yang handal, Sitonggi tidak hanya menyediakan
            produk berkualitas tinggi, tetapi juga panduan dan layanan purna
            jual yang membantu penggunaan yang tepat dan aman dari kabel-kabel
            mereka.
          </p>
          <div className="overview-list my-10">
            <ul>
              <li>
                <div className="flex">
                  <img src={CheckmarkIcon}></img>
                  <p className="my-auto mx-2 font-semibold">
                    100 % Jaminan Garansi
                  </p>
                </div>
              </li>
              <li>
                <div className="flex">
                  <img src={CheckmarkIcon}></img>
                  <p className="my-auto mx-2 font-semibold">
                    Pemilihan Bahan Berkualitas Tinggi
                  </p>
                </div>
              </li>
              <li>
                <div className="flex">
                  <img src={CheckmarkIcon}></img>
                  <p className="my-auto mx-2 font-semibold">
                    Beragam Jenis Kabel
                  </p>
                </div>
              </li>
              <li>
                <div className="flex">
                  <img src={CheckmarkIcon}></img>
                  <p className="my-auto mx-2 font-semibold">Dukungan Teknis</p>
                </div>
              </li>
            </ul>
          </div>
          <a
            href="#"
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Lihat Produk
          </a>
        </div>
        {/* Overview Gallery */}
        <div className="grid gap-3 md:gap-5 grid-cols-2 content-center  mt-10 lg:mt-0 my-auto mx-auto lg:m-5">
          <div className="gallery-1 mx-0 ">
            <img className="rounded-md" src={Gallery1} />
            <div className={styles.overlayImage1 + " py-2 mt-3"}>
              <div className="wrapper flex justify-center">
                <div className="image-overview">
                  <img src={TimeFrameIcon} />
                </div>
                <div className="text-content ms-2">
                  <p className="text-orange-400 font-bold">+50 klien</p>
                  <p className="text-white font-medium">Sangat Puas</p>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-2 mx-0  my-2 md:my-0">
            <div className={styles.overlayImage2 + " py-2 mb-3"}>
              <div className="wrapper flex justify-center">
                <div className="image-overview">
                  <img src={UserFrameIcon} />
                </div>
                <div className="text-content ms-2">
                  <p className="text-orange-400 font-bold">20+ Tahun</p>
                  <p className="text-white font-medium">Pengalaman</p>
                </div>
              </div>
            </div>
            <img className="rounded-md" src={Gallery2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
