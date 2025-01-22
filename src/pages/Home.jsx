import React from 'react'
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Carousel, IconButton, Typography, Button } from "@material-tailwind/react";
import '../css/home.css'
import BNS from '../assets/caraousal/BNS.jpg';
import cases from '../assets/caraousal/cases.png';
import query from '../assets/caraousal/query.png';
import summary from '../assets/caraousal/summary.png';


// extra 
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FiArrowRight } from "react-icons/fi";
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];


export default function Home() {

    // light effect
    const color = useMotionValue(COLORS_TOP[0]);
    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
    const redirectBns = () => {
        window.location.href = '/bns'; // Redirect to /bns
    };
///


    const images = [
        {
            src: BNS,
            caption: "BNS"
        },
        {
            src: cases,
            caption: "Get Insights from Cases"
        },
        {
            src: query,
            caption: "Get Your Query Resolved by ChatBot"
        },
        {
            src: summary,
            caption: "Summarize Your Legal Document"
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transition, setTransition] = useState('fade');
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTransition('slide-out');
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setTransition('slide-in');
            }, 500); // 500ms duration for sliding out
        }, 6000); // Change slide every 3 seconds

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [images.length]);

    const nextSlide = () => {
        setTransition('slide-out');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setTransition('slide-in');
        }, 500); // 500ms duration for sliding out
    };

    const prevSlide = () => {
        setTransition('slide-out');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setTransition('slide-in');
        }, 500); // 500ms duration for sliding out
    };

    const [bannerOpen, setBannerOpen] = useState(true);
    const [borderAngle, setBorderAngle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBorderAngle((prevAngle) => (prevAngle + 1) % 360);
        }, 16); // Increment angle about every frame

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
    return (
        <>

            {/* <Carousel className="">
                <div className="relative h-full w-full">
                    <img
                        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                The Beauty of Nature
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                It is not so much for its beauty that the forest makes a claim
                                upon men&apos;s hearts, as for that subtle something, that quality
                                of air that emanation from old trees, that so wonderfully changes
                                and renews a weary spirit.
                            </Typography>
                            <div className="flex justify-center gap-2">
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                                <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                        <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                The Beauty of Nature
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                It is not so much for its beauty that the forest makes a claim
                                upon men&apos;s hearts, as for that subtle something, that quality
                                of air that emanation from old trees, that so wonderfully changes
                                and renews a weary spirit.
                            </Typography>
                            <div className="flex gap-2">
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                                <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                The Beauty of Nature
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                It is not so much for its beauty that the forest makes a claim
                                upon men&apos;s hearts, as for that subtle something, that quality
                                of air that emanation from old trees, that so wonderfully changes
                                and renews a weary spirit.
                            </Typography>
                            <div className="flex gap-2">
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                                <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel> */}
            <div style={{ backgroundColor: '#111827' }}>
                <section className="bg-gray-900 relative mx-2 rounded-lg slide-in">
                    <div className="relative h-screen overflow-hidden rounded-3xl">
                        <div className={`absolute rounded-3xl w-full h-screen transition-transform duration-500 ${transition === 'slide-out' ? 'translate-x-full' : transition === 'slide-in' ? '-translate-x-full' : 'translate-x-0'}`}>
                            <img
                                src={images[currentIndex].src}
                                alt={`Slide ${currentIndex + 1}`}
                                className="object-cover w-full h-screen rounded-3xl"
                                key={currentIndex}

                            />
                        </div>

                        {/* Current Image */}
                        <div className={`absolute rounded-3xl w-full h-screen transition-transform duration-500 ${transition === 'slide-in' ? 'translate-x-0' : 'translate-x-full'}`}>
                            <img
                                src={images[currentIndex].src}
                                alt={`Slide ${currentIndex + 1}`}
                                className="object-cover w-full h-screen rounded-3xl"
                                key={currentIndex}
                            />
                        </div>

                        {/* Caption for the current image */}
                        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white bg-stone-800 opacity-75 text-xl font-semibold px-6 py-4 rounded-lg shadow-lg ring-4 ring-white ring-offset-4 ring-offset-stone-800">
                            {images[currentIndex].caption}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition"
                            onClick={prevSlide}
                            aria-label="Previous Slide"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z" />
                            </svg>
                        </button>
                        <button
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition"
                            onClick={nextSlide}
                            aria-label="Next Slide"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.59 7.41L13.17 12 8.59 16.59 10 18l6-6-6-6z" />
                            </svg>
                        </button>
                    </div>
                </section>


                {/* <section className="bg-gray-900 text-white"> */}
                {/* <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent 
                            animate-typing overflow-hidden whitespace-nowrap border-r-3 border-r-white pr-5
                            ">
                                Empower Your Legal Knowledge.
                                <span className="sm:block animate-typing overflow-hidden whitespace-nowrap border-r-3 border-r-white pr-5"> Navigate the Law Confidently. </span>
                            </h1>
                            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                                Explore the Bhartiya Nyay Sanhita with ease through our comprehensive resources, case searches, and document summarization tools.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                {/* <a className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" href="#">
                                Get Started
                            </a> */}
                {/* <a href='/bns' className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" >
                                    <NavLink
                                        to="/bns"

                                    >
                                        Learn More
                                    </NavLink>
                                </a>
                            </div>
                        </div> */} 
                {/* </div>
                </section> */}

                <motion.section
                    style={{
                        backgroundImage,
                    }}
                    className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200 rounded-3xl"
                >
                    <div className="relative z-10 flex flex-col items-center">
                        {/* <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                            Beta Now Live!
                        </span> */}
                        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
                        Empower Your Legal Knowledge
                        </h1>
                        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
                        Explore the Bhartiya Nyay Sanhita with ease through our comprehensive resources, case searches, and document summarization tools.
                        </p>
                        <motion.button
                            style={{
                                border,
                                boxShadow,
                            }}
                            whileHover={{
                                scale: 1.015,
                            }}
                            whileTap={{
                                scale: 0.985,
                            }}
                            onClick={redirectBns}
                            className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
                        >
                            Learn More
                            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                        </motion.button>
                    </div>

                    <div className="absolute inset-0 z-0">
                        <Canvas>
                            <Stars radius={50} count={2500} factor={4} fade speed={2} />
                        </Canvas>
                    </div>
                </motion.section>
            </div>

            {/* Cards */}


            {/* <article
                className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
            >
                <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6 dark:bg-gray-900">
                    <time datetime="2022-10-10" className="block text-xs text-gray-500 dark:text-gray-400">
                        10th Oct 2022
                    </time>

                    <a href="#">
                        <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                            How to center an element using JavaScript and jQuery
                        </h3>
                    </a>

                    <div className="mt-4 flex flex-wrap gap-1">
                        <span
                            className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                        >
                            Snippet
                        </span>

                        <span
                            className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                        >
                            JavaScript
                        </span>
                    </div>
                </div>
                <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6 dark:bg-gray-900">
                    <time datetime="2022-10-10" className="block text-xs text-gray-500 dark:text-gray-400">
                        10th Oct 2022
                    </time>

                    <a href="#">
                        <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                            How to center an element using JavaScript and jQuery
                        </h3>
                    </a>

                    <div className="mt-4 flex flex-wrap gap-1">
                        <span
                            className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                        >
                            Snippet
                        </span>

                        <span
                            className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                        >
                            JavaScript
                        </span>
                    </div>
                </div>
            </article> */}
            {/* <div className="bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative max-w-md overflow-hidden rounded-xl border border-slate-900 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
      <span className="mb-4 inline-flex items-center justify-center rounded-md bg-blue-600 p-2 shadow-lg">
        <svg
          className="h-6 w-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        />
      </span>
      <h3 className="mb-2 font-medium tracking-tight text-white">Hello!</h3>
      <p className="text-sm text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex
        obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil
        quod quibusdam expedita nemo.
      </p>
    </div> */}








            {/* <div className="relative font-inter antialiased">
                <main className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
                    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
                        <section className="flex justify-center">
                            <div className="w-full max-w-[422px] [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border">
                                <div className="p-5">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="flex space-x-2 items-center mb-0.5">
                                                <div className="text-2xl font-bold text-slate-200 mb-1">17,479</div>
                                                <div className="text-xs font-medium text-emerald-500">+48%</div>
                                            </div>
                                            <div className="text-sm font-medium text-slate-500">Monthly visits</div>
                                        </div>
                                        <button className="w-8 h-8 flex justify-center items-center text-slate-500 hover:text-slate-400">
                                            <span className="sr-only">Open menu</span>
                                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="4" fill="none">
                                                <path d="M8 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM14 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="px-5">
                                    <img className="group-hover:opacity-0 transition-opacity duration-500" src="https://cruip-tutorials.vercel.app/animated-gradient-border/card-01.png" width="380" height="173" alt="Card image 01" />
                                </div>
                            </div>
                        </section>
                    </div>
                </main>

                {bannerOpen && ( // Conditional rendering of the banner
                    <div className="fixed bottom-0 right-0 w-full md:bottom-6 md:right-12 md:w-auto z-50">
                        <div className="bg-slate-800 text-sm p-3 md:rounded shadow flex justify-between">
                            <div className="text-slate-500 inline-flex">
                                <a className="font-medium hover:underline text-slate-300" target="_blank" rel="noopener noreferrer" href="https://cruip.com/animated-gradient-borders-with-tailwind-css/">
                                    Read Tutorial
                                </a>
                                <span className="italic px-1.5">or</span>
                                <a className="font-medium hover:underline text-indigo-500 flex items-center" href="https://github.com/cruip/cruip-tutorials/blob/main/animated-gradient-border/index.html" target="_blank" rel="noreferrer">
                                    <span>Download</span>
                                    <svg className="fill-indigo-400 ml-1" xmlns="http://www.w3.org/2000/svg" width="9" height="9">
                                        <path d="m1.649 8.514-.91-.915 5.514-5.523H2.027l.01-1.258h6.388v6.394H7.158l.01-4.226z" />
                                    </svg>
                                </a>
                            </div>
                            <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-slate-700" onClick={() => setBannerOpen(false)}>
                                <span className="supports-[counter-set]:sr-only">Close</span>
                                <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                                    <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div> */}


            {/* serach bns button */}
            {/* Base */}






        </>
    );
}