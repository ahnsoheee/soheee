import React from "react";
import styled from "styled-components";

const Icon = ({ src, onClick, width, height }) => {
  return <Image src={src} width={width} height={height} onClick={onClick} />;
};

const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0 10px;
  cursor: pointer;
`;

export default Icon;
