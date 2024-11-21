// import content
import { useEffect } from "react";
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden bg-[#7373731A]">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">

        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinearNew bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute md:top-[45%] top-[25%] md:right-[-40%] right-[-50%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>


        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <div
            className="companyName p-6 w-[60%] mx-auto text-white bg-primaryLinearNew rounded-md shadow-md"
            style={{
              zIndex: 10,
              marginBlock: '1rem',
            }}
          >
            <h3 className="text-xl font-extrabold">NextDot</h3>
            <small className="text-lg italic font-medium" style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)" }}>
              "Your Next Step in Digital Evolution."
            </small>
          </div>
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn">{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:h-[37rem] h-64 opacity-[0.9]">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
