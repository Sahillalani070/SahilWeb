import React, {useRef} from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);




    useGSAP(()=> {
        const projects =[project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {y:50, opacity: 0},
                {
                    y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card, start: 'top bottom-=100',
                    }
                }
            )
        })
        gsap.fromTo(
            sectionRef.current,
            {opacity:0} ,
            {opacity:1, duration:1.5}
        )
            },[]);
    return (
        <section id="work" ref={sectionRef} className="app-showcase">
        <div id="work" className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* Left Side */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src={"/images/project1.png"} alt="Jaldi.io (mobile application)"/>
                        </div>
                        <div className="text-content">
                            <h2>On-Demand CrossPlatform social app, Real-time posts, Event Scheduling</h2>
                            <p className="text-white-50 md:text-xl">
                                An app built with Flutter, Dart & Firebase for a multi-user sync and optimized experience.
                            </p>

                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src= "/images/project2.png" alt="Library Management Platform"/>
                            </div>
                            <h2>OpenGL C++ Snake Game</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src= "/images/project3.jpeg" alt="YC Directory"/>
                            </div>
                            <h2>Python OpenCV Face Detector App</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
export default ShowcaseSection
