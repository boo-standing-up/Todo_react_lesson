import React, { useEffect, useState } from "react";
import ColorfulMessege from "./components/ColorfulMessege";

const App = () => {
  const [num, setNum] = useState(0);
  const [FaceShoeFlag, setFaceShoeFlag] = useState(true);

  const onClickUp = () => {
    return setNum(num + 1);
  };

  const onClickSeichShowFlag = () => {
    return setFaceShoeFlag(!FaceShoeFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      FaceShoeFlag || setFaceShoeFlag(true);
    } else {
      FaceShoeFlag && setFaceShoeFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>おはよう！</h1>
      <ColorfulMessege color="blue">朝ですよ</ColorfulMessege>
      <ColorfulMessege color="pink">夜になりました</ColorfulMessege>
      <ColorfulMessege color="green">昼なんです</ColorfulMessege>

      <button onClick={onClickUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSeichShowFlag}>on/off</button>
      <p>{num}</p>
      {FaceShoeFlag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;
