import React from "react";
import InputBar from "./components/InputBar";
import Headline from "./components/Headline";

const appStyle = {
  textAlign: "center" as "center",
  margin: "auto",
  padding: "230px 0",
  width: "100%",
  height: "auto",
  backgroundColor: "transparent"
};

const App: React.FC = () => {
  return (
    <div style={appStyle}>
      <Headline />
      <InputBar />
    </div>
  );
};

export default App;
