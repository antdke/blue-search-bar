import React from "react";
import InputBar from "./components/InputBar";
import Headline from "./components/Headline";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Headline />
      <InputBar />
    </div>
  );
};

export default App;
