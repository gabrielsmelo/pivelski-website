import Image from "next/image";
import chivas from './assets/chivas.png';
import shein from './assets/shein.png';
import growth from './assets/growth.png';
import bubbaloo from './assets/bubbaloo.png';
import fashionNova from './assets/fashionNova.png';
import mcd from './assets/mcd.png';
import lost from './assets/lost.png';
import mercadolivre from './assets/mercadolivre.png';

const work = [
  { src: shein, alt: 'Shein' },
  { src: mercadolivre, alt: 'FL Studio', width: '200' },
  { src: growth, alt: 'Growth Suplementos', width: '180' },
  { src: chivas, alt: 'Chivas', width: '200' },
  { src: bubbaloo, alt: 'Bubbaloo', width: '220' },
  { src: fashionNova, alt: 'FashionNova', width: '200' },
  { src: mcd, alt: 'More Core Division', width: '240'},
  { src: lost, alt: 'Lost Brasil', width: '210'},
];

export default function Home() {
  const pageUrl = typeof window !== 'undefined' ? window.location.href : 'http://localhost:3001';
  return (
    <div id="main" className="grid items-center justify-items-center min-h-screen p-10 pb-20 pt-20">
      <nav className="mainNav"><a href="#main">HOME</a></nav>
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div>
          <video className="mainVideo rounded-3xl" autoPlay muted loop preload="true">
            <source src="/videos/brands-arthur.mp4" type="video/mp4" />
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
          <div className="spacerWrap"><div className="spacerIcon"></div><div className="spacerLine"></div><div className="spacerIcon rec"></div><div className="spacerLine"></div><div className="spacerIcon"></div></div>
        </div>

        <div className="pt-36 pb-36 companyTitle text-center sm:text-left">
          <h2>Handerson Santana, também conhecido como @Pivelski, é um artista e cineasta que combina seu interesse por cinema, cultura e lugares por meio de peças narrativas curtas e longas.</h2>
        </div>

        <div className="section flex items-center justify-center self-center">
          <video className="container rounded-3xl" autoPlay muted loop preload="true">
            <source src="/videos/square-1.mp4" type="video/mp4"></source>
          </video>
          <div className="container flex flex-col justify-center rounded-3xl mr-5 ml-5 border-solid border border-gray-900">
            <h3 className="font-bold uppercase text-6xl text-center self-center">The story <br /> always <br /> comes first</h3>
            <p className="text-center self-center mt-5 font-bold uppercase text-neutral-500 text-xs">Pivelski films production</p>
          </div>
          <video className="container rounded-3xl" autoPlay muted loop preload="true">
            <source src="https://videos.pexels.com/video-files/8027440/8027440-uhd_2732_1440_25fps.mp4" type="video/mp4"></source>
          </video>
        </div>

        <div className="section text-nowrap self-center rounded-3xl mt-6 mb-6 p-9 border-solid border border-gray-900 uppercase font-bold text-3xl overflow-hidden min-w-full max-w-full">
          <div className="slider flex items-center">
            <div className="trackIcon" />
            <h4>Director of Photography</h4>
            <div className="trackIcon" />
            <h4>Short form</h4>
            <div className="trackIcon" />
            <h4>Narrative</h4>
            <div className="trackIcon" />
            <h4>Color grading</h4>
            <div className="trackIcon" />
            <h4>Photo</h4>
            <div className="trackIcon" />
            <h4>Director of Photography</h4>
            <div className="trackIcon" />
            <h4>Short form</h4>
            <div className="trackIcon" />
            <h4>Narrative</h4>
            <div className="trackIcon" />
            <h4>Color grading</h4>
            <div className="trackIcon" />
            <h4>Photo</h4>
            <div className="trackIcon" />
            <h4>Director of Photography</h4>
            <div className="trackIcon" />
            <h4>Short form</h4>
            <div className="trackIcon" />
            <h4>Narrative</h4>
            <div className="trackIcon" />
            <h4>Color grading</h4>
            <div className="trackIcon" />
            <h4>Photo</h4>
          </div>
        </div>

        <div className="section p-36 min-w-full max-w-full">
          <h2 className="uppercase font-bold originTitle">DIRETOR CRIATIVO NASCIDO NA BAHIA</h2>
          <video className="rounded-3xl min-w-full mt-20 originVideo" autoPlay muted loop preload="true">
            <source src="/videos/brands-arthur.mp4" type="video/mp4"></source>
          </video>
        </div>

        <div className="section flex items-center self-center flex-col min-w-full max-w-full justify-center">
          <h3 className="font-bold text-5xl">WORK</h3>
          <div className="grid grid-rows-2 grid-cols-4 mt-6 rounded-3xl border-solid border border-gray-900 min-w-full">
            {work.map(company => <div key={company.alt} className="company flex justify-center"><Image className="self-center m-10" key={company.alt} src={company.src} width={company.width || '136'} alt={company.alt} /></div> )}
          </div>
        </div>

        <div className="relative">
          <video className="lastVideo mt-36 rounded-3xl" autoPlay muted loop preload="true">
            <source src="/videos/praiano-beach.mp4" type="video/mp4" />
            {"Your browser doesn't support this website."}
          </video>
          <div className="absolute flex flex-col justify-center items-center inset-x-0 inset-y-0 mt-36">
            <p className="uppercase tracking-widest text-s font-bold mb-10">pivelski@gmail.com</p>
            <h2 className="font-bold uppercase text-9xl">Get in touch</h2>
            <div className="flex items-center mt-10">
              <a className="contactButton" href="https://instagram.com/pivelski">IN</a>
              <a className="contactButton" href="https://youtube.com">YT</a>
            </div>
          </div>
        </div>
      </main>
      <footer className="rounded-3xl border border-solid border-gray-900 min-w-full row-start-3 flex gap-6 flex-wrap items-center justify-center min-h-24 mt-24">
      </footer>
    </div>
  );
}
