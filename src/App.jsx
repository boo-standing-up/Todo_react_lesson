import React from "react";

const App = () => {
  const onClickButton = () => {
    alert();
  };
  const styleContent1 = {
    color: "green",
    fontSize: "30px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>おはよう！</h1>
      <p style={styleContent1}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
