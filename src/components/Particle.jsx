import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import fish from "../assets/Fish.png"
import paw from "../assets/paw.png"

export default function ParticleJS() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // duration: .4,
                // makes them all dissappear
                fpsLimit: 120,
                interactivity: {
                    //duration: .4,
                    events: {
                        //duration: .4,
                        onHover: {
                            //duration: .4,
                            enable: true,
                            mode: "trail",
                        },
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        trail: {
                            //duration: .4,
                            delay: .011,
                            pauseOnStop: true,
                            quantity: 1,
                            particles: {
                                //duration: .4,
                                size: {
                                    value: { min: 5, max: 10 },
                                },
                            },
                        },
                    },
                },
                particles: {
                    // duration: .4,
                    rotate: {
                        value: 0,
                        direction: "random",
                        animation: {
                            speed: 5,
                            enable: true
                        }
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "destroy",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 10,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    //  //duration: .4,
                    shape: {
                        type: "image",
                        images: [
                            {
                                src: fish
                            },
                            {
                                src: paw
                            }
                        ],
                    },
                    size: {
                        value: { min: 10, max: 20 },
                    },
                },
                detectRetina: true,
            }
            }
        />
    );
};
