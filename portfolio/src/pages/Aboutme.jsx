import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Aboutme = () => {
  const [image] = useState("/sarthakcv.pdf");
  const navigate = useNavigate();

  // 🔊 control audio via scroll
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsMuted(window.scrollY > 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO SECTION */}
      <div className="relative">
        <video
          src="/3idiots.mp4"
          autoPlay
          loop
          playsInline
          muted={isMuted}
          className="w-full h-[50vh] md:h-[80vh] object-cover"
        />

        <div className="absolute inset-0 flex items-center px-2 md:px-12">
          <div className="max-w-xl text-white mt-58 md:mt-100">
            <h1 className="text-sm md:text-4xl font-bold md:mb-4">
              Sarthak Srivastava – Developer
            </h1>

            <p className="text-sm md:text-base leading-relaxed">
              Early in my career but fully committed to mastering the craft.
              I love designing and developing interfaces that feel natural,
              fast, and enjoyable. Always exploring, always building, always
              growing. Skilled with JavaScript, HTML, CSS, React, and C++.
            </p>

            <div className="flex gap-4 mt-2 md:mt-6">
              <a href={image} download>
                <button className="flex items-center gap-1 px-3 py-2 md:px-4 md:py-2 bg-white text-black text-sm md:text-xl font-semibold rounded-xl">
                  <img src="/playtransparent.png" className="w-6" />
                  Resume
                </button>
              </a>

              <a href="https://www.linkedin.com/in/sarthakzcode/">
                <button className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white text-blue-600 font-semibold rounded-xl">
                  <img src="/linkedlogo.avif" className="w-6" />
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CORE SKILLS */}
      <section className="mt-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Core Skills
        </h2>

        <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden">
          {[
            { img: "/Reactbg.webp", label: "React" },
            { img: "/javascriptbg.jpg", label: "JavaScript" },
            { img: "/tailwindbg.avif", label: "Tailwind" },
            { img: "/cplus.jpg", label: "C++" },
            { img: "/Htmlbg.jpg", label: "HTML" },
            { img: "/githubbg.jpg", label: "GitHub" },
          ].map((skill, i) => (
            <div
              key={i}
              className="relative flex shrink-0 w-50 md:w-90 h-32 md:h-48 rounded-xl overflow-hidden shadow-xl snap-start"
            >
              <img
                src={skill.img}
                className="w-full h-full object-cover opacity-60"
                alt={skill.label}
              />
              <h3 className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                {skill.label}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* BEYOND CODE */}
      <div>
        <h1 className="text-3xl ml-6 mt-10 font-bold">
          Beyond Code
        </h1>

        <div className="mt-5 mb-2 px-6 flex flex-col md:flex-row gap-6">
          <a
            href="https://www.instagram.com/utog_omm"
            className="relative w-full md:w-auto"
          >
            <img
              src="/bgmi.webp"
              alt="Hobby"
              className="w-full md:w-90 rounded-xl opacity-50 shadow-2xl hover:shadow-red-500"
            />
            <h1 className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-bold text-white">
              Hobby
            </h1>
          </a>

          <div
            onClick={() => navigate("/Contact")}
            className="relative w-full md:w-auto cursor-pointer"
          >
            <img
              src="/contactme.jpg"
              alt="Contact Me"
              className="w-full md:w-80 rounded-xl opacity-45 shadow-2xl hover:shadow-red-500"
            />
            <h1 className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-bold text-white">
              Contact Me
            </h1>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Aboutme;
