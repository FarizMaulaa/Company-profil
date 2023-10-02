const Map = (props: any) => {
  const { imgproduct, deskripsi, title } = props;
  return (
    <>
      <div className=" w-[22rem]">
        <div className="flex justify-center items-center">
          <div
            className={`relative bg-cover bg-center w-[350px] h-[225px] ${imgproduct} overflow-auto touch-pan-y rounded-lg  `}
          >
            <div className="absolute inset-x-0 bottom-0 h-16">
              <div className=" bg-slate-700 bg-opacity-50 ">
                <p className="text-white p-[18px] text-center font-bold text-xl">
                  {title}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block text-center">
          <p className="p-2">{deskripsi}</p>
          <button className="btn bg-blue-800 border-none text-white hover:bg-blue-900 mb-3">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};
const Product = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-800 text-center mt-5">
        OUR PRODUCT
      </h1>

      <div className="flex items-center justify-center  ">
        <div className="block sm:grid sm:grid-cols-3 sm:gap-4">
          <div className="m-2">
            <Map
              imgproduct="bg-[url(https://inagira.vercel.app/static/media/briquettes-1.57c80d98094c907531a6.webp)]"
              title=" Charcoal Briquette"
              deskripsi="A briquette is a compressed block of coal dust or other combustible biomass material such as charcoal, sawdust, wood chips, peat, or paper use..."
            ></Map>
          </div>
          <div className="m-2">
            <Map
              imgproduct="bg-[url(https://inagira.vercel.app/static/media/halaban.f99650aa1baf53ebff53.jpeg)]"
              title=" Halaban Charcoal"
              deskripsi="Halaban Charcoal comes from unique Indonesian Woods, which is Halaban Woods. This type of charcoal is very versatile, you can use Halaban Ch..."
            ></Map>
          </div>
          <div className="m-2">
            <Map
              imgproduct="bg-[url(https://inagira.vercel.app/static/media/coconut-fiber-1.62e3de0d7c338f1834b8.jpg)]"
              title=" Lump Wood Charcoal"
              deskripsi="Lump charcoal is made by slowly burning pieces of wood in the absence of oxygen until all the natural chemicals, sap and moisture get out.."
            ></Map>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
