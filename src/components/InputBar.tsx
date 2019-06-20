import React from "react";

const styles = {
  wrapper: {
    paddingLeft: 200,
    paddingRight: 200
  },
  inputBar: {
    width: "100%",
    height: "56px",
    position: "relative" as "relative",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: 400,
    border: "none",
    backgroundColor: "#D9F7FA",
    lineHeight: "normal"
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
