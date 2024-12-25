import React from "react";

const ColumnResizeHandler = (size: number) => {
  return <div
    style={{
      width: size || 20,
      backgroundColor: "#3c3c3c",
      height: "calc(100vh)",
      color: "white",
      textWrap: "wrap",
      wordBreak: "break-all",
      display: "flex",
      position: "fixed",
      translate: `${5}px`,
      justifyContent: "center",
      alignItems: "center",

    }}>
    <div style={{width: 4, height: 70, backgroundColor: "#cecece", borderRadius: 7}}></div>
  </div>
}

export default ColumnResizeHandler