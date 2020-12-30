import React, { useState } from "react";
import styled from "styled-components";
import Typing from "react-typing-animation";
import Taxi from "./image/taxi.png";
import GitHubBlack from "./image/github2.png";
import AI from "./image/ai.png";
import Blog from "./image/blog.png";
import Mail from "./image/mail.png";
import Icon from "./components/Icon";
import FlexBox from "./components/FlexBox";
import Uber from "./shortcuts/Uber";
import GitHub from "./shortcuts/GitHub";
import Stock from "./shortcuts/Stock";

const Main = () => {
  const [skip, setSkip] = useState(false);
  const [uber, setUber] = useState(false);
  const [gitHub, setGitHub] = useState(false);
  const [stock, setStock] = useState(false);

  return (
    <FlexBox onClick={() => setSkip(true)}>
      <Section margin="10px 200px 10px 10px">
        <Shortcuts>
          <Icon src={Taxi} width="40px" height="40px" onClick={() => setUber(true)} />
          <Name>택시 자버</Name>
        </Shortcuts>
        <br />
        <br />
        <Shortcuts>
          <Icon src={GitHubBlack} width="30px" height="30px" onClick={() => setGitHub(true)} />
          <Name>GitHub 이슈</Name>
        </Shortcuts>
        <br />
        <br />
        <Shortcuts>
          <Icon src={AI} width="30px" height="30px" onClick={() => setStock(true)} />
          <br />
          <Name>
            로보
            <br />
            어드바이저
          </Name>
        </Shortcuts>
      </Section>
      <Section margin="20px 0">
        {skip ? (
          <>
            안소희 포트폴리오
            <br />
            <br />
            <br />
            경력 사항
            <br />
            <br />
            2020.01 ~ 2020.02 태그하이브 개발팀 인턴
            <br />
            <br />
            <br />
            교육 이수
            <br />
            <br />
            2020.07 ~ 2020.12 부스트 캠프
            <br />
            <br />
            <br />
            프로젝트
            <br />
            <br />
            1. Uber 서비스 클론 – 택시 자버
            <br />
            2. GitHub 이슈 관리 서비스 클론
            <br />
            3. 가계부 서비스
            <br />
            4. Todo List
            <br />
            5. Airbnb 클론
            <br />
            6. 맞춤형 주식 추천 인공지능 – 로보 어드바이저
            <br />
            7. 사람 행동 판별 머신러닝
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <FlexBox>
              <FlexBox style={{ cursor: "pointer" }} onClick={() => window.open("https://github.com/ahnsoheee/", "_black")}>
                <Icon src={GitHubBlack} width="20px" height="20px" />
                GitHub
              </FlexBox>
              &nbsp; &nbsp;
              <FlexBox style={{ cursor: "pointer" }} onClick={() => window.open("https://hapbbying.tistory.com/", "_black")}>
                <Icon src={Blog} width="20px" height="20px" />
                Blog
              </FlexBox>
              &nbsp; &nbsp;
              <FlexBox style={{ cursor: "pointer" }} onClick={() => window.open("mailto:soheeeahn@gmail.com")}>
                <Icon src={Mail} width="20px" height="20px" />
                Email: soheeeahn@gmail.com
              </FlexBox>
            </FlexBox>
          </>
        ) : (
          <Typing speed={30}>
            안소희 포트폴리오
            <br />
            <br />
            <br />
            경력 사항
            <br />
            <br />
            2020.01 ~ 2020.02 태그하이브 개발팀 인턴
            <br />
            <br />
            <br />
            교육 이수
            <br />
            <br />
            2020.07 ~ 2020.12 부스트 캠프
            <br />
            <br />
            <br />
            프로젝트
            <br />
            <br />
            1. Uber 서비스 클론 – 택시 자버
            <br />
            2. GitHub 이슈 관리 서비스 클론
            <br />
            3. 가계부 서비스
            <br />
            4. Todo List
            <br />
            5. Airbnb 클론
            <br />
            6. 맞춤형 주식 추천 인공지능 – 로보 어드바이저
            <br />
            7. 사람 행동 판별 머신러닝
            <br />
            <br />
            <Icon src={GitHubBlack} />
          </Typing>
        )}
      </Section>
      {uber && <Uber onClose={() => setUber(false)} />}
      {gitHub && <GitHub onClose={() => setGitHub(false)} />}
      {stock && <Stock onClose={() => setStock(false)} />}
    </FlexBox>
  );
};

const Section = styled.div`
  width: fit-content;
  margin: ${(props) => props.margin};
`;

const Shortcuts = styled.div`
  width: fit-content;
  align-content: center;
  font-family: "Serif";
  font-size: 10pt;
  text-align: center;
`;

const Name = styled.div`
  width: 80px;
`;

export default Main;
