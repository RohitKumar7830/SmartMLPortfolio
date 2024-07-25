import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div
        className="bg-black shadow-md rounded-lg px-8 py-[50px] max-w-sm w-full"
        style={{
          boxShadow: "0 0 200px -70px var(--accent-a1)",
          "--accent-a1": "#3183ff",
        }}
      >
        <div className="flex justify-center mb-4">
          <img src="/404.png" alt="Sad Emoji" className="w-20 h-20" />
        </div>

        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center text-white">
          Page Not Found
        </h1>
        <p className="text-[#616d7e] mb-6 text-center">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleBackToHome}
            className="bg-[#2196F3] bg-gradient-to-r from-[#2196F3] to-[#0D3269] text-white text-xl py-3 px-6 rounded-xl shadow-lg duration-300 transform transition-transform hover:bg-[#0751BF] hover:scale-95"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;