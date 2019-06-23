// This component holds Headline and InputBar
import React from "react";
import InputBar from "./InputBar";
import Headline from "./Headline";

const containerStyle = {
  textAlign: "center" as "center",
  margin: "auto",
  padding: "230px 0",
  width: "100%",
  height: "auto"
  //backgroundColor: "transparent"
};

const Container = () => {
  return (
    <div style={containerStyle}>
      <Headline />
      <InputBar />
    </div>
  );
};

export default Container;
