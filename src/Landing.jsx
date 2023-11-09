import { Link, useNavigate } from "react-router-dom";
import Logo from "./img/logo.jpeg";
import Background from "./img/rosayblanco.png";
import { BiPhotoAlbum } from "react-icons/bi";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center">
      <img
        className="absolute -z-10 w-full h-full"
        src={Background}
        alt="Background"
      />
      <div className="w-full flex flex-col items-center pt-8 ">
        <div className="border-2 border-violet-800 rounded-full">
          <img className="w-32 rounded-full" src={Logo} alt="logo" />
        </div>
        <h1 className="text-4xl font-bold">Babifel</h1>
        <div className="flex flex-col m-2">
          <p className="text-sm font-bold">
            Accesorios personalizados para los chiquis de la casa.
          </p>
          <p className="text-sm font-bold">✂️Somos fabricantes.</p>
          <p className="text-sm font-bold">🛵Contraentrega a nivel nacional</p>
          <p className="text-sm font-bold">😁Gracias por preferirnos..!</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 mt-8">
        <button
          onClick={() => {
            navigate("/catalogue");
          }}
          className="w-80 h-8 flex justify-center items-center  hover:bg-violet-500 bg-violet-800 rounded-3xl text-white"
        >
          <div className="flex items-center">
            <BiPhotoAlbum className="mr-2 text-2xl" />
            <p>Catalogo</p>
          </div>
        </button>

        <Link
          className="w-80 h-8 flex items-center justify-center hover:bg-violet-500 bg-violet-800 rounded-3xl text-white"
          target="_blank"
          to="http://api.whatsapp.com/send?phone=573222935748"
        >
          <div className="flex items-center">
            <BsWhatsapp className="mr-2 text-xl" />
            <p>Whatsapp</p>
          </div>
        </Link>

        <Link
          className="w-80 h-8 flex items-center justify-center hover:bg-violet-500 bg-violet-800 rounded-3xl text-white"
          target="_blank"
          to="https://www.instagram.com/babifel_co/?hl=es"
        >
          <div className="flex items-center">
            <BsInstagram className="mr-2 text-xl" />
            <p>Instagram</p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Landing;
