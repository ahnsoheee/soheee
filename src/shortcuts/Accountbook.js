import ButtonBar from "../components/ButtonBar";
import Window from "../components/Window";
import WindowContent from "../components/WindowContent";
import GitHubBlack from "../image/github2.png";
import Link from "../components/Link";
import LinkContent from "../components/LinkContent";
import Image from "../components/Image";
import AccountbookImage from "../image/accountbook.PNG";
import AccountSetting from "../image/accountSetting.PNG";
import categorySetting from "../image/categorySetting.PNG";

const Accountbook = ({ onClose }) => {
  return (
    <Window>
      <ButtonBar text="가계부.txt" onClose={onClose} />
      <WindowContent>
        <br />
        1. 소개
        <br />
        <br />
        <br />
        가계부 웹 서비스 개발
        <br />
        <br />
        - 수입/지출 내역 생성, 수정, 삭제 기능
        <br />
        - 수입/지출 카테고리 생성, 수정, 삭제 기능 
        <br />
        - 자산 생성, 수정, 삭제 기능
        <br />
        <br />
        <Link onClick={() => window.open("https://github.com/ahnsoheee/AccountBook", "_black")}>
          <Image src={GitHubBlack} width="20px" height="20px" />
          <LinkContent>GitHub - ver.1) Node.js + React</LinkContent>
        </Link>
        <Link onClick={() => window.open("https://github.com/ahnsoheee/AccountBook_SpringBoot", "_black")}>
          <Image src={GitHubBlack} width="20px" height="20px" />
          <LinkContent>GitHub - ver.2) SpringBoot + React</LinkContent>
        </Link>
        <br />
        <br />
        2. 기술 스택
        <br />
        <br />
        - Front : React, StyledComponent, Webpack, Babel
        <br />
        - Back (ver.1) : Node.js, Express, MySQL, mysql2, jwt 
        <br />
        - Back (ver.2) : SpringBoot, MyBatis, MySQL, jwt
        <br />
        <br />
        <br />
        3. 메인 페이지
        <br />
        <br />
        <Image src={AccountbookImage} width="500px" height="450px" />
        <br />
        <br />
        4. 카테고리 설정 페이지
        <br />
        <br />
        <Image src={AccountSetting} width="500px" height="180px" />
        <br />
        <br />
        5. 자산 설정 페이지
        <br />
        <br />
        <Image src={categorySetting} width="500px" height="370px" />
        <br />
        <br />
      </WindowContent>
    </Window>
  );
};

export default Accountbook;