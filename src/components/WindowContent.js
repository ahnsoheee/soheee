import styled from "styled-components";

const WindowContent = styled.div`
  width: 770px;
  height: 500px;
  margin-left: 30px;
  overflow: auto;
  &::-webkit-scrollbar {
    height: 10px;
    background: #eeeeee;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #cccccc;
  }
  &::-webkit-scrollbar-track {
    background-color: #eeeeee;
  }
`;

export default WindowContent;
