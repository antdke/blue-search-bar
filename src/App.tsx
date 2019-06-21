import React from "react";
import InputBar from "./components/InputBar";
import Headline from "./components/Headline";

const appStyle = {
  textAlign: "center" as "center",
  margin: "auto",
  display: "block",
  padding: "230px 0",
  width: "90%"
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
