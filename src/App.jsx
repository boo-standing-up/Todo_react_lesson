import React from "react";
import ColorfulMessege from "./components/ColorfulMessege";

const App = () => {
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      <h1 style={{ color: "red" }}>おはよう！</h1>
      <ColorfulMessege color="blue">朝ですよ</ColorfulMessege>
      <ColorfulMessege color="pink">夜になりました</ColorfulMessege>
      <ColorfulMessege color="green">昼なんです</ColorfulMessege>

      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
