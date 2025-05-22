import { words } from '../constants/words.js';
import Button from '../components/Button.jsx';
import AnimatedCounter from '../components/AnimatedCounter.jsx';
import HeroExperience from "../components/HeroModels/HeroExperience";

import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);


const Hero = () => {
    useGSAP( () => {
        gsap.fromTo(".hero-text h1",
            {y:50, opacity: 0},
            {y:0, opacity:1, duration: 1, stagger: 0.2, ease: "power2.inOut"},
        );

        gsap.fromTo(
            ".scrambled-para",
            { text: "" },
            {
            duration: 3,
            text: "Hi, I am Kartavya Shrivastav, a developer based in India with a passion for building impactful digital experiences. I specialize in crafting modern web applications that blend creativity with functionality.",
            ease: "none"
            }
        );
    });
    

    return (
        <section id='hero' className="relative overflow-hidden" >
            <div className='absolute top-0 left-0 z-10'>
                <img src="/images/bg.png" alt="background" />
            </div>
        
            <div className='hero-layout'>

                {/*Left: Hero Content*/}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <div className='hero-text'>
                            <h1>Shaping
                                <span className='slide'>
                                    <span className='wrapper'>
                                        {words.map((word) => (
                                                <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                                    <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:pd-2 p-1 rounded-full bg-white-50'/>
                                                    <span>{word.text}</span>
                                                </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>into Real Project</h1>
                            <h1>that Deliver Results</h1>
                        </div>

                        <p className="scrambled-para text-white-50 md:text-xl md:w-xl pointer-events-none relative z-10">
                            Hi, I am Kartavya Shrivastav, a developer based in India with a passion for building impactful digital experiences. I specialize in crafting modern web applications that blend creativity with functionality.
                        </p>

                        <Button className="md:w-80 md:h-16 w-60 h-12" id="counter" text="See my Work" />
                    </div>
                </header>

                {/*Right: Hero Model*/}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>

            </div>
            
            {/*Counter Section*/}
            <AnimatedCounter />
            
        </section>
    );
};


export default Hero;