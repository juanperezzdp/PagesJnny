import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const DetailProducts = () => {
  const location = useLocation();
  const detailData = location.state && location.state.detailData;

  const handleReserveClick = () => {
    if (detailData) {
      const message = `Hola👋🏻 un gusto en saludarte, estoy interesada en saber más sobre este producto:Título: ${encodeURIComponent(
        detailData.title
      )}
      %0ARef: ${encodeURIComponent(detailData.ref)}
      %0ADescripción: ${encodeURIComponent(detailData.description)}
      %0APrecio: ${encodeURIComponent(detailData.price)}`;

      const imageUrl = `https://darling-melomakarona-61505e.netlify.app${detailData.image.img1}`;

      const whatsappUrl = `http://api.whatsapp.com/send?phone=573222935748&text=${message}%0A${imageUrl}`;

      window.location.href = whatsappUrl;
    }
  };

  const [currentIndex, setCurrentIndex] = useState(1);
  const images = [detailData.image.img1, detailData.image.img2];

  const previous = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const forward = () => {
    if (currentIndex < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <main className="grid  mb-4 w-full ">
        <div className="relative mx-auto max-w-5xl ">
          <div className="absolute right-5 top-5 z-10 rounded-3xl bg-gray-600 px-2 text-center text-sm text-white">
            <span>{currentIndex}</span>/<span>{images.length}</span>
          </div>

          <button
            onClick={previous}
            className="bg-white rounded-full  absolute left-1 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center"
          >
            <IoIosArrowDropleft className="rounded-full text-3xl hover:text-violet-500 text-violet-800" />
          </button>

          <button
            onClick={forward}
            className="bg-white absolute right-1 top-1/2 z-10 flex  -translate-y-1/2 items-center justify-center rounded-full"
          >
            <IoIosArrowDropright className="rounded-full text-3xl hover:text-violet-500 text-violet-800" />
          </button>

          <div
            className="relative overflow-hidden rounded-xl h-96 flex justify-center items-center"
            style={{ width: "21rem" }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  display:
                    images.length === 1 || currentIndex === index + 1
                      ? "block"
                      : "none",
                }}
                className="absolute top-4 rounded-xl"
              >
                <img src={image} alt="" className="rounded-xl w-96 h-96" />
              </div>
            ))}
          </div>
        </div>
      </main>

      <section className="flec flex-col items-center ">
        {detailData ? (
          <div className="p-4 flex flex-col items-center justify-center gap-4">
            <h2 className="font-bold text-2xl ">{detailData.title}</h2>
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
              target="_blank"
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
