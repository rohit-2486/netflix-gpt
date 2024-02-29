const VideoTittle = ({ original_title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-52 pl-12 absolute bg-gradient-to-r from-black text-white">
      <h1 className="text-5xl font-bold   ">{original_title}</h1>
      <p className="py-5 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black border border-black px-12 py-2 m-2 font-bold rounded-lg hover:bg-opacity-60">
          {" "}
          ▶️ play
        </button>
        <button className="bg-gray-400 text-white border border-black px-10 py-2 m-2 font-bold rounded-lg hover:bg-opacity-60">
          {" "}
          ℹ️ more info
        </button>
      </div>
    </div>
  );
};
export default VideoTittle;
