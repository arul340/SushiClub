import { motion } from "framer-motion";
import { useInView } from "../Animate/Animate";
import Img from "../../assets/Home/Creations.webp";
import Img1 from "../../assets/Home/Best1.webp";
import Img2 from "../../assets/Home/Best2.webp";
import Img3 from "../../assets/Home/Best3.webp";
import Img4 from "../../assets/Home/Best4.webp";
import Img5 from "../../assets/Home/Best5.webp";
import Img6 from "../../assets/Home/Best6.webp";

const topData = [
  {
    id: 1,
    img: Img1,
    title: "Sushi",
    title2: "Nigiri",
  },
  {
    id: 2,
    img: Img2,
    title: "Sushi",
    title2: "Maki",
  },
  {
    id: 3,
    img: Img3,
    title: "Sushi",
    title2: "Temaki",
  },
  {
    id: 4,
    img: Img4,
    title: "Sushi",
    title2: "Uramaki",
  },
  {
    id: 5,
    img: Img5,
    title: "Sushi",
    title2: "Sashimi",
  },
  {
    id: 6,
    img: Img6,
    title: "Sushi",
    title2: "Inari",
  },
];

const TopSushi = () => {
  const { ref: sectionRef, isInView: isSectionInView } = useInView();
  const { ref: cardRef, isInView: isCardInView } = useInView();
  const { ref: awakenRef, isInView: isAwakenInView } = useInView();

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="py-24"
    >
      <div className="container">
        <div className="flex flex-col">
          {/* Title Section */}
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl md:text-5xl font-extrabold mb-6"
            >
              The Best of Sushi
            </motion.h1>
          </div>

          {/* Card Section */}
          <motion.div
            ref={cardRef}
            initial="hidden"
            animate={isCardInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-6 justify-items-center"
          >
            {topData.map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={item.img}
                  alt=""
                  className="w-[100px] rounded-full h-[100px] drop-shadow-2xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <p className="text-center text-xl md:text-2xl font-semibold mt-6">
                  {item.title}
                </p>
                <p className="text-xl md:text-2xl text-center font-semibold">
                  {item.title2}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Awaken Your Senses Section */}
          <motion.div
            ref={awakenRef}
            initial="hidden"
            animate={isAwakenInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-center bg-[#b3f5c6] rounded-2xl ml-0 md:ml-24 mt-20"
          >
            {/* Teks */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="md:mt-0 mt-20"
            >
              <div className="p-6">
                <h1 className="text-center md:text-left text-2xl md:text-3xl font-bold mb-4">
                  Awaken Your Senses
                </h1>
                <p className="text-center md:text-left mr-0 md:mr-18 text-lg md:text-xl mb-20 md:mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  ex odit sequi dolores optio consequuntur Lorem ipsum dolor sit
                  amet..
                </p>
              </div>
            </motion.div>

            {/* Gambar */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex justify-end"
            >
              <motion.img
                src={Img}
                alt=""
                className="w-[400px] h-[350px] relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TopSushi;
