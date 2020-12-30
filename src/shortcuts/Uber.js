import ButtonBar from "../components/ButtonBar";
import Image from "../components/Image";
import Link from "../components/Link";
import LinkContent from "../components/LinkContent";
import Window from "../components/Window";
import WindowContent from "../components/WindowContent";
import ExpectedInfoImage from "../image/expectedInfo.png";
import LocationImage from "../image/location.png";
import MatchingImage from "../image/matching.png";
import TaxiInfoImage from "../image/taxiInfo.png";
import TechImage from "../image/tech.png";
import GitHubBlack from "../image/github2.png";
import Video from "../image/video.png";

const Uber = ({ onClose }) => {
  return (
    <Window>
      <ButtonBar text="Uber 서비스 클론.txt" onClose={onClose} />
      <WindowContent>
        <br />
        1. 소개
        <br />
        <br />
        2020. 11. 16 ~ 2020. 12. 18
        <br />
        <br />
        <br />
        승객과 기사를 위한 택시 매칭 웹 서비스 '택시 자버'
        <br />
        <br />
        <br />
        <Link onClick={() => window.open("https://github.com/boostcamp-2020/Project09-B-Uber-Clone", "_black")}>
          <Image src={GitHubBlack} width="20px" height="20px" />
          <LinkContent>GitHub</LinkContent>
        </Link>
        <br />
        <Link
          style={{ display: "flex", cursor: "pointer" }}
          onClick={() => window.open("https://www.youtube.com/watch?v=q61XLqrnyTI&feature=emb_logo", "_black")}
        >
          <Image src={Video} width="20px" height="20px" />
          <LinkContent>시연 영상</LinkContent>
        </Link>
        <br />
        <br />
        <br />
        * 승객 지원 서비스
        <br />
        <br />
        - 3km 내 기사님과 매칭되어 빠르게 이용할 수 있습니다.
        <br />
        - 매칭된 기사님의 실시간 위치를 확인할 수 있습니다.
        <br />
        - 예상 시간과 요금을 확인할 수 있습니다.
        <br />
        - 매칭된 택시의 정보를 확인할 수 있습니다.
        <br />
        - 현재 탑승과 도착 처리 여부를 확인할 수 있습니다.
        <br />
        - 이전 이용 내역을 조회할 수 있습니다.
        <br />
        <br />
        * 기사 지원 서비스
        <br />
        <br />
        - 영업 시작 / 종료를 선택해 요청을 원할 때 받을 수 있습니다.
        <br />
        - 현재 위치부터 승객이 요청한 출발지까지의 경로를 확인할 수 있습니다.
        <br />
        - 승객 탑승 후, 출발지부터 목적지까지의 경로를 확인할 수 있습니다.
        <br />
        <br />
        <br />
        2. 기술 스택
        <br />
        <br />
        - Front : React, Redux, Apollo Client, Ant Design Mobile
        <br />
        - Back : Node.js, Express, MongoDB, mongoose, GraphQL, Apollo Server, jwt, PM2
        <br />
        <br />
        <Image src={TechImage} />
        <br />
        <br />
        <br />
        3. 실시간 매칭 기능
        <br />
        <br />
        - GraphQL의 Subscription을 활용하여 매칭 시스템 구현
        <br />
        - 이벤트 구독을 통한 실시간 매칭 및 알림 기능 구현
        <br />
        - 3km 내 기사와 매칭
        <br />
        - 기사는 매칭 수락 및 거절 가능
        <br />
        - 알림 표시 10초 후 자동 거절 처리
        <br />
        - 승객은 1분 동안 매칭이 되지 않는다면 매칭 실패
        <br />
        <br />
        <Image src={MatchingImage} />
        <br />
        <br />
        <br />
        4. 승객 - 예상 시간 및 요금 확인
        <br />
        <br />
        - Google Map API에서 제공하는 예상 시간 표시
        <br />
        - 거리를 기반으로 예상 요금 계산
        <br />
        <br />
        <Image src={ExpectedInfoImage} />
        <br />
        <br />
        <br />
        5. 승객 – 매칭된 택시 정보 확인
        <br />
        <br />
        - 매칭 요청 시 매칭 성공에 대한 이벤트를 구독하여 매칭된 택시의 정보가 표시
        <br />
        - 택시의 실시간 위치 확인 가능
        <br />
        <br />
        <Image src={TaxiInfoImage} />
        <br />
        <br />
        <br />
        6. 택시의 실시간 위치 확인
        <br />
        <br />
        - 기사는 GraphQL의 Mutation을 활용한 실시간 위치 업데이트
        <br />
        - 승객은 이벤트 구독을 통해 실시간 위치 확인
        <br />
        <br />
        <Image src={LocationImage} />
        <br />
        <br />
      </WindowContent>
    </Window>
  );
};

export default Uber;
