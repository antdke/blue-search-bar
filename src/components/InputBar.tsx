import React, { useState, FormEvent } from "react";

// styling
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
    color: "white",
    backgroundColor: "#1387fa",
    paddingLeft: "15px"
    //boxShadow: "0px 3px 5px 0px #d9d9d9"
  }
};

const InputBar = () => {
  const [searchValue, setValue] = useState("");

  function openWeb(searchValue: any) {
    //window.open("https://www.google.com");
  }

  // TODO: Find a way to insert a variable into url
  function handleClick(event: any) {
    window.open("https://www.google.com/images");
  }

  return (
    <div style={styles.wrapper}>
      <form>
        <input
          type="text"
          style={styles.inputBar}
          placeholder="Type Anything..."
          onChange={event => setValue(event.target.value)}
        />
        <button
          style={{ display: "none" }}
          onClick={() => handleClick(searchValue)}
        >
          Submit
        </button>
      </form>
      <h3>{searchValue}</h3>
    </div>
  );
};

export default InputBar;
