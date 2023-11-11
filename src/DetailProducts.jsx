import React from "react";
import { useLocation } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";

const DetailProducts = () => {
  const location = useLocation();
  const detailData = location.state && location.state.detailData;

  console.log(detailData);
  const handleReserveClick = () => {
    if (detailData) {
      const message = `Hola👋🏻 un gusto en saludarte, estoy interesada en saber más sobre este producto:Título: ${encodeURIComponent(
        detailData.title
      )}
      %0ARef: ${encodeURIComponent(detailData.ref)}
      %0ADescripción: ${encodeURIComponent(detailData.description)}
      %0APrecio: ${encodeURIComponent(detailData.price)}`;

      const imageUrl = `https://jazzy-heliotrope-5a99dd.netlify.app${detailData.image.img1}`;

      const whatsappUrl = `http://api.whatsapp.com/send?phone=573222935748&text=${message}%0A${imageUrl}`;

      window.location.href = whatsappUrl;
    }
  };

  return (
    <>
      <section className="flec flex-col items-center ">
        {detailData ? (
          <div className="p-4 flex flex-col items-center justify-center gap-4">
            <img
              className="w-96 rounded-2xl"
              src={detailData.image.img1}
              alt="Products"
            />
            <h2 className="font-bold text-2xl">{detailData.title}</h2>
            <div>
              <p className="text-xl mb-2">
                <span className="font-bold">Ref: </span>
                {detailData.ref}
              </p>
              <p className="text-xl mb-2">
                <span className="font-bold text-xl">Descripción: </span>
                {detailData.description}
              </p>
              <p className="text-xl mb-2">
                <span className="font-bold text-xl">Tallas: </span>
                {detailData.sizes}
              </p>
              <p className="text-5xl">
                $
                <span className=" text-green-600 font-bold">
                  {detailData.price.toLocaleString("es-US")}
                </span>
              </p>
            </div>

            <button
              className=" flex items-center justify-center  mt-4 w-full select-none rounded-lg hover:bg-violet-500 bg-violet-800 py-3.5 px-7 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-violet-800/20 transition-all hover:shadow-lg hover:shadow-violet-800/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={handleReserveClick}
            >
              Reserver por Whatsapp
              <BsWhatsapp className="mr-2 text-xl ml-2" />
            </button>
          </div>
        ) : (
          <p>No se encontraron detalles para este producto.</p>
        )}
      </section>
    </>
  );
};

export default DetailProducts;
