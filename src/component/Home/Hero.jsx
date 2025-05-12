import Img from "../../assets/Home/Hero.webp";
import { motion } from "framer-motion";

const bgImg = {
  backgroundImage: `url(${Img})`,
  backgroundCover: "cover",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  widht: "100%",
};
const Hero = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={bgImg}
      >
        <div className="bg-black/30 h-full  ">
          <div className="container flex justify-center items-center h-full ">
            <div className="text-center">
              <motion.h1
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                className="text-5xl md:text-7xl font-extrabold text-white items-center shadow-xl"
              >
                Sushi<span className="text-red-500">Club</span>
              </motion.h1>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
