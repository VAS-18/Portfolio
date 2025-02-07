import Image from "next/image";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-100 backdrop-blur-sm z-50">
        <Image
        src="/loading.gif"
        alt="void"
        width={300}
        height={300}
        unoptimized={true}
        className="w-28 h-28 object-fill"
        priority
        />
    </div>
  );
};

export default LoadingSpinner;