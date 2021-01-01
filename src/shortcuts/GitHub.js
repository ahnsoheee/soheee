import Link from "../components/Link";
import LinkContent from "../components/LinkContent";
import Window from "../components/Window";
import WindowContent from "../components/WindowContent";
import ButtonBar from "../components/ButtonBar";
import Image from "../components/Image";
import GitHubBlack from "../image/github2.png";
import Video from "../image/video.png";
import IssueImage from "../image/issue.png";
import IssueFilterImage from "../image/issueFilter.png";
import IssueLoginImage from "../image/issueLogin.png";
import Oauth from "../image/oauth.png";
import Arrow from "../image/arrow.png";

const GitHub = ({ onClose }) => {
  return (
    <Window>
      <ButtonBar text="GitHub 이슈 관리 서비스 클론.pdf" onClose={onClose} />
      <WindowContent>
        <br />
        1. 소개
        <br />
        <br />
        2020. 10. 26 ~ 2020. 11. 13
        <br />
        <br />
        <br />
        <Link onClick={() => window.open("https://github.com/boostcamp-2020/IssueTracker-7", "_black")}>
          <Image src={GitHubBlack} width="20px" height="20px" />
          <LinkContent>GitHub</LinkContent>
        </Link>
        <br />
        <Link
          style={{ display: "flex", cursor: "pointer" }}
          onClick={() => window.open("https://www.youtube.com/watch?v=puAvTsYITww&feature=youtu.be", "_black")}
        >
          <Image src={Video} width="20px" height="20px" />
          <LinkContent>시연 영상</LinkContent>
        </Link>
        <br />
        <br /> - GitHub 이슈 관리 서비스 클론 프로젝트
        <br /> - Issue를 조회, 생성, 수정, 삭제할 수 있습니다.
        <br /> - Issue 목록을 필터링할 수 있습니다.
        <br /> - Label을 조회, 생성, 수정, 삭제할 수 있습니다.
        <br /> - Milestone을 조회, 생성, 수정, 삭제할 수 있습니다.
        <br />
        <br />
        <br />
        2. 기술 스택
        <br />
        <br />
        - Front : React, StyledComponent, Webpack, Babel
        <br />
        - Back : Node.js, Express, mysql2, OAuth
        <br />
        <br />
        <br />
        3. GitHub OAuth 로그인
        <br />
        <br />
        - passport-github를 활용한 GitHub 계정 인증
        <br />
        <br />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image src={IssueLoginImage} />
          <Image src={Arrow} width="50px" height="50px" />
          <Image src={Oauth} />
        </div>
        <br />
        <br />
        <br />
        4. 이슈 조회
        <br />
        <br />- 로그인된 사용자의 issue를 조회
        <br />
        <br />
        <Image src={IssueImage} />
        <br />
        <br />
        <br />
        5. 이슈 필터링
        <br />
        <br />
        - Author, label, Milestones, Assignee 필터 조건 선택 시 조건에 맞는 이슈를 표시
        <br />
        <br />
        <Image src={IssueFilterImage} />
        <br />
        <br />
      </WindowContent>
    </Window>
  );
};
export default GitHub;
