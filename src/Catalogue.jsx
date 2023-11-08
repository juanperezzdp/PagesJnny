import React from "react";
import { navidad } from "./ArrayProducts/Navidad";
import { FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Catalogue = () => {
  const navigate = useNavigate();

  // Cambia el nombre del parámetro para evitar conflicto con el arreglo 'navidad'
  const handleDataClick = (item) => {
    navigate(`/detailsproducts/${item.id}`, {
      state: { detailData: item },
    });
  };

  return (
    <>
      <div className="bg-violet-100 w-full h-full p-4 flex flex-wrap justify-around gap-2">
        {navidad.map((data, index) => (
          <div
            key={index}
            className="relative flex w-full max-w-[10rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
          >
            <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img src={data.image} alt="ui/ux review check" />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
              <button
                className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
                onClick={() => handleDataClick(data)} // Pasa 'data' como argumento
              >
                <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                  <FcLike className="text-2xl" />
                </span>
              </button>
            </div>
            <div className="p-2">
              <div className="mb-3 flex items-center justify-between">
                <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {data.title}
                </h5>
                <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased"></p>
              </div>
            </div>
            <div className="p-2 pt-3">
              <button
                className="block w-full select-none rounded-lg hover:bg-violet-500 bg-violet-800 py-3.5 px-7 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-violet-800/20 transition-all hover:shadow-lg hover:shadow-violet-800/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
                onClick={() => handleDataClick(data)} // Pasa 'data' como argumento
              >
                Ver detalles y reservar
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Catalogue;
