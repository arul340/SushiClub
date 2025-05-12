const aboutUs = [
  {
    id: 1,
    name: "About Us",
    link: "/about-us",
  },
  {
    id: 2,
    name: "History",
    link: "/history",
  },
  {
    id: 3,
    name: "Reservation",
    link: "/reservation",
  },
  {
    id: 4,
    name: "Contact",
    link: "/conatct",
  },
];

const Others = [
  {
    id: 1,
    name: "Costumer Service",
    link: "/costumer-service",
  },
  {
    id: 2,
    name: "FAQ",
    link: "/faq",
  },
  {
    id: 3,
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    id: 4,
    name: "Terms and Conditions",
    link: "/terms-and-conditions",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-[#b3f5c6] pt-14">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 spaye-y-4 gap-4 justify-center">
            <div className="space-y-2">
              <h1 className="text-xl md:text-2xl font-black  mb-4 ">
                About Us
              </h1>
              {aboutUs.map((item) => (
                <div key={item.id}>
                  <ul className="text-lg md:text-xl  font-semibold">
                    <li className="transition hover:scale-105 duration-300">
                      <a href={item.link}>{item.name}</a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h1 className="text-xl md:text-2xl font-black mb-4">Others</h1>
              {Others.map((item) => (
                <div key={item.id}>
                  <ul className="text-lg md:text-xl font-semibold">
                    <li className="transition hover:scale-105 duration-300">
                      <a href={item.link}>{item.name}</a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <h1 className="text-xl md:text-2xl font-black mb-4">
                  Get In Touch
                </h1>
                <p className="text-lg md:text-xl font-semibold">
                  Address: 123 Main St, Anytown, USA
                </p>
                <p className="text-lg md:text-xl font-semibold">
                  <span className="text-lg md:text-xl font-semibold">
                    Phone:
                  </span>{" "}
                  (123) 456-7890
                </p>
                <form action="" className="mt-4">
                  <div className="text-lg md:text-xl mb-2">
                    <label htmlFor="subscribe">Get Updates</label>
                  </div>
                  <div>
                    <input
                      type="mail"
                      className=" p-2 ring-black ring-2 rounded-md w-full"
                      placeholder="Input Your Email"
                    />
                  </div>
                  <div>
                    <button className="flex justify-center items-center py-2 px-6 rounded-xl text-xl font-bold bg-yellow-300 hover:bg-yellow-200 cursor-pointer mt-4">
                      Subscrice
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <hr className="border-1 border-slate-900 mt-8" />
            <div className="flex items-center justify-center">
              <p className="text-sm md:text-xl pb-2 text-center">
                Copyright © 2025 Sushi Restaurant || All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
