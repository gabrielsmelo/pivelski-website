import Image from "next/image";
import deezer from "./assets/logos/deezer.png";
import shein from "./assets/logos/shein.png";
import globoplay from "./assets/logos/globoplay.png";
import bubbaloo from "./assets/logos/bubbaloo.png";
import fashionNova from "./assets/logos/fashionNova.png";
import mcd from "./assets/logos/mcd.png";
import lost from "./assets/logos/lost.png";
import mercadolivre from "./assets/logos/mercadolivre.png";
import instagram from "./assets/logos/instagram.svg";
import youtube from "./assets/logos/youtube.svg";

// Import videos
const widescreen1 = "/assets/videos/luis-e-morena.mp4";
const widescreen2 = "/assets/videos/brands-arthur.mp4";
const widescreen3 = "/assets/videos/alee.mp4";
const paris = "/assets/videos/paris.mp4";
const r8 = "/assets/videos/tiago-gomez.mp4";

const work = [
  { src: shein, alt: "Shein" },
  { src: mercadolivre, alt: "FL Studio", width: "200" },
  { src: globoplay, alt: "Globoplay", width: "180" },
  { src: deezer, alt: "Deezer", width: "160" },
  { src: bubbaloo, alt: "Bubbaloo", width: "220" },
  { src: fashionNova, alt: "FashionNova", width: "200" },
  { src: mcd, alt: "More Core Division", width: "240" },
  { src: lost, alt: "Lost Brasil", width: "210" },
];

const videos = {
  widescreen: [
    { src: widescreen1, alt: "Caos" },
    { src: widescreen2, alt: "Brands & Arthur" },
    { src: widescreen3, alt: "ALEE" },
  ],
  square: [
    { src: r8, alt: "Tiago Gomez - Audi R8" },
    { src: paris, alt: "Paris" },
  ],
};

