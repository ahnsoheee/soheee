import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Window from "../image/window.png";
import Icon from "./Icon";

const Footer = () => {
  const [time, setTime] = useState("");
  const date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getTime = () => {
    setTime(`${hour}:${min}:${sec}`);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      getTime();
    }, 1000);
    return () => clearInterval(timer);
  }, [getTime]);

  return (
    <Container>
      <Start>
        <Icon src={Window} width="25px" />
        <Text>Start</Text>
      </Start>
      <Content />
      <Time>{time}</Time>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: #dadce0;
  color: #000000;
  border-top: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
`;

const Start = styled.div`
  display: flex;
  margin: 5px;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  box-shadow: 1px 1px 1px 1px #000000;
`;

const Text = styled.text`
  padding-top: 5px;
  padding-right: 5px;
`;

const Content = styled.div``;

const Time = styled.div`
  position: absolute;
  right: 0;
  margin: 4px 7px 5px 5px;
  padding: 5px 10px 5px 10px;
  text-align: center;
  border-top: 2px solid #6d6d6d;
  border-left: 2px solid #6d6d6d;
  box-shadow: 1px 1px 1px 1px #ffffff;
`;
export default Footer;
