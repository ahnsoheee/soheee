import styled from "styled-components";

const Image = ({ src, width, height }) => {
  return <Container src={src} width={width} height={height} />;
};

const Container = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
export default Image;
