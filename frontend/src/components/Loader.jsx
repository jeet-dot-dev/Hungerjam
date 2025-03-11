import { Player } from "@lottiefiles/react-lottie-player";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Player
        autoplay
        loop
        src="/pizza-loader.json" // Replace with your file path
        style={{ height: '150px', width: '150px' }}
      />
    </div>
  );
};

export default Loader ;