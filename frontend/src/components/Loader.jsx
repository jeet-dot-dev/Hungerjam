import { SyncLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SyncLoader color="#ffb701" size={15} />
    </div>
  );
};

export default Loader;
