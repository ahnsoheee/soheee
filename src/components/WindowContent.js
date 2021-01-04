import styled from "styled-components";

const WindowContent = styled.div`
  width: 750px;
  height: 500px;
  margin-left: 30px;
  overflow: auto;
  &::-webkit-scrollbar {
    height: 10px;
    background: #eeeeee;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #cccccc;
    border-top: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    border-bottom: 2px solid #000000;
    border-right: 2px solid #000000;
  }
  &::-webkit-scrollbar-track {
    background-color: #eeeeee;
  }
  ::-webkit-scrollbar-button:start:decrement {
    display: block;
    height: 16px;
    border-top: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    border-bottom: 2px solid #000000;
    border-right: 2px solid #000000;
    background-color: #cccccc;
    background-image: url(https://img.icons8.com/ios-filled/344/sort-up.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10px 10px;
  }
  ::-webkit-scrollbar-button:end:increment {
    display: block;
    height: 16px;
    border-top: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    border-bottom: 2px solid #000000;
    border-right: 2px solid #000000;
    background-color: #cccccc;
    background-image: url(https://img.icons8.com/material-sharp/2x/give-way.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 9px 6px;
  }
`;

export default WindowContent;
