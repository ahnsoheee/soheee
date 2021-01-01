import ButtonBar from "../components/ButtonBar";
import Image from "../components/Image";
import Window from "../components/Window";
import WindowContent from "../components/WindowContent";

const Airbnb = ({ onClose }) => {
  return (
    <Window>
      <ButtonBar text="인턴 활동.txt" onClose={onClose} />
      <WindowContent>
        <br />
        1. 태그하이브 인턴 활동
        <br />
        <br />
        2020. 01. 01 ~ 2020. 02. 29
        <br />
        <br />
        <br />
        2. 데이터 분석
        <br />
        <br />
        - 데이터 셋 구성
        <br />
        - 데이터 분석 및 전처리 업무 수행
        <br />
        - 정성적 데이터 정량화
        <br />
        - 유사도 알고리즘을 활용하여 중복 데이터 검색
        <br />
        - 인공지능 관련 논문 분석
        <br />
        <br />
        <br />
        3. 인공지능 추천 기능
        <br />
        <br />
        - 텍스트 데이터 정량화
        <br />
        - 유사도 분석 알고리즘 활용
        <br />
        <br />
        <br />
        3. API 구현
        <br />
        <br />
        Python을 활용하여 서버에 문서를 생성하기 위한 API 구현
        <br />
        <br />
      </WindowContent>
    </Window>
  );
};

export default Airbnb;
