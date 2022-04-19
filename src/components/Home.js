import { Parallax } from "react-parallax";
import { ParallaxProvider, useParallax } from 'react-scroll-parallax'
import { Fade, Slide, Reveal } from "react-awesome-reveal"
import { keyframes } from "@emotion/react";
import { Stack } from 'react-bootstrap';
import 'animate.css';
import WebFont from 'webfontloader'

WebFont.load({
    google: {
        families: ["Fredoka", "Black Ops One"]
    }
});


const customAnimation = keyframes`
from {
  opacity: 0;
  transform: translate3d(200px, 100px, 0);
}
to {
  opacity: 1;
  transform: translate3d(0, 100px, 0);
}
`;
function AnimatedComponent({ children }) {
    return <Reveal keyframes={customAnimation}>{children}</Reveal>;
}

function Home() {
    // eslint-disable-next-line no-mixed-operators
    const parallax = useParallax < HTMLDivElement > ({
        easing: 'easeOutQuad',
        translateX: [0, 100],
    });

    return (
        <>
            <ParallaxProvider>
                <div className="home-div" >
                    <div style={{ position: "relative" }}>
                        <div className="transparent-div-img-title" ></div>
                        <div className="main-title" >
                            <h2 style={{ fontSize: "3vw" }}>It's always the perfect time for</h2>
                            <h1 style={{ fontSize: "7vw" }}>Transform your life</h1>
                        </div>
                        <img className="img-parallax" src={'./img/gimImagePrincipal.jpg'} alt="" />
                        <Fade triggerOnce>
                            <img className="workout-couple" src={'./img/gim8.png'} alt="" />
                        </Fade>
                    </div>
                    <div>
                        <div className="weightplate-div">
                            <img src={'./img/weightPlate.png'} style={{ width: "100%" }} alt="" />
                        </div>
                        <div className="welcome">
                            <Fade style={{ margin: "7%" }}>
                                <Slide cascade damping={0.3} direction={"up"} triggerOnce>
                                    <h3 style={{ color: "chartreuse" }}>WELCOME</h3>
                                    <h3>TO THE MECCA OF BODYBUILDING.</h3>
                                    <h3>IT'S WHERE CONFIDENCE GROWS.</h3>
                                    <h3>IT'S WHERE GREATNESS LIVES.</h3>
                                    <h3>IT'S WHERE LEGACIES ARE BUILT.</h3>
                                    <h3>AND THEY'RE BUILT EVERY SINGLE DAY.</h3>
                                </Slide>
                            </Fade>
                        </div>
                    </div>
                    <Parallax speed={1} bgImage={'./img/gim7.jpg'} className="img-parallax">
                        <div style={{ height: "70vh" }}>
                            <AnimatedComponent>
                                <div {...parallax} className="parallax-text" >TOP NOTCH equipment</div>
                            </AnimatedComponent>
                        </div>
                    </Parallax>
                    <div style={{ marginTop: "5%" }}>
                        <div className="text-slider">
                            <Fade>
                                <Slide cascade damping={0.3} triggerOnce>
                                    <div >
                                        <h2 className="text-slider-h2">Community</h2>
                                    </div>
                                    <div style={{ marginLeft: "10%" }}>
                                        <Slide cascade damping={0.3} triggerOnce>
                                            <h3>You’re not just joining a gym.</h3>
                                            <h3>You’re joining a supportive community of like-minded people</h3>
                                            <h3>who are here to give you the encouragement you need.</h3>
                                        </Slide>
                                    </div>
                                </Slide>
                            </Fade>
                        </div>
                        <div className="div-img">
                            <img src={'./img/gym10.jpg'} className="gim5-img" alt="" />
                        </div>
                    </div>
                    <div style={{ marginTop: "5%", marginBottom: "5%" }}>
                        <div className="div-img">
                            <img src={'./img/gim11.jpg'} className="gim6-img" alt="" />
                        </div>
                        <Fade cascade className="text-slider">
                            <Slide cascade damping={0.3} direction={"right"} triggerOnce>
                                <div >
                                    <h2 style={{ color: "chartreuse" }}>YOUR FITNESS IS ESSENTIAL</h2>
                                </div>
                                <div>
                                    <Slide cascade damping={0.3} direction={"right"} triggerOnce>
                                        <h3>At Black Dog</h3>
                                        <h3>we believe your fitness is essential™.</h3>
                                        <h3>Making your overall physical and</h3>
                                        <h3>mental wellness a priority</h3>
                                        <h3>will melt away stress, decrease anxiety, and increase your overall</h3>
                                        <h3>positive energy levels!</h3>
                                    </Slide>
                                </div>
                            </Slide>
                        </Fade>
                    </div>
                    <Parallax speed={1} className="img-parallax" bgImage={'./img/gim3.jpg'} >
                        <div style={{ height: "70vh" }}>
                            <AnimatedComponent>
                                <div className="parallax-text">Open from 6am to 23pm</div>
                            </AnimatedComponent>
                        </div>
                    </Parallax>
                    <div style={{ marginBottom: "0% 2% 10%" }}>
                        <div className="welcome">
                            <Fade cascade style={{ color: "white" }}>
                                <Slide direction={"up"}>
                                </Slide>
                                <div style={{ margin: "2% 7%" }}>
                                    <h2 style={{ color: "chartreuse" }}>Support</h2>
                                    <Slide cascade direction={"left"} triggerOnce>
                                        <h3>Every member gets a free,</h3>
                                        <h3>personalized Get Started Plan when they join.</h3>
                                        <h3>Our friendly, professional staff is trained to help you along your fitness journey,</h3>
                                        <h3>no matter how much support you need.</h3>
                                    </Slide>
                                </div>
                            </Fade>
                        </div>
                        <div className="weightplate-div" >
                            <img src={'./img/weightPlate.png'} style={{ width: "100%" }} alt="Weight plate." />
                        </div>
                    </div>
                    <Parallax speed={5}
                        className="img-parallax"
                        bgImage={'./img/gim4.jpg'}
                        strength={200}
                        renderLayer={(percentage) => (
                            <div>
                                <div
                                    style={{
                                        position: "absolute",
                                        background: ` rgba(255, 255, 255,  ${percentage * 1})`,
                                        left: "50%",
                                        top: "50%",
                                        borderRadius: "50%",
                                        transform: "translate(-50%,-50%)",
                                        width: percentage * 280,
                                        height: percentage * 280
                                    }}
                                />
                                <Stack>
                                    <div>
                                        <img src={"./img/logo.png"}
                                            className="increasing-logo"
                                            style={{ width: `${percentage * 15}%` }}
                                            alt="" />
                                    </div>
                                </Stack>
                            </div>
                        )}>
                        <div style={{ height: 700 }}>
                        </div>
                    </Parallax>
                    <h2 style={{ color: "chartreuse", marginLeft: "2%" }}>BLACK DOG GYM</h2>
                </div>
            </ParallaxProvider>
        </>
    )
}
export default Home
