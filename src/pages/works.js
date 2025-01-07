import Image from "next/image";
import Link from 'next/link';
import gsap from 'gsap';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";

const ProjectCard = ({ project, isFeatured = false }) => {
    return (
        <div className="flex flex-col">
            <div className={`relative h-[250px] sm:h-[300px] ${isFeatured ? 'md:h-[800px]' : 'md:h-[500px]'}`}>
                <Image
                    src={project.image}
                    alt={`${project.title} project image`}
                    className="object-cover hover:grayscale-0 grayscale transition-all duration-700 w-full h-full"
                    width={800}
                    height={480}
                />
            </div>
            <div className={`flex ${isFeatured ? 'my-4' : 'mt-4'} justify-between`}>
                <div className="px-2 py-1 w-32 text-center border border-black cursor-pointer hover:bg-[#010203] hover:text-white ease-in-out duration-700">
                    <Link href={project.url} style={{ userSelect: "none" }}>See project.</Link>
                </div>
                <div className="technology space-x-2 hidden lg:flex">
                    {project.technologies.map((tech) => (
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
    );
};

export default function Works() {
    const [projects, setProjects] = useState([]);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Load projects data
        const loadProjects = async () => {
            try {
                const response = await fetch('/data/projects.json');
                const data = await response.json();
                setProjects(data.projects);
            } catch (error) {
                console.error('Error loading projects:', error);
            }
        };

        loadProjects();

        // Initialize animations
        AOS.init({
            duration: 800,
            once: false,
        });

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
            strings: ['My Works.'],
            typeSpeed: 150,
            backSpeed: 150,
            showCursor: false,
            loop: false,
        });

        // Mobile menu setup
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        menuBtn?.addEventListener('click', () => {
            mobileMenu?.classList.toggle('open');
        });

        mobileLinks.forEach(link => {
            link?.addEventListener('click', () => {
                mobileMenu?.classList.remove('open');
            });
        });

        // Scroll to top button
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

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const featuredProject = projects.find(project => project.featured);
    const regularProjects = projects.filter(project => !project.featured);

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
                            <Link href="/" className="nav-link" style={{ userSelect: "none" }}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/index#about" className="nav-link" style={{ userSelect: "none" }}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/index#gallery" className="nav-link" style={{ userSelect: "none" }}>
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link href="/works" className="nav-link" style={{ userSelect: "none" }}>
                                Works
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
                        <Link href="/" className="mobile-link block w-full py-4 hover:bg-gray-100" style={{ userSelect: "none" }}>Home</Link>
                    </li>
                    <li className="w-full text-center">
                        <Link href="/index#about" className="mobile-link block w-full py-4 hover:bg-gray-100" style={{ userSelect: "none" }}>About</Link>
                    </li>
                    <li className="w-full text-center">
                        <Link href="/index#gallery" className="mobile-link block w-full py-4 hover:bg-gray-100" style={{ userSelect: "none" }}>Gallery</Link>
                    </li>
                    <li className="w-full text-center">
                        <Link href="/works" className="mobile-link block w-full py-4 hover:bg-gray-100" style={{ userSelect: "none" }}>Works</Link>
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

                <section className="py-3 md:py-5 mt-2 md:mt-3 bg-white" id="project">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col">


                            {/* Featured Project */}
                            {featuredProject && (
                                <ProjectCard project={featuredProject} isFeatured={true} />
                            )}

                            {/* Regular Projects Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                                {regularProjects.map(project => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
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
                                Don&apos;t forget your semicolon();
                            </h3>
                            <div className="flex justify-center gap-4">
                                <button className="border border-white bg-black px-9 py-2 text-white hover:scale-[1.1] hover:border-[#010203] hover:bg-white hover:text-[#010203] ease-in-out duration-700">
                                    <Link href="/contact" style={{ userSelect: "none" }}>Contact</Link>
                                </button>
                                <button className="border border-white bg-black px-9 py-2 text-white hover:scale-[1.1] hover:border-[#010203] hover:bg-white hover:text-[#010203] ease-in-out duration-700">
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
                className="bg-[#010203] flexed justify-center items-center h-14 w-14 fixed z-[9999] right-4 bottom-4 p-4 hover:animate-pulse hover:scale-[1.1] ease-in-out duration-700 hidden"
                id="to-top">
                <span className="mt-2 block w-5 h-5 border-white border-t-2 border-l-2 rotate-45"></span>
            </Link>
        </>
    );
}
