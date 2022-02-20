import { Parallax } from "react-parallax";
import { ParallaxProvider, useParallax } from 'react-scroll-parallax'
import { Fade, Slide, Reveal, Roll } from "react-awesome-reveal"
import { keyframes } from "@emotion/react";
import { Stack } from 'react-bootstrap';
import './home.css'
import 'animate.css';
import WebFont from 'webfontloader'


WebFont.load({
    google: {
        families: ["Lobster Two", "Black Ops One"]
    }
});


const insideStyles = {
    background: "rgba(0, 0, 0, 0.6)",
    color: "chartreuse",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "10%",
    transform: "translate(-20%,-20%)",
    marginLeft: "10%"
}

const styles = {
    textAlign: "left",
    fontFamily: "Black Ops One"
}

const styleStartImg = {
    position: "relative",
}

const imgWorkout = {
    position: "absolute",
    top: "34%",
    left: "24%",
    zIndex: "1",
    width: "65%"
}

const imgSize = {
    width: "-webkit-fill-available"
}

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
                <div style={styles}>
                    <div style={styleStartImg}>
                        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", position: "absolute", width: "-webKit-fill-available", height: "-webKit-fill-available" }}></div>
                        <div style={{ position: "absolute", right: "13%", top: "14%", textAlign: "center", color: "white" }}>
                            <h2 style={{ fontSize: "3vw" }}>It's always the perfect time for</h2>
                            <h1 style={{ fontSize: "7vw" }}>Transform your life</h1>
                        </div>
                        <img style={imgSize} src={'./img/gimImagePrincipal.jpg'} alt="" />
                        <Fade>
                            <img style={imgWorkout} src={'./img/workout2.png'} alt="" />
                        </Fade>
                    </div>
                    <div>
                        <div style={{ width: "20%", display: "inline-block", verticalAlign: "top" }}>
                            <img src={'./img/weightPlate.png'} style={{ width: "100%" }} alt="" />
                        </div>
                        <div style={{ width: "80%", display: "inline-block", color: "white" }}>
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
                    <Parallax speed={1} bgImage={'./img/gim7.jpg'} style={imgSize}>
                        <div style={{ height: "70vh" }}>
                            <AnimatedComponent>
                                <div {...parallax} style={insideStyles}>TOP NOTCH equipment</div>
                            </AnimatedComponent>
                        </div>
                    </Parallax>
                    <div style={{ marginTop: "5%" }}>
                        <div style={{ color: "white", display: "inline-block", width: "48%" }}>
                            <Fade>
                                <Slide cascade damping={0.3} triggerOnce>
                                    <div >
                                        <h2 style={{ marginLeft: "10%", color: "chartreuse" }}>Community</h2>
                                    </div>
                                    <div style={{ marginLeft: "10%" }}>
                                        <Slide cascade damping={0.3} triggerOnce>
                                            <p>You’re not just joining a gym.</p>
                                            <p>You’re joining a supportive community of like-minded people</p>
                                            <p>who are here to give you the encouragement you need.</p>
                                        </Slide>
                                    </div>
                                </Slide>
                            </Fade>
                        </div>
                        <div style={{ display: "inline-block", width: "50%" }}>
                            <img src={'./img/gim5.jpg'} style={{ width: "100%", height: "auto", marginLeft: "-23%" }} alt="" />

                        </div>
                    </div>
                    <div style={{ marginTop: "5%", marginBottom: "5%" }}>
                        <div style={{ display: "inline-block", width: "50%" }}>
                            <img src={'./img/gim6.jpg'} style={{ width: "100%", marginLeft: "23%" }} alt="" />

                        </div>
                        <Fade cascade style={{ color: "white", display: "inline-block", width: "48%" }}>
                            <Slide cascade damping={0.3} direction={"right"} triggerOnce>
                                <div >
                                    <h2 style={{ color: "chartreuse" }}>YOUR FITNESS IS ESSENTIAL</h2>
                                </div>
                                <div>
                                    <Slide cascade damping={0.3} direction={"right"} triggerOnce>
                                        <p>At Black Dog</p>
                                        <p>we believe your fitness is essential™.</p>
                                        <p>Making your overall physical and</p>
                                        <p>mental wellness a priority</p>
                                        <p>will melt away stress, decrease anxiety, and increase your overall</p>
                                        <p>positive energy levels!</p>
                                    </Slide>
                                </div>
                            </Slide>
                        </Fade>
                    </div>
                    <Parallax speed={5} bgImage={'./img/gim3.jpg'} strength={-100}>
                        <div style={{ height: "70vh", marginTop: "10%", marginBottom: "10%" }}>
                            <AnimatedComponent>
                                <div style={insideStyles}>Open from 6am to 23pm</div>
                            </AnimatedComponent>
                        </div>
                    </Parallax>
                    <div style={{ marginBottom: "10%" }}>
                        <div style={{ width: "80%", display: "inline-block", color: "white" }}>
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
                        <div style={{ width: "20%", display: "inline-block", verticalAlign: "top" }}>
                            <img src={'./img/weightPlate.png'} style={{ width: "100%" }} alt="" />
                        </div>
                    </div>
                    <Parallax speed={5}
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
                                            style={{ position: "absolute", left: "50%", transform: "translate(-50%,-50%)", top: "51%", width: `${percentage * 15}%` }}
                                            alt="" />
                                    </div>
                                    <div style={{ backgroundColor: "chartreuse", color: "black" }}>JOIN US</div>
                                </Stack>
                            </div>
                        )}>
                        <div style={{ height: 700 }}>

                        </div>
                    </Parallax>
                    <h2 style={{ color: "chartreuse" }}>BLACK DOG GYM</h2>
                </div>
            </ParallaxProvider>
        </>
    )
}
export default Home
