import React from "react";
import Lottie from "lottie-react";
import Loading from "./assets/loader.json";

const LottieLoader = () => <Lottie animationData={Loading} loop={true} style={{height:100,width:100,margin:'auto'}} />;

export default LottieLoader;