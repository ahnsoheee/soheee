import styled from "styled-components";

const ButtonBar = ({ text, onClose }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Close onClick={onClose} />
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
  width: 18px;
  text-align: center;
  background-color: #dadce0;
  cursor: pointer;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-bottom: 2px solid #000000;
  border-right: 2px solid #000000;
  background-image: url(https://img.icons8.com/windows/344/delete-sign.png);
  background-position: center;
  background-size: 19px 19px;
  background-repeat: no-repeat;
`;
export default ButtonBar;
