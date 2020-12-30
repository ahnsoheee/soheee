import styled from "styled-components";

const ButtonBar = ({ text, onClose }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Close onClick={onClose}>X</Close>
    </Container>
  );
};

const Container = styled.div`
  height: 20px;
  display: flex;
  margin: 2px;
  padding: 1px;
  border: 2px solid black;
  background: #252898;
`;

const Text = styled.div`
  width: 780px;
  color: #ffffff;
`;

const Close = styled.div`
  width: 20px;
  border: 2px solid black;
  text-align: center;
  background-color: #dadce0;
  cursor: pointer;
`;
export default ButtonBar;
