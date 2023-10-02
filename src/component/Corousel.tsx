const Corousel = () => {
  return (
    <div>
      <div className="carousel w-full mt-[68px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://inagira.vercel.app/static/media/coconut-fiber-1.62e3de0d7c338f1834b8.jpg"
            className="w-full h-96"
          />
          <div className="absolute transform -translate-y-1/2 top-1/2 bg-slate-800 bg-opacity-50 w-full h-full ">
            <div className="mt-36 flex justify-between">
              <a href="#slide3" className="text-[3rem] text-white ml-4 ">
                ❮
              </a>
              <a className="text-center text-white">
                <p className="text-3xl font-bold ">Coconut Fiber</p>
                <p className="text-bas font-normal font-serif">
                  Coconut fiber, obtained from unripe coconut, is a natural
                  fiber extraced from the husk of coconut
                </p>
                <button className="btn bg-blue-800 border-none text-white hover:bg-blue-900 mr-3">
                  Read More
                </button>
                <button className="btn btn-neutral-conten border-none text-black hover:bg-primary-conten mr-3">
                  Catalog
                </button>
              </a>
              <a href="#slide2" className="text-[3rem] text-white mr-4 ">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://inagira.vercel.app/static/media/halaban.f99650aa1baf53ebff53.jpeg"
            className="w-full h-96"
          />
          <div className="absolute transform -translate-y-1/2 top-1/2 bg-slate-800 bg-opacity-50 w-full h-full ">
            <div className="mt-36 flex justify-between">
              <a href="#slide1" className="text-[3rem] text-white ml-4 ">
                ❮
              </a>
              <a className="text-center text-white">
                <p className="text-3xl font-bold ">Coconut Fiber</p>
                <p className="text-bas font-normal font-serif mb-2 mt-2">
                  Coconut fiber, obtained from unripe coconut, is a natural
                  fiber extraced from the husk of coconut
                </p>
                <button className="btn bg-blue-800 border-none text-white hover:bg-blue-900 mr-3 mt-3">
                  Read More
                </button>
                <button className="btn btn-neutral-conten border-none text-black hover:bg-primary-conten mr-3 ">
                  Catalog
                </button>
              </a>
              <a href="#slide3" className="text-[3rem] text-white mr-4 ">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://inagira.vercel.app/static/media/briquettes-1.57c80d98094c907531a6.webp"
            className="w-full h-96"
          />
          <div className="absolute transform -translate-y-1/2 top-1/2 bg-slate-800 bg-opacity-50 w-full h-full ">
            <div className="mt-36 flex justify-between">
              <a href="#slide2" className="text-[3rem] text-white ml-4 ">
                ❮
              </a>
              <a className="text-center text-white">
                <p className="text-3xl font-bold ">Coconut Fiber</p>
                <p className="text-bas font-normal font-serif">
                  Coconut fiber, obtained from unripe coconut, is a natural
                  fiber extraced from the husk of coconut
                </p>
                <button className="btn bg-blue-800 border-none text-white hover:bg-blue-900 mr-3">
                  Read More
                </button>
                <button className="btn btn-neutral-conten border-none text-black hover:bg-primary-conten mr-3">
                  Catalog
                </button>
              </a>
              <a href="#slide1" className="text-[3rem] text-white mr-4 ">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corousel;
