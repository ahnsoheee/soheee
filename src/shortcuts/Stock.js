import ButtonBar from "../components/ButtonBar";
import Image from "../components/Image";
import Window from "../components/Window";
import WindowContent from "../components/WindowContent";
import FlexBox from "../components/FlexBox";
import CustockInput from "../image/custockInput.png";
import CustockMain from "../image/custockMain.png";
import CustockResult from "../image/custockResult.png";
import Data from "../image/data.png";
import Compare from "../image/compare.png";
import Lstm from "../image/lstm.png";

const Stock = ({ onClose }) => {
  return (
    <Window>
      <ButtonBar text="맞춤형 주식 추천 인공지능.txt" onClose={onClose} />
      <WindowContent>
        <br />
        1. 소개
        <br />
        <br />
        2019. 09. 17 ~ 2019. 11. 30
        <br />
        <br />
        <br />
        - 주가 예측 기능과 사용자 맞춤형 주식 추천 기능을 가진 인공지능 개발
        <br />
        - 딥러닝을 활용하여 예측 모델을 설계
        <br />
        - 사용자가 이용할 수 있도록 웹 구현
        <br />
        <br />
        <br />
        2. 데이터 수집 및 분석
        <br />
        <br />
        - 크롤링을 활용한 일별 뉴스 데이터 수집
        <br />
        - Pandas를 활용하여 finance.yahoo.com에서 총 1524개의 코스피 종목 데이터 저장
        <br />
        - 일별 뉴스 내용, 종가 증감률 병합
        <br />
        <br />
        <Image src={Data} width="500px" height="280px" />
        <br />
        <br />
        <br />
        3. 예측 모델 구현
        <br />
        <br />
        - LSTM 예측 모델 구현
        <br />
        - 설문 조사를 통해 사용자의 성향 파악
        <br />
        - 7일, 15일, 30일 후의 주가를 예측하는 알고리즘 구현
        <br />
        <br />
        <Image src={Lstm} width="500px" height="200px" />
        <br />
        <br />
        <br />
        4. 웹 구현
        <br />
        <br />
        - Django 프레임워크를 활용하여 웹 구현
        <br />
        - 메인 페이지
        <br />
        <br />
        <Image src={CustockMain} width="500px" height="280px" />
        <br />
        <br />
        <br />
        – 종목 조회
        <br />
        <br />
        <FlexBox>
          <Image src={CustockInput} width="330px" height="250px" />
          &nbsp; &nbsp;
          <Image src={CustockResult} width="330px" height="250px" />
        </FlexBox>
        <br />
        <br />
        <br />
        6. 결과
        <br />
        <br />- 7일 후) 예측 : 약 93,000 -{">"} 실제 : 90,500
        <br />- 15일 후) 예측 : 약 100,000 -{">"} 실제 : 92,100
        <br />- 20일 후) 예측 : 약 91,000 -{">"} 실제: 91,300
        <br />
        <br />
        <Image src={Compare} width="500px" height="280px" />
        <br />
      </WindowContent>
    </Window>
  );
};

export default Stock;
