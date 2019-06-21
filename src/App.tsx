import React from "react";
import InputBar from "./components/InputBar";
import Headline from "./components/Headline";

const appStyle = {
  textAlign: "center" as "center",
  margin: "auto",
  display: "block",
  padding: "275px 0"
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
