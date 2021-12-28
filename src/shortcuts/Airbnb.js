import ButtonBar from "../components/ButtonBar";
import Image from "../components/Image";
import Window from "../components/Window";
import WindowContent from "../components/WindowContent";
import AirbnbMain from "../image/airbnb.png";
import AirbnbSearch from "../image/airbnbSearch.png";

const Airbnb = ({ onClose }) => {
    return (
        <Window>
            <ButtonBar text="Airbnb 클론.pdf" onClose={onClose} />
            <WindowContent>
                <br />
                Airbnb 클론 | 2020.09 (개인)
                <br />
                <br />
                <br />
                1. 소개
                <br />
                <br /> Airbnb 웹 서비스 클론
                <br />
                <br /> - 회원가입 및 로그인
                <br /> - 메인 페이지 UI
                <br /> - 숙소 검색
                <br />
                <br />
                <br />
                2. 기술 스택
                <br />
                <br />
                - Front : JavaScript, HTML, CSS
                <br />
                - Back : Node.js, Express, NeDB
                <br />
                <br />
                <br />
                3. 기능
                <br />
                <br />
                <Image src={AirbnbMain} width="500px" height="1000px" />
                <br />
                <br />
                <br />
                * 숙소 검색 기능
                <br />
                <br />
                - 지역, 체크인 및 체크아웃 날짜, 인원 입력 내용을 기반으로 예약 내역 확인 후 예약 가능한 숙소 조회
                <br />
                <br />
                <Image src={AirbnbSearch} width="500px" height="1000px" />
                <br />
                <br />
            </WindowContent>
        </Window>
    );
};

export default Airbnb;
