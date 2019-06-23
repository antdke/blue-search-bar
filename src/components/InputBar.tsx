import React from "react";

const styles = {
  wrapper: {
    paddingTop: "10px"
  },
  inputBar: {
    width: "60%",
    height: "56px",
    position: "relative" as "relative",
    borderRadius: "4px",
    fontSize: "16px",
    outline: "none",
    border: "none",
    backgroundColor: "#1387fa",
    paddingLeft: "15px"
    //boxShadow: "0px 3px 5px 0px #d9d9d9"
  }
};

const InputBar = () => {
  return (
    <div style={styles.wrapper}>
      <input
        type="text"
        style={styles.inputBar}
        placeholder="Type Anything..."
      />
    </div>
  );
};

export default InputBar;
