import Image from "next/image";
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <figure className="hero-banner-image">
        <Image
          width={1381}
          height={480}
          className="hero-banner-image-img"
          src="/Priority_Tire_Online_Tire_Deals_Sale_50.jpg"
          alt="Priority Tire Online Tire Deals Sale"
          title="Priority Tire Online Tire Deals Sale"
        />
      </figure>
      <div className="hero-banner-text">
        <h1 className="hero-banner-title">
          New Tires For Sale Online
        </h1>
      </div>
    </div>
  );
};

export default HeroBanner;
