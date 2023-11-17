import styles from "../../css/microsoft_loading.module.css";

const LoadingAnimation = () => {
  return (
    <>
      <div className="absolute top-0 left-0 right-0  md:bg-gradient-to-br from-[#e7d0c0] via-green-100 to-[#f7eedf] h-screen z-40 transition-all"></div>

      <div className="absolute top-0 left-0 right-0 flex justify-center items-center h-screen z-50">
        <div className="flex space-x-2">
          <div
            className={`w-2 h-2 bg-blue-500 rounded-full ${styles.animate_bounce1}`}
          ></div>
          <div
            className={`w-2 h-2 bg-blue-500 rounded-full ${styles.animate_bounce2}`}
          ></div>
          <div
            className={`w-2 h-2 bg-blue-500 rounded-full ${styles.animate_bounce3}`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default LoadingAnimation;
