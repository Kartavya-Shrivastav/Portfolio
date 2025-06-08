import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);     // Custom hook to handle GSAP animations

const ShowcaseSection = () => {

  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        { opacity: 0, y: 50},
        { opacity: 1, y: 0, duration: 1, delay: 0.25 * (index+1), scrollTrigger: {
            trigger: project,
            start: 'top bottom-=100'
          }
        }
      )
    })

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="WebNexus" />
            </div>
            <div className="text-content">
              <h2>OWASP Top 10 Vulnerabilities Documentation and Simulations</h2>
              <p className="text-white-50 md:text-xl">
                This project gives detailed explanation and documentation for every top 10 OWASP vulnerability and also demonstrates the vulnerability using a vulnerable and one secure simulation
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="project-list-wrapper overflow-hidden">

            <div className='project' ref={project2Ref}>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img src="/images/project2.png" alt="Project 2" />
              </div>
                <h2>Project 2</h2>
            </div>
            
            <div className='project' ref={project3Ref}>
              <div className='image-wrapper bg-[#ffe7eb]'>
                <img src="/images/project3.png" alt="Project 3" />
              </div>
                <h2>Project 3</h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;