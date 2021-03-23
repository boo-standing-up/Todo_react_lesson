import React from "react";

export const ColorfulMessege = (props) => {
  const { color, children } = props;
  const styleContent1 = {
    color,
    fontSize: "30px"
  };

  return <p style={styleContent1}>{children}</p>;
};
