import { useNavigate } from "react-router-dom";

const Card = ({ props }) => {
  const navigate = useNavigate();

  const handleDataClick = (item) => {
    navigate(`/detailsproducts/${item.id}`, {
      state: { detailData: item },
    });
  };

  const products = [...props].reverse();

  return (
    <>
      <div className="bg-violet-50 w-full h-full flex flex-wrap justify-around pt-4 gap-2">
        {products?.map((data, index) => (
          <div
            key={index}
            className="relative flex h-90 w-full max-w-[11rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl"
          >
            <div className="relative mx-2 mt-2 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img className="h-52 w-full" src={data.image.img1} alt="img" />

              <button
                className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
                onClick={() => handleDataClick(data)}
              >
                <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform"></span>
              </button>
            </div>
            <div className="p-2">
              <div className="mb-3 h-10">
                <h5 className="block font-sans text-base font-medium leading-snug tracking-normal text-black antialiased">
                  {data.title}
                </h5>
              </div>
              <p className="flex text-green-500  text-xl items-center gap-1.5 font-sans font-bold leading-relaxed text-blue-gray-900 antialiased">
                <span className="text-zinc-800 font-semibold">Precio:</span>
                {data.price.toLocaleString("es-US")}{" "}
              </p>
            </div>
            <div className=" p-2 pt-0">
              <button
                className="block w-full select-none rounded-lg hover:bg-violet-500 bg-violet-800 py-2 px-7 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-violet-800/20 transition-all hover:shadow-lg hover:shadow-violet-800/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
                onClick={() => handleDataClick(data)}
              >
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