export default function Home() {
  return (
    <div
      id="main"
      className="grid items-center justify-items-center min-h-screen p-10 pb-20 pt-20"
    >
      <nav className="mainNav">
        <a href="#main">HOME</a>
      </nav>
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="mainBlock">
          <video
            className="mainVideo rounded-3xl"
            playsInline
            controls={false}
            autoPlay
            muted
            loop
            preload="true"
          >
            <source
              src={videos.widescreen[0].src}
              alt={videos.widescreen[0].alt}
              type="video/mp4"
            />
            {"Your browser doesn't support this website."}
          </video>
          <div className="mainTitle">
            <div className="textMask">
              <h2 className="titleOne">PIVELSKI</h2>
            </div>
            <div className="textMask">
              <h2 className="titleTwo">DIRECTOR & EDITOR</h2>
            </div>
          </div>
          <div className="spacerWrap">
            <div className="spacerIcon"></div>
            <div className="spacerLine"></div>
            <div className="spacerIcon rec"></div>
            <div className="spacerLine"></div>
            <div className="spacerIcon"></div>
          </div>
        </div>

        <div className="pt-36 pb-36 bio text-center sm:text-left">
          <h2>
            Handerson Santana, também conhecido como @Pivelski, é um artista e
            cineasta que combina seu interesse por cinema, cultura e lugares por
            meio de peças narrativas curtas e longas.
          </h2>
        </div>

        <div className="section flex items-center justify-center self-center squareSection">
          <video
            className="container rounded-3xl"
            playsInline
            controls={false}
            autoPlay
            muted
            loop
            preload="true"
          >
            <source
              src={videos.square[0].src}
              alt={videos.square[0].alt}
              type="video/mp4"
            ></source>
          </video>
          <div className="container flex flex-col justify-center rounded-3xl p-5 mr-5 ml-5 border-solid border border-gray-900">
            <h3 className="font-bold uppercase text-4xl text-center self-center">
              Narrativas visuais <br /> contadas <br /> como filmes
            </h3>
            <p className="text-center self-center mt-5 font-bold uppercase text-neutral-500 text-xs">
              Pivelski films production
            </p>
          </div>
          <video
            className="container rounded-3xl"
            playsInline
            controls={false}
            autoPlay
            muted
            loop
            preload="true"
          >
            <source
              src={videos.square[1].src}
              alt={videos.square[1].alt}
              type="video/mp4"
            ></source>
          </video>
        </div>

        <div className="section text-nowrap self-center rounded-3xl mt-6 mb-6 p-9 border-solid border border-gray-900 uppercase font-bold text-3xl overflow-hidden min-w-full max-w-full">
          <div className="slider flex items-center">
            <div className="trackIcon" />
            <h4>Director</h4>
            <div className="trackIcon" />
            <h4>Short form</h4>
            <div className="trackIcon" />
            <h4>Narrative</h4>
            <div className="trackIcon" />
            <h4>Color grading</h4>
            <div className="trackIcon" />
            <h4>Editor</h4>
            <div className="trackIcon" />
            <h4>Director</h4>
            <div className="trackIcon" />
            <h4>Short form</h4>
            <div className="trackIcon" />
            <h4>Narrative</h4>
            <div className="trackIcon" />
            <h4>Color grading</h4>
            <div className="trackIcon" />
            <h4>Editor</h4>
            <div className="trackIcon" />
            <h4>Director</h4>
            <div className="trackIcon" />
            <h4>Short form</h4>
            <div className="trackIcon" />
            <h4>Narrative</h4>
            <div className="trackIcon" />
            <h4>Color grading</h4>
            <div className="trackIcon" />
            <h4>Editor</h4>
          </div>
        </div>

        <div className="section p-36 min-w-full max-w-full">
          <h2 className="uppercase font-bold originTitle">
            DIRETOR CRIATIVO NASCIDO NA BAHIA
          </h2>
          <video
            className="rounded-3xl min-w-full mt-20 originVideo"
            playsInline
            controls={false}
            autoPlay
            muted
            loop
            preload="true"
          >
            <source
              src={videos.widescreen[1].src}
              alt={videos.widescreen[1].alt}
              type="video/mp4"
            ></source>
          </video>
        </div>

        <div className="section flex items-center self-center flex-col min-w-full max-w-full justify-center">
          <h3 className="font-bold text-5xl workTitle">WORK</h3>
          <div className="companyGrid grid grid-rows-2 grid-cols-4 mt-6 rounded-3xl border-solid border border-gray-900 min-w-full">
            {work.map((company) => (
              <div key={company.alt} className="company flex justify-center">
                <Image
                  className="self-center m-10"
                  key={company.alt}
                  src={company.src}
                  width={company.width || "136"}
                  alt={company.alt}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <video
            className="lastVideo mt-36 rounded-3xl"
            playsInline
            controls={false}
            autoPlay
            muted
            loop
            preload="true"
          >
            <source
              src={videos.widescreen[2].src}
              alt={videos.widescreen[2].alt}
              type="video/mp4"
            />
            {"Your browser doesn't support this website."}
          </video>
          <div className="absolute flex flex-col justify-center items-center inset-x-0 inset-y-0 mt-36">
            <p className="uppercase tracking-widest text-s font-bold mb-10">
              pivelski@gmail.com
            </p>
            <h2 className="getInTouch font-bold uppercase text-9xl">Contato</h2>
            <div className="flex items-center mt-10">
              <a
                className="contactButton"
                href="https://instagram.com/pivelski"
                target="_blank"
              >
                <Image src={instagram} className="invert" alt="Instagram" />
              </a>
              {/* <a
                className="contactButton"
                href="https://youtube.com"
                target="_blank"
              >
                <Image src={youtube} className="invert" alt="Youtube" />
              </a> */}
            </div>
          </div>
        </div>
      </main>
      <footer className="rounded-3xl border border-solid border-gray-900 min-w-full row-start-3 flex gap-6 flex-wrap items-center justify-center min-h-24 mt-24"></footer>
    </div>
  );
}
