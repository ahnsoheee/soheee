import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Typing from "react-typing-animation";
//import Taxi from "./image/taxi.png";
import GitHubBlack from "./image/github2.png";
//import AI from "./image/ai.png";
//import AirbnbLogo from "./image/airbnbLogo.png";
//import Laptop from "./image/laptop.png";
//import AccountbookLogo from "./image/accountbookLogo.png";
import Blog from "./image/blog.png";
import Mail from "./image/mail.png";
import Notion from "./image/notion.png";
import Pdf from "./image/pdf.png";
import Icon from "./components/Icon";
import FlexBox from "./components/FlexBox";
import Cafe from "./shortcuts/Cafe";
import Uber from "./shortcuts/Uber";
import GitHub from "./shortcuts/GitHub";
import Stock from "./shortcuts/Stock";
import Airbnb from "./shortcuts/Airbnb";
import Intern from "./shortcuts/Intern";
import Accountbook from "./shortcuts/Accountbook";

const Main = () => {
    const [skip, setSkip] = useState(false);
    const [cafe, setCafe] = useState(false);
    const [uber, setUber] = useState(false);
    const [gitHub, setGitHub] = useState(false);
    //const [stock, setStock] = useState(false);
    const [airbnb, setAirbnb] = useState(false);
    const [intern, setIntern] = useState(false);
    const [accountbook, setAccountbook] = useState(false);

    return (
        <FlexBox onClick={() => setSkip(true)}>
            <Section margin="30px 200px 10px 10px">
                <Shortcuts>
                    <Icon src={Pdf} width="40px" height="40px" onClick={() => setCafe(true)} />
                    <Name>카페어때</Name>
                </Shortcuts>
                <br />
                <br />
                <Shortcuts>
                    <Icon src={Pdf} width="40px" height="40px" onClick={() => setUber(true)} />
                    <Name>택시 자버</Name>
                </Shortcuts>
                <br />
                <br />
                <Shortcuts>
                    <Icon src={Pdf} width="30px" height="30px" onClick={() => setGitHub(true)} />
                    <Name>GitHub Issue<br />Tracker</Name>
                </Shortcuts>
                <br />
                <br />
                <Shortcuts>
                    <Icon src={Pdf} width="30px" height="30px" onClick={() => setAccountbook(true)} />
                    <Name>가계부</Name>
                </Shortcuts>
                <br />
                <br />
                <Shortcuts>
                    <Icon src={Pdf} width="30px" height="30px" onClick={() => setAirbnb(true)} />
                    <Name>Airbnb</Name>
                </Shortcuts>
                <br />
                <br />
                <Shortcuts>
                    <Icon src={Pdf} width="30px" height="30px" onClick={() => setIntern(true)} />
                    <Name>인턴</Name>
                </Shortcuts>
            </Section>
            <Section margin="30px 0">
                {skip ? (
                    <>
                        <Content>
                            안소희 - Full Stack Developer
                            <br />
                            <br />
                            <br />
                            <Row>
                                <Left>
                                    * 자격증
                                    <br />
                                    <br />
                                    정보처리기사
                                    <br />
                                    네트워크관리사 2급
                                    <br />
                                    SQL Developer
                                    <br />
                                    <br />
                                </Left>
                                <Right>
                                    * 경험
                                    <br />
                                    <br />
                                    2020.01 ~ 2020.02 태그하이브 개발팀 인턴
                                    <br />
                                    2020.07 ~ 2020.12 부스트캠프 웹풀스택 5기
                                    <br />
                                    <br />
                                </Right>
                            </Row>
                            <br />
                            * 기술
                            <br />
                            <br />
                            Back-end : Node.js SpringBoot Express MySQL MongoDB GraphQL Apollo-Server
                            <br />
                            Front-end : React ReactNative Redux VanillaJS Apollo-Client
                            <br />
                            Language : Python JavaScript TypeScript Java SQL
                            <br />
                            Etc. : Git, AWS, Ubuntu
                            <br />
                            <br />
                            <br />
                            * 프로젝트
                            <br />
                            <br />
                            1. 카페어때
                            <br />
                            2. 택시 자버
                            <br />
                            3. GitHub Issue Tracker 클론
                            <br />
                            4. 가계부
                            <br />
                            5. Todo List
                            <br />
                            6. Airbnb 클론
                            <br />
                            <br />
                            <br />
                        </Content>
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
                            <FlexBox style={{ cursor: "pointer" }} onClick={() => window.open("https://www.notion.so/388cbe206acb4c0783d2e94efbbc609c")}>
                                <Icon src={Notion} width="20px" height="20px" />
                                Notion
                            </FlexBox>
                            &nbsp; &nbsp;
                            <FlexBox style={{ cursor: "pointer" }} onClick={() => window.open("mailto:soheeeahn@gmail.com")}>
                                <Icon src={Mail} width="20px" height="20px" />
                                Email: soheeeahn@gmail.com
                            </FlexBox>
                        </FlexBox>
                    </>
                ) : (
                    <>
                        <SkipWrapper>
                            <Blink>클릭하면 Skip !</Blink>
                        </SkipWrapper>
                        <Typing speed={30}>
                            <Content>
                                안소희 - Full Stack Developer
                                <br />
                                <br />
                                <br />
                                <Row>
                                    <Left>
                                        * 자격증
                                        <br />
                                        <br />
                                        정보처리기사
                                        <br />
                                        네트워크관리사 2급
                                        <br />
                                        SQL Developer
                                        <br />
                                        <br />
                                    </Left>
                                    <Right>
                                        * 경험
                                        <br />
                                        <br />
                                        2020.01 ~ 2020.02 태그하이브 개발팀 인턴
                                        <br />
                                        2020.07 ~ 2020.12 부스트캠프 웹풀스택 5기
                                        <br />
                                        <br />
                                    </Right>
                                </Row>
                                <br />
                                * 기술
                                <br />
                                <br />
                                Back-end : Node.js SpringBoot Express MySQL MongoDB GraphQL Apollo-Server
                                <br />
                                Front-end : React ReactNative Redux VanillaJS Apollo-Client
                                <br />
                                Language : Python JavaScript TypeScript Java SQL
                                <br />
                                Etc. : Git, AWS, Ubuntu
                                <br />
                                <br />
                                <br />
                                * 프로젝트
                                <br />
                                <br />
                                1. 카페어때
                                <br />
                                2. 택시 자버
                                <br />
                                3. GitHub Issue Tracker 클론
                                <br />
                                4. 가계부
                                <br />
                                5. Todo List
                                <br />
                                6. Airbnb 클론
                                <br />
                                <br />
                                <br />
                            </Content>
                        </Typing>
                    </>
                )}
            </Section>
            {cafe && <Cafe onClose={() => setCafe(false)} />}
            {uber && <Uber onClose={() => setUber(false)} />}
            {gitHub && <GitHub onClose={() => setGitHub(false)} />}
            {/*{stock && <Stock onClose={() => setStock(false)} />}*/}
            {airbnb && <Airbnb onClose={() => setAirbnb(false)} />}
            {intern && <Intern onClose={() => setIntern(false)} />}
            {accountbook && <Accountbook onClose={() => setAccountbook(false)} />}
        </FlexBox>
    );
};

const Content = styled.div`
  padding-left: 15px;
`;

const Section = styled.div`
  width: fit-content;
  margin: ${(props) => props.margin};
`;

const Row = styled.div`
    display: flex;
`;

const Left = styled.div`
    display: block;
    margin-right: 100px;
`;

const Right = styled.div`
    display: block;
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

const blinkingEffect = () => {
    return keyframes`
    50% {
      opacity: 0;
    }
  `;
};

const Blink = styled.div`
  animation: ${blinkingEffect} 1s linear infinite;
`;

const SkipWrapper = styled.div`
  width: 200px; 
  position: fixed;
  bottom: 57px;
  left: 20px;
  color: #ffff49;
`;

export default Main;
