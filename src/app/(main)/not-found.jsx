import NotFound from "@/components/errors/not-found";
import React from "react";

const MainNotFoundPage = () => {
  return (
    <div
      style={{
        background: "url(/images/background/LooperBG.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "rgba(204, 204, 204, 0.623)",
        padding: "0",
        overflow: "hidden",
        width: "auto",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #F5DF21",
      }}
    >
      <NotFound />
    </div>
  );
};

export default MainNotFoundPage;
