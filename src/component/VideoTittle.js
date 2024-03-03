const VideoTittle = ({ original_title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[15%] md:pt-[10%]  md:px-24 absolute bg-gradient-to-r from-black text-white ">
      <h1 className="text-2xl md:text-5xl font-bold md:px-0 px-6  ">{original_title}</h1>
      <p className=" hidden md:inline-block py-5 text-lg w-1/4">{overview}</p>
      <div className="md:my-0 my-2">
        <button className="bg-white text-black border border-black  px-2 py-1 md:px-12 md:py-2 mx-7 md:m-2 font-bold rounded-lg hover:bg-opacity-60">
          {" "}
          ▶️ play
        </button>
        <button className=" hidden md:inline-block bg-gray-400 text-white border border-black px-10 py-2 m-2 font-bold rounded-lg hover:bg-opacity-60">
          {" "}
          ℹ️ more info
        </button>
      </div>
    </div>
  );
};
export default VideoTittle;
