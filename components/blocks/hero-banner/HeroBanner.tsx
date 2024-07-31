import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative">
      <figure className="relative w-full h-auto">
        <Image
          width={1381}
          height={480}
          className="w-full h-full object-cover min-h-[480px]"
          src="/Priority_Tire_Online_Tire_Deals_Sale_50.jpg"
          alt="Priority Tire Online Tire Deals Sale"
          title="Priority Tire Online Tire Deals Sale"
        />
      </figure>
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h1
          className="text-white text-[26px] sm:text-[34px] md:text-[40px] lg:text-[46px] xl:text-[52px] font-bold text-center"
          style={{ marginTop: "clamp(-170px, -10vw, -150px)" }}
        >
          New Tires For Sale Online
        </h1>
      </div>
    </div>
  );
};

export default HeroBanner;
