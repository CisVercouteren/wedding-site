import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GalleryGrid = () => {
  const images = [
    { src: 'wedding-site/src/assets/pironne.avif', span: 'col-span-2' },
    { src: 'wedding-site/src/assets/7A54B0F5-01DB-40AD-A163-B2CBF0F8C472_1_105_c.jpeg', span: 'col-span-1' },
    { src: 'wedding-site/src/assets/pironne4.jpg', span: 'col-span-1 row-span-2'},
    { src: 'wedding-site/src/assets/pironne2.jpg', span: 'col-span-1' },
    { src: 'wedding-site/src/assets/pironne3.jpg', span: 'col-span-1 hidden lg:block' }, 
    { src: 'wedding-site/src/assets/pironne5.jpg', span: 'col-span-2' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true, // Optional: hide navigation arrows
    swipe: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
    <section id='sfeerbeelden' className="hidden md:block w-full overflow-hidden">
      <div className="xmax-w-7xl px-[10%] mx-auto h-full p-4 overflow-y-auto">
      <h2 className="text-6xl xl:text-7xl font-written mb-3 text-gray-700 text-center w-full py-24">
            Sfeerbeelden
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px] xl:auto-rows-[400px]">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`${image.span} relative overflow-hidden group`}
            >
              <img
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/*<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />*/}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id='sfeerbeelden' className="md:hidden flex justify-center items-center xh-screen flex-wrap mb-12">
      <h2 className="text-6xl xl:text-7xl font-written mb-3 text-gray-700 py-12 text-center">
              Sfeerbeelden
      </h2>
      <Slider {...settings} className="w-[80%] max-w-[100vw] h-[50vh]">
        {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Gallery ${index + 1}`}
              className="object-cover w-[90%] h-[50vh]"
            />
        ))}
      </Slider>
    </section>
    </>
  );
};

export default GalleryGrid;
