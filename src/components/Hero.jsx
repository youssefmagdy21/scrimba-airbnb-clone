import HeroPic from "../assets/hero-pic.png";

function Hero() {
  return (
    <section className="my-7 w-full px-9">
      <img src={HeroPic} alt="" className=" mx-auto" />
      <div className=" mt-8 flex flex-col items-start justify-start gap-4">
        <h1 className=" text-4xl font-semibold">Online Experiences</h1>
        <p className=" font-light text-base max-w-xs text-contentPrimary">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

export default Hero;
