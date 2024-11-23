import Image from "next/image";
import Link from 'next/link';
import gsap from 'gsap';
import Typed from 'typed.js';
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    gsap.to('.loading-text', { opacity: 1, duration: 1, delay: 0.5 });

    gsap.to(".preloader", {
      opacity: 0,
      duration: 1.5,
      delay: 3,
      onComplete: () => {
        document.querySelector(".preloader").style.display = "none";
        document.body.classList.remove("preloader-active");
      },
    });
    var welcomeTyped = new Typed("#contact", {
      strings: ['Contact.'],
      typeSpeed: 150,
      backSpeed: 150,
      showCursor: false,
      loop: false,
    });

    new Typed('#nama-saya', {
      strings: ['Shaka Pratama.'],
      typeSpeed: 100,
      startDelay: 2575,
      showCursor: false,
      loop: false,
    });
    const WA = document.getElementById('whatsapp-link');
        const encodedWA = 'aHR0cHM6Ly93YS5tZS82NDg1MTc1NDMxNzUz'; // Base64 dari https://wa.me/087846234246

        WA.addEventListener('click', (e) => {
            e.preventDefault();
            const decodedWA = atob(encodedWA);
            window.open(decodedWA, '_blank');
        })
    const IG = document.getElementById('instagram-link');
    const encodedIG = 'aHR0cHM6Ly9pbnN0YWdyYW0uY29tL2lnZWRlc2hha2FwcmF0YW1hXw==';
    IG.addEventListener('click', (e) => {
      e.preventDefault();
      const decodedIG = atob(encodedIG);
      window.open(decodedIG, '_blank');
    })
    const FB = document.getElementById('facebook-link');
    const encodedFB = 'aHR0cHM6Ly9kaXNjb3JkYXBwLmNvbS91c2Vycy84NzcyMDIxMjMzNDYwMzg3ODU=';
    FB.addEventListener('click', (e) => {
      e.preventDefault();
      const decodedFB = atob(encodedFB);
      window.open(decodedFB, '_blank');
    })
    const YT = document.getElementById('youtube-link');
    const encodedYT = 'aHR0cHM6Ly93d3cueW91dHViZS5jb20vQEV2ZXJlenNreQ==';
    YT.addEventListener('click', (e) => {
      e.preventDefault();
      const decodedYT = atob(encodedYT);
      window.open(decodedYT, '_blank');
    })
    const Github = document.getElementById('github-link');
    const encodedGithub = 'aHR0cHM6Ly9naXRodWIuY29tL0p1a3V0UHJlbWl1bQ==';
    Github.addEventListener('click', (e) => {
      e.preventDefault();
      const decodedGithub = atob(encodedGithub);
      window.open(decodedGithub, '_blank');
    })
    const DC = document.getElementById('discord-link');
    const encodedDC = 'aHR0cHM6Ly9kaXNjb3JkYXBwLmNvbS91c2Vycy84NzcyMDIxMjMzNDYwMzg3ODU=';
    DC.addEventListener('click', (e) => {
      e.preventDefault();
      const decodedDC = atob(encodedDC);
      window.open(decodedDC, '_blank');
    })
    const SP = document.getElementById('spotify-link');
    const encodedSP = 'aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3VzZXIvMzF0aDJrcjdub3B2NmVyczZpM2E1NTY2cDY2YT9zaT01ZDI2NTI0OWRkZDE0YjM5';
    SP.addEventListener('click', (e) => {
      e.preventDefault();
      const decodedSP = atob(encodedSP);
      window.open(decodedSP, '_blank');
    })
  });
  

  return (
    <>
      <div className="preloader">
        <div className="logo-container">
          <div className="loading-text text-center font-bold uppercase" id="contact" style={{ userSelect: "none" }}></div>
        </div>
      </div>

      <Link href=".." className="bg-[#010203] flex justify-center items-center h-14 w-14 rounded-full fixed z-[9999] left-4 top-4 p-4 hover:animate-pulse hover:scale-[1.1] ease-in-out duration-300">
        <span className="ml-1 block w-5 h-5 border-white border-b-2 border-l-2 rotate-45"></span>
      </Link>

      <div className="flex flex-wrap md:flex-nowrap items-center h-screen w-screen" id="hero">
        <div className="bg-white w-full md:w-1/2 h-full flex items-center py- md:py-0 justify-center">
          <div className="mx-8 md:mx-16 text-center mt-16 mb-8">
            <Image
              src="/photomobile.png"
              className="md:hidden h-32 w-32 rounded-full mx-auto"
              alt="Profile Image"
              width={128}
              height={128}
            />

            <h1 className="text-4xl md:text-6xl font-bold mt-8 md:mt-16" id="nama-saya" style={{ userSelect: "none" }}>
            </h1>

            {/* Description */}
            <div className="description w-full mt-8 md:mt-16 text-gray-500 md:text-xl text-xl" style={{ userSelect: "none" }}>
              Here&apos;s My Social Media.
              <div className="flex flex-wrap justify-center mt-4">
              <Link className="mb-6" href="comingsoon.html" target="_blank" id="whatsapp-link">
                <span className="border border-black text-black px-5 py-3 rounded-full mx-1 my-4 hover:bg-black hover:text-white hover:scale-[1.1] ease-in-out duration-300 text-xs" style={{ userSelect: "none" }}>
                  Whatsapp
                </span>
              </Link>



              <Link className="mb-6" href="comingsoon.html" target="_blank" id="instagram-link">
                <span className="border border-black text-black px-5 py-3 rounded-full mx-1 my-4 hover:bg-black hover:text-white hover:scale-[1.1] ease-in-out duration-300 text-xs" style={{ userSelect: "none" }}>
                  Instagram
                </span>
              </Link>

              <Link className="mb-6" href="comingsoon.html" target="_blank" id="facebook-link">
                <span className="border border-black text-black px-5 py-3 rounded-full mx-1 my-4 hover:bg-black hover:text-white hover:scale-[1.1] ease-in-out duration-300 text-xs" style={{ userSelect: "none" }}>
                  Facebook
                </span>
              </Link>
              
              <Link className="mb-6" href="comingsoon.html" target="_blank" id="youtube-link">
                <span className="border border-black text-black px-5 py-3 rounded-full mx-1 my-4 hover:bg-black hover:text-white hover:scale-[1.1] ease-in-out duration-300 text-xs" style={{ userSelect: "none" }}>
                  Youtube
                </span>
              </Link>
              <Link className="mb-6" href="comingsoon.html" target="_blank" id="github-link">
                <span className="border border-black text-black px-5 py-3 rounded-full mx-1 my-4 hover:bg-black hover:text-white hover:scale-[1.1] ease-in-out duration-300 text-xs" style={{ userSelect: "none" }}>
                  Github
                </span>
              </Link>
              <Link className="mb-6" href="comingsoon.html" target="_blank" id="discord-link">
                <span className="border border-black text-black px-5 py-3 rounded-full mx-1 my-4 hover:bg-black hover:text-white hover:scale-[1.1] ease-in-out duration-300 text-xs" style={{ userSelect: "none" }}>
                  Discord
                </span>
              </Link>
              <Link className="mb-6" href="comingsoon.html" target="_blank" id="spotify-link">
                <span className="border border-black text-black px-5 py-3 rounded-full mx-1 my-4 hover:bg-black hover:text-white hover:scale-[1.1] ease-in-out duration-300 text-xs" style={{ userSelect: "none" }}>
                  Spotify
                </span>
              </Link>
              </div>
            </div>

            <br />

            <Link href="https://github.com/JukutPremium" className="nav-link uppercase mt-5 text-sm font-semibold" style={{ userSelect: "none" }}>

              See My Project

            </Link>
          </div>
        </div>

        {/* Image (hidden on mobile) */}
        <div className="hidden md:block w-full md:w-1/2 h-full">
          <Image
            src="/photohero.png"
            className="h-full w-full object-cover"
            alt="Hero Image"
            width={800}
            height={600}
          />
        </div>
      </div>
    </>
  );
}
