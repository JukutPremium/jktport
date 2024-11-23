import Image from "next/image";
import Link from 'next/link';
import gsap from 'gsap';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
    
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
    var welcomeTyped = new Typed("#welcome", {
      strings: ['Welcome.'],
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

    new Typed('#nama-eug', {
      strings: ['Shaka Pratama.'],
      typeSpeed: 100,
      startDelay: 2575,
      showCursor: false,
      loop: false,
    });

  });

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    mobileLinks.forEach(link => {
      if (link) {
        link.addEventListener('click', () => {
          if (mobileMenu) {
            mobileMenu.classList.remove('open');
          }
        });
      }
    });

    const toTopButton = document.getElementById("to-top");
    if (toTopButton) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          toTopButton.classList.remove("hidden");
        } else {
          toTopButton.classList.add("hidden");
        }
      });
    }
  }, []);

  return (
    <>
      <div className="preloader">
        <div className="logo-container">
          <div className="loading-text text-center font-bold uppercase" id="welcome" style={{ userSelect: "none" }}></div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-6 py-4 z-50">
        <div className="flex-1">
          <h1
            className="text-xl md:text-2xl font-bold"
            style={{ userSelect: "none" }}
          >
            <Link href="/" style={{ userSelect: "none" }}>Shaka.Pratama();</Link>
          </h1>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex nav font-semibold text-lg flex-1 justify-center">
          <ul className="flex items-center space-x-10">
            <li>
              <Link href="#about" className="nav-link" style={{ userSelect: "none" }}>
                About
              </Link>
            </li>
            <li>
              <Link href="#gallery" className="nav-link" style={{ userSelect: "none" }}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="#project" className="nav-link" style={{ userSelect: "none" }}>
                Project
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop contact button */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link href="/contact" className="mobile-link bg-[#010203] px-9 py-2 text-white hover:scale-[1.1] ease-in-out duration-300"
            style={{ userSelect: "none" }}>Contact
          </Link>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div id="mobile-menu" className="md:hidden fixed inset-0 bg-white z-40">
        <ul className="flex flex-col items-center space-y-4 py-8 mt-16">
          <li className="w-full text-center">
            <Link href="#about" className="mobile-link block w-full py-4 hover:bg-gray-100" style={{ userSelect: "none" }}>About</Link>
          </li>
          <li className="w-full text-center">
            <Link href="#gallery" className="mobile-link block w-full py-4 hover:bg-gray-100" style={{ userSelect: "none" }}>Gallery</Link>
          </li>
          <li className="w-full text-center">
            <Link href="#project" className="mobile-link block w-full py-4 hover:bg-gray-100" style={{ userSelect: "none" }}>Project</Link>
          </li>
          <li className="w-full text-center px-4 mt-4">
            <button className="mobile-link bg-[#010203] px-9 py-2 text-white hover:scale-[1.1] ease-in-out duration-300 w-full">
              <Link href="/contact" style={{ userSelect: "none" }}>Contact</Link>
            </button>
          </li>
        </ul>
      </div>

      <div id="back"></div>

      <div>
        <section
          className="lg:block hidden w-screen bg-white h-screen"
          id="hero"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-96 text-center">
              <h3
                className="text-4xl md:text-5xl lg:text-[5rem] font-bold mx-4 md:mx-20 lg:mx-64 text-[#010203]"
                id="nama-saya" style={{ userSelect: "none" }}
              ></h3>
              <p className="text-lg md:text-xl mt-4 mx-4 md:mx-20 lg:mx-64 text-[#010203] py-2" style={{ userSelect: "none" }}>
                — Web Developer | Designer —
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-5 pt-5">
                <a
                  href="comingsoon.html"
                  className="flex items-center px-6 py-3 bg-white hover:scale-[1.08] hover:bg-[#010203] border border-black hover:text-white duration-300" style={{ userSelect: "none" }}
                >
                  Download Resume
                </a>
                <a
                  href="#about"
                  className="flex items-center px-6 py-3 bg-white hover:scale-[1.08] hover:bg-[#010203] border border-black hover:text-white duration-300" style={{ userSelect: "none" }}
                >
                  Start Explore
                </a>
              </div>
            </div>
          </div>
        </section>

        <div
          className="flex flex-wrap md:flex-nowrap items-center h-screen w-screen"
          id="about"
        >
          <div className="bg-white w-full md:w-1/2 h-full flex items-center py- md:py-0 justify-center">
            <div className="mx-8 md:mx-16 text-center mt-16 mb-8">
              <Image
                src="/photomobile.png"
                className="md:hidden h-32 w-32 rounded-full mx-auto"
                alt="Profile Image"
                width={800}
                height={480}
              />
              <div
                className="aos"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="70"
              >
                <h1 className="text-4xl md:text-6xl font-bold mt-8 md:mt-16" style={{ userSelect: "none" }} id="nama-eug"
                ></h1>
                <div className="flex mt-5 md:mt-16 font-light text-gray-500 space-x-4 justify-center">
                  <div className="pr-4">
                    <span className="uppercase" style={{ userSelect: "none" }}>
                      Country
                    </span>
                    <p
                      className="text-xl md:text-2xl text-gray-900 font-semibold pt-2"
                      style={{ userSelect: "none" }}
                    >
                      Indonesia
                    </p>
                  </div>
                  <div className="pr-4">
                    <span className="uppercase" style={{ userSelect: "none" }}>
                      Island
                    </span>
                    <p
                      className="text-xl md:text-2xl text-gray-900 font-semibold pt-2"
                      style={{ userSelect: "none" }}
                    >
                      Bali
                    </p>
                  </div>
                  <div className="pr-4">
                    <span className="uppercase" style={{ userSelect: "none" }}>
                      Regency
                    </span>
                    <p
                      className="text-xl md:text-2xl text-gray-900 font-semibold pt-2"
                      style={{ userSelect: "none" }}
                    >
                      Badung
                    </p>
                  </div>
                </div>

                <div
                  className="description w-full mt-8 md:mt-16 text-gray-500 md:text-xl text-sm"
                  style={{ userSelect: "none" }}
                >
                  Hi everyone! My name is I Gede Shaka Pratama. I am a Web
                  Developer dedicated to creating websites with modern,
                  responsive UI and professional design. With my expertise in
                  front-end development, I focus on optimal user experience and
                  clean and comfortable design.
                  <div className="flex flex-wrap justify-center mt-4">
                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "Next.js",
                      "PHP",
                      "Java",
                      "Tailwind",
                      "Bootstrap 5",
                      "Anime.js",
                      "GSAP",
                      "typed.js",
                      "Figma",
                      "Visual Studio Code",
                      "NPM",
                      "Git",
                      "GitHub",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="border border-black text-black px-2 py-1 mx-1 my-2 hover:bg-black hover:text-white hover:scale-[1.1] ease-in-out duration-300 text-xs"
                        style={{ userSelect: "none" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <br />
                <a
                  href="#project"
                  className="nav-link uppercase mt-5 text-sm font-semibold"
                  style={{ userSelect: "none" }}
                >
                  See My Project
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:block w-full md:w-1/2 h-full">
            <Image
              src="/photohero.png"
              data-aos="fade-left"
              data-aos-duration="700"
              className="h-full w-full object-cover"
              alt="Hero Image"
              width={800}
              height={500}
            />
          </div>
        </div>

        <section className="" id="gallery">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-2.5 lg:pb-16 pb-10">
              {/* This empty div can be removed if not needed */}
            </div>
            <div className="gallery">
              <div className="flex flex-col mb-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                  <div className="md:col-span-4 h-[250px] sm:h-[300px] md:h-[480px] w-full">
                    <Image
                      src="/image4.png"
                      alt="Gallery image 1"
                      className="gallery-image object-cover hover:grayscale-0 grayscale transition-all duration-300 ease-in-out mx-auto w-full h-full"
                      width={800}
                      height={480}
                    />
                  </div>
                  <div className="md:col-span-8 h-[250px] sm:h-[300px] md:h-[480px] w-full">
                    <Image
                      src="/image10.png"
                      alt="Gallery image 2"
                      className="gallery-image object-cover hover:grayscale-0 grayscale transition-all duration-300 ease-in-out mx-auto w-full h-full"
                      width={800}
                      height={480}
                    />
                  </div>
                  <div className="md:col-span-8 h-[250px] sm:h-[300px] md:h-[480px] w-full">
                    <Image
                      src="/image8.png"
                      alt="Gallery image 3"
                      className="gallery-image object-cover hover:grayscale-0 grayscale transition-all duration-300 ease-in-out mx-auto w-full h-full"
                      width={800}
                      height={480}
                    />
                  </div>
                  <div className="md:col-span-4 h-[250px] sm:h-[300px] md:h-[480px] w-full">
                    <Image
                      src="/image2.png"
                      alt="Gallery image 4"
                      className="gallery-image object-cover hover:grayscale-0 grayscale transition-all duration-300 ease-in-out mx-auto w-full h-full"
                      width={800}
                      height={480}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-white" id="project">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col">
              <div
                className="line w-full bg-[#010203] h-[0.5px] mb-3"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="70"
              ></div>
              <span className="text-[#010203] text-base lg:text-xl font-light mb-2" style={{ userSelect: "none" }}>
                This is the core area.
              </span>
              <h2 className="text-[#010203] text-4xl lg:text-7xl font-normal mb-8" style={{ userSelect: "none" }}>
                Our Work.
              </h2>

              <div>
                <div className="flex flex-col mb-5">
                  <div className="relative h-[250px] sm:h-[300px] md:h-[800px]">
                    <Image
                      src="/image4.png"
                      alt="Project image"
                      className="object-cover hover:grayscale-0 grayscale transition-all duration-300 w-full h-full"
                      width={800}
                      height={480}
                    />
                  </div>
                  <div className="flex mt-4 justify-between">
                    <div className="px-2 py-1 w-32 text-center border border-black cursor-pointer hover:bg-[#010203] hover:text-white ease-in-out duration-300">
                      <a href="https://jukutpremium.github.io/Penglipuran/" style={{ userSelect: "none" }}>See project.</a>
                    </div>
                    <div className="technology space-x-2 hidden lg:flex">
                      {["HTML", "CSS", "JavaScript", "Bootstrap 5", "GSAP", "Typed.js", "Anime.js"].map(
                        (tech) => (
                          <div
                            key={tech}
                            className="px-2 py-1 text-center border border-black"
                          >
                            {tech}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  <div className="flex flex-col">
                    <div className="relative h-[250px] sm:h-[300px] md:h-[500px]">
                      <Image
                        src="/image2.png"
                        alt="Project image"
                        className="object-cover hover:grayscale-0 grayscale transition-all duration-300 w-full h-full"
                        width={800}
                        height={480}
                      />
                    </div>
                    <div className="flex mt-4 justify-between">
                      <div className="px-2 py-1 w-32 text-center border border-black cursor-pointer hover:bg-[#010203] hover:text-white ease-in-out duration-300">
                        <Link href="https://jukutpremium.github.io/Ezzy-Hotel/" style={{ userSelect: "none" }}>
                          See project.
                        </Link>
                      </div>
                      <div className="technology space-x-2 hidden lg:flex">
                        {["HTML", "CSS", "JavaScript", "Bootstrap 5"].map((tech) => (
                          <div
                            key={tech}
                            className="px-2 py-1 text-center border border-black"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="relative h-[250px] sm:h-[300px] md:h-[500px]">
                      <Image
                        src="/image3.png"
                        alt="Project image"
                        className="object-cover hover:grayscale-0 grayscale transition-all duration-300 w-full h-full"
                        width={800}
                        height={480}
                      />
                    </div>
                    <div className="flex mt-4 justify-between">
                      <div className="px-2 py-1 w-32 text-center border border-black cursor-pointer hover:bg-[#010203] hover:text-white ease-in-out duration-300">
                        <Link href="https://jukutpremium.github.io/Nyarik-Kopi/" style={{ userSelect: "none" }}>
                          See project.
                        </Link>
                      </div>
                      <div className="technology space-x-2 hidden lg:flex">
                        {["HTML", "CSS", "JavaScript", "Bootstrap 5","Anime.js", "GSAP"].map((tech) => (
                          <div
                            key={tech}
                            className="px-2 py-1 text-center border border-black"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="relative h-[250px] sm:h-[300px] md:h-[800px]">
                    <Image
                      src="/image1.png"
                      alt="Project image"
                      className="object-cover hover:grayscale-0 grayscale transition-all duration-300 w-full h-full"
                      width={800}
                      height={480}
                    />
                  </div>
                  <div className="flex mt-4 justify-between">
                    <div className="px-2 py-1 w-32 text-center border border-black cursor-pointer hover:bg-[#010203] hover:text-white ease-in-out duration-300">
                      <Link href="https://jukutpremium.github.io/CoffeeZone/" style={{ userSelect: "none" }}>See project.</Link>
                    </div>
                    <div className="technology space-x-2 hidden lg:flex">
                      {["HTML", "CSS", "JavaScript", "Bootstrap 5"].map(
                        (tech) => (
                          <div
                            key={tech}
                            className="px-2 py-1 text-center border border-black"
                          >
                            {tech}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-full h-screen bg-[#010203] pt-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <div className="text-center">
              <h3
                className="text-5xl text-white font-bold mb-10"
                style={{ userSelect: "none" }}
              >
                Dont forget your semicolon();
              </h3>
              {/* Menambahkan div container dengan flex dan gap untuk button */}
              <div className="flex justify-center gap-4">
                <button className="border border-white bg-black px-9 py-2 text-white hover:scale-[1.1] hover:border-[#010203] hover:bg-white hover:text-[#010203] ease-in-out duration-300">
                  <Link href="/contact" style={{ userSelect: "none" }}>Contact</Link>
                </button>
                <button className="border border-white bg-black px-9 py-2 text-white hover:scale-[1.1] hover:border-[#010203] hover:bg-white hover:text-[#010203] ease-in-out duration-300">
                  <Link href="https://open.spotify.com/playlist/48xrH30eYqABpSiN52TqBb?si=3011618cdf514c2d" style={{ userSelect: "none" }}>My Playlist ?</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#010203] text-gray-200 h-10 w-full text-center pt-2">
            <p style={{ userSelect: "none" }}>&copy; 2024 Shaka Pratama</p>
          </div>
        </footer>
      </div>
      <Link href="#back"
        className="bg-[#010203] flexed justify-center items-center h-14 w-14 fixed z-[9999] right-4 bottom-4 p-4 hover:animate-pulse hover:scale-[1.1] ease-in-out duration-300 hidden"
        id="to-top">
        <span className="mt-2 block w-5 h-5 border-white border-t-2 border-l-2 rotate-45"></span>
      </Link>
    </>
  );
}
