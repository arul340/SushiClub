import Img1 from "../../assets/Home/Creations1.webp";
import Img2 from "../../assets/Home/Creations2.webp";
import Img3 from "../../assets/Home/Creations3.webp";
import { motion } from "framer-motion";

const Creation = () => {
  return (
    <>
      <section className="py-0 md:py-12">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            {/* Title Section */}
            <div className="text-center mb-10">
              <hr className="-z-10 border-2 border-slate-900 w-[1800px] absolute left-1/2 -translate-x-1/2 mt-7" />
              <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, delay: 0.6 }}
                className=" bg-white px-6 text-3xl md:text-5xl font-extrabold"
              >
                Our Sushi Creations
              </motion.h1>
            </div>
            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="flex justify-center items-center">
                <div className="space-y-4">
                  <motion.img
                    initial={{ opacity: 1, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, delay: 0.3 }}
                    src={Img1}
                    alt=""
                    className="md:w-[550px] md:h-[496px] w-[350px] h-[auto] m-auto rounded-md "
                  />
                  <motion.div
                    initial={{ opacity: 1, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, delay: 0.3 }}
                    className="md:hidden"
                  >
                    <h1 className="text-center text-xl md:text-2xl font-bold p-2">
                      Maki and Rolls
                    </h1>
                    <p className="text-center text-lg ">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consectetur, beatae. Libero obcaecati ullam facilis eos.
                    </p>
                  </motion.div>
                </div>
              </div>
              <div className="space-y-7">
                <div>
                  <div>
                    <motion.img
                      initial={{ opacity: 1, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        delay: 0.6,
                      }}
                      src={Img2}
                      alt=""
                      className="md:w-[800px] md:h-[235px] w-[350px] h-[auto] rounded-md m-auto"
                    />
                    <motion.div
                      initial={{ opacity: 1, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        delay: 0.6,
                      }}
                      className="md:hidden"
                    >
                      <h1 className="text-xl text-center mt-4 font-bold">
                        Specials
                      </h1>
                      <p className="text-lg text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Amet, temporibus laudantium deserunt illo illum
                        animi.
                      </p>
                    </motion.div>
                  </div>
                </div>
                <div>
                  <div>
                    <motion.img
                      initial={{ opacity: 1, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        delay: 0.9,
                      }}
                      src={Img3}
                      alt=""
                      className="md:w-[800px] md:h-[235px] w-[350px] h-[auto] rounded-md m-auto "
                    />
                    <motion.div
                      initial={{ opacity: 1, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        delay: 0.9,
                      }}
                      className="md:hidden"
                    >
                      <h1 className="text-xl  font-bold mt-4 text-center">
                        Sensation
                      </h1>
                      <p className="text-lg text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit quibusdam similique a excepturi assumenda
                        delectus.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 1, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, delay: 0.9 }}
                className="md:hidden flex items-center justify-center  "
              >
                <button className="flex justify-center items-center py-2 px-26 rounded-xl text-xl font-bold bg-yellow-300 hover:bg-yellow-200 cursor-pointer mt-4">
                  Order Now
                </button>
              </motion.div>

              <div className="grid grid-cols-1 gap-4 justify-between">
                <motion.div
                  initial={{ opacity: 1, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, delay: 0.3 }}
                  className="hidden md:block"
                >
                  <h1 className="text-xl md:text-2xl font-bold">Specials</h1>
                  <p className="text-lg md:text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Amet, temporibus laudantium deserunt illo illum animi.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 1, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, delay: 0.6 }}
                  className="hidden md:block"
                >
                  <h1 className="text-xl md:text-2xl font-bold">Sensation</h1>
                  <p className="text-lg md:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit quibusdam similique a excepturi assumenda delectus.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-4">
              <motion.div
                initial={{ opacity: 1, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, delay: 0.9 }}
                className="hidden md:block"
              >
                <h1 className="text-xl md:text-2xl font-bold p-2">
                  Maki and Rolls
                </h1>
                <p className="text-lg md:text-xl pl-2 pr-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur, beatae. Libero obcaecati ullam facilis eos.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, delay: 0.9 }}
                className="hidden md:block m-auto"
              >
                <button className="flex justify-center items-center  py-4 px-26 rounded-xl text-xl font-bold bg-yellow-300 hover:bg-yellow-200 cursor-pointer mt-4">
                  Order Now
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Creation;
