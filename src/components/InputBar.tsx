import React, { Props } from "react";

const styles = {
  width: "100%"
};

const InputBar = () => {
  return (
    <div>
      <input type="text" style={styles} placeholder="Type Anything..." />
    </div>
  );
};

export default InputBar;
