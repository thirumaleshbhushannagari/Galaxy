import "./Header.css";
import headerimg from "../../Assets/earhpic.png.jpg";
const Header = ({ heading }) => {
  return (
    <section
      className="header"
      style={{
        backgroundImage: `url(${headerimg})`,
        backgroundPosition: "fixed",
        backgroundSize: "cover",
      }}
    >
      <h1>{heading}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
        animi!
      </p>
    </section>
  );
};

export default Header;
