import { Link, useNavigate } from "react-router-dom";
import Logo from "./img/logo.jpeg";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { TbChristmasTree } from "react-icons/tb";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="flex flex-col items-center w-full h-full ">
        <div className="w-[21rem]">
          <div className="w-full flex flex-col items-center pt-8 ">
            <div className="w-40 border-4 border-violet-400 rounded-full">
              <img className="w-max rounded-full" src={Logo} alt="logo" />
            </div>
            <h1 className="text-5xl font-bold dancing mb-4">Babifel</h1>
            <div className="flex flex-col m-2">
              <p className="text-base mb-4 font-semibold">
                Accesorios personalizados para los chiquis de la casa.
              </p>
              <p className="text-base font-semibold">✂️Somos fabricantes.</p>
              <p className="text-base font-semibold">
                🛵Contraentrega a nivel nacional
              </p>
              <p className="text-base font-semibold">
                😁Gracias por preferirnos..!
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 mt-8">
            <button
              onClick={() => {
                navigate("/catalogue");
              }}
              className="w-full h-8 flex justify-center items-center  hover:bg-violet-500 bg-violet-800 rounded-3xl text-white"
            >
              <div className="flex items-center w-44">
                <TbChristmasTree className="mr-4 text-2xl" />
                <p>Catalogo Navidad</p>
              </div>
            </button>

            <Link
              className="w-full h-8 flex items-center justify-center hover:bg-violet-500 bg-violet-800 rounded-3xl text-white"
              target="_blank"
              to="http://api.whatsapp.com/send?phone=573222935748"
            >
              <div className="flex items-center w-44">
                <BsWhatsapp className="mr-4 text-xl" />
                <p>Whatsapp</p>
              </div>
            </Link>

            <Link
              className="w-full h-8 flex items-center justify-center hover:bg-violet-500 bg-violet-800 rounded-3xl text-white"
              target="_blank"
              to="https://www.instagram.com/babifel_co/?hl=es"
            >
              <div className="flex items-center w-44">
                <BsInstagram className="mr-4 text-xl" />
                <p>Instagram</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Landing;
