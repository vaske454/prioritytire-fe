import Image from "next/image";

const HeroBanner = () => {
  return (
    <div
      className="relative"
      data-content-type="row"
      data-appearance="full-bleed"
      data-enable-parallax="0"
      data-parallax-speed="0.5"
      data-background-images="{}"
      data-background-type="image"
      data-video-loop="true"
      data-video-play-only-visible="true"
      data-video-lazy-load="true"
      data-video-fallback-src=""
      data-element="main"
      data-pb-style="RIHP1YA"
    >
      <figure
        data-content-type="image"
        data-appearance="full-width"
        data-element="main"
        data-pb-style="SRPTEF9"
      >
        <Image
          width={1381}
          height={345.25}
          className="hidden md:block w-full h-auto"
          src="/Priority_Tire_Online_Tire_Deals_Sale_50.jpg"
          alt="Priority Tire Online Tire Deals Sale"
          title="Priority Tire Online Tire Deals Sale"
          data-element="desktop_image"
          data-pb-style="SHERBUI"
        />
        <Image
          width={1381}
          height={345.25}
          className="block md:hidden w-full h-auto"
          src="/Priority_Tire_Online_Tire_Deals_Sale_50.jpg"
          alt="Priority Tire Online Tire Deals Sale"
          title="Priority Tire Online Tire Deals Sale"
          data-element="mobile_image"
          data-pb-style="KA7QVCI"
        />
      </figure>
      <div
        className="absolute left-1/2 max-w-[650px] top-1/2-31 transform -translate-x-1/2 -translate-y-[218%] w-full md:top-1/2-42"
        data-background-images="{}"
        data-content-type="column-group"
        data-appearance="default"
        data-grid-size="12"
        data-element="main"
        data-pb-style="E14SMIR"
        >
        <div
          className="pagebuilder-column-line flex w-[100%]"
          data-content-type="column-line"
          data-element="main"
          data-pb-style="HFJ179V"
        >
          <div
            className="w-full self-stretch flex flex-col justify-start bg-cover bg-no-repeat bg-scroll"
            style={{ backgroundPosition: 'left top' }}
            data-content-type="column"
            data-appearance="full-height"
            data-background-images="{}"
            data-element="main"
            data-pb-style="X9OAR3A"
          >
            <div
              className="pagebuilder-poster-content text-white"
              data-content-type="text"
              data-appearance="default"
              data-element="main"
            >
              <h1 className="text-center pb-[100px] text-[42px] mt-0">
                <strong>New Tires For Sale Online</strong>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
