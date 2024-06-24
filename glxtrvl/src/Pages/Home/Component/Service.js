import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../../Assets/image2.png";
import img2 from "../../../Assets/image3.png";
import img3 from "../../../Assets/image4.png";
import img4 from "../../../Assets/image5.png";
import img5 from "../../../Assets/image2.png";

const Service = () => {
  const image = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="heading">Services</h1>
      <section className="services">
        <Slider {...settings}>
          {image.map((image) => {
            return <img src={image} alt="" />;
          })}
          {/* <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div> */}
        </Slider>
      </section>
    </>
  );
};

export default Service;
