import Img1 from "../../assets/Home/Exception1.webp";
import Img2 from "../../assets/Home/Exception2.webp";
import Img3 from "../../assets/Home/Exception3.webp";
import { motion } from "framer-motion";
import { useInView } from "../Animate/Animate";

const ExecptionData = [
  {
    id: 1,
    img: Img1,
    name: "Dragon",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut distinctio at aspernatur, reiciendis corporis voluptate?",
    link: "#",
    color: "#b3f5c6",
  },
  {
    id: 2,
    img: Img2,
    name: "Delux",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut distinctio at aspernatur, reiciendis corporis voluptate?",
    link: "#",
    color: "#b3f5c6",
  },
  {
    id: 3,
    img: Img3,
    name: "Vegetarian",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut distinctio at aspernatur, reiciendis corporis voluptate?",
    link: "#",
    color: "#b3f5c6",
  },
];

const Execption = () => {
  const { ref: sectionRef, isInView: isSectionInView } = useInView();
  const { ref: cardRef, isInView: isCardInView } = useInView();
  return (
    <>
      <motion.section
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-16"
      >
        <div className="container">
          <div className="flex flex-col gap-6">
            {/* Title Section */}
            <div className="text-center mb-6">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl md:text-5xl font-extrabold"
              >
                Sushis d&apos;Exeption
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
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {ExecptionData.map((item) => (
                <motion.div
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="shadow-xl rounded-2xl"
                >
                  <motion.div
                    style={{ backgroundColor: `${item.color}` }}
                    whileHover={{ backgroundColor: "#a0e9b3" }}
                    className="rounded-2xl"
                  >
                    =
                    <motion.img
                      key={item.id}
                      src={item.img}
                      alt={item.name}
                      className=" w-auto md:w-full  md:h-[350px] rounded-t-2xl"
                    />
                    <div className="space-y-4 p-6">
                      <motion.h1 className="text-2xl md:text-3xl font-bold">
                        {item.name}
                      </motion.h1>
                      <motion.p className="text-lg md:text-xl">
                        {item.desc}
                      </motion.p>
                      <motion.button className="py-2 px-4 mt-4 bg-yellow-300 rounded-xl font-bold text-xl">
                        <a href="#">Order Now</a>
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Execption;
