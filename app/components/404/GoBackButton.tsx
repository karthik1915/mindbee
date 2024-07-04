"use client";

const GoBackButton = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={handleGoBack}
      className="my-4 rounded-lg bg-primary px-4 py-2 text-white"
    >
      Go Back
    </button>
  );
};

export default GoBackButton;
