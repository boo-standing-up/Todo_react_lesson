import React, { useState } from "react";
import ColorfulMessege from "./components/ColorfulMessege";

const App = () => {
  const onClickUp = () => {
    return setNum(num + 1);
  };
  const [num, setNum] = useState(0);

  return (
    <>
      <h1 style={{ color: "red" }}>おはよう！</h1>
      <ColorfulMessege color="blue">朝ですよ</ColorfulMessege>
      <ColorfulMessege color="pink">夜になりました</ColorfulMessege>
      <ColorfulMessege color="green">昼なんです</ColorfulMessege>

      <button onClick={onClickUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
