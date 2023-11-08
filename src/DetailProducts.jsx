import React from "react";
import { useLocation } from "react-router-dom";

const DetailProducts = () => {
  const location = useLocation();
  const detailData = location.state && location.state.detailData;

  // Función para abrir la URL de WhatsApp al hacer clic en el botón
  const handleReserveClick = () => {
    if (detailData) {
      // Construir el mensaje con los detalles del producto
      const message = `Título: ${encodeURIComponent(
        detailData.title
      )}%0ADescripción: ${encodeURIComponent(detailData.description)}`;

      // Construir la URL de WhatsApp
      const whatsappUrl = `http://api.whatsapp.com/send?phone=573222935748&text=${message}`;

      // Redirigir al usuario a la URL de WhatsApp
      window.location.href = whatsappUrl;
    }
  };

  return (
    <div>
      {detailData ? (
        <div>
          <img className="w-80" src={detailData.image} alt="Products" />
          <h2>{detailData.title}</h2>
          <p>Descripción:</p>
          <p>{detailData.description}</p>
          <button
            className="block w-full select-none rounded-lg hover:bg-violet-500 bg-violet-800 py-3.5 px-7 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-violet-800/20 transition-all hover:shadow-lg hover:shadow-violet-800/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={handleReserveClick}
          >
            Reserver
          </button>
        </div>
      ) : (
        <p>No se encontraron detalles para este producto.</p>
      )}
    </div>
  );
};

export default DetailProducts;
