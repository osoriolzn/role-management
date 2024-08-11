import Navbar from "../../components/navbar";
import "./home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="fig-container">
        <figure className="image-wrapper">
          <img
            className="home-image"
            src="src/assets/img/home.webp"
            alt="Imagen de fondo del home"
          />
        </figure>
      </div>
    </>
  );
}

export default Home;
