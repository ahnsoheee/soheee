import Link from "../components/Link";
import LinkContent from "../components/LinkContent";
import Window from "../components/Window";
import WindowContent from "../components/WindowContent";
import ButtonBar from "../components/ButtonBar";
import Image from "../components/Image";
import GitHubBlack from "../image/github2.png";
import Video from "../image/video.png";
import RegisterReview from "../image/registerReview.png";
import CafeImage from "../image/cafeImage.png";
import CafeMain from "../image/cafeMain.png";
import CafeReview from "../image/cafeReview.png";
import CafeSearch from "../image/cafeSearch.png";
import CafeIntro from "../image/cafe.png";
import RegisterCafe from "../image/registerCafe.gif";
import DeleteReview from "../image/deleteReview.gif";
import styled from "styled-components";

const Cafe = ({ onClose }) => {
    return (
        <Window>
            <ButtonBar text="카페어때.pdf" onClose={onClose} />
            <WindowContent>
                <br />
                <Image src={CafeIntro} width="710" height="360" />
                <br />
                <br />
                <br />
                카페 어때 | 2021.11 - 2021.12 (개인)
                <br />
                <br />
                <Link onClick={() => window.open("https://github.com/ahnsoheee/how_about_cafe_native", "_black")}>
                    <Image src={GitHubBlack} width="20px" height="20px" />
                    <LinkContent>GitHub</LinkContent>
                </Link>
                <br />
                <br />
                1. 소개
                <br />
                <br />
                <ScreenWrapper>
                    <Screen>
                        <Image src={CafeMain} width="160" height="340" />
                        <br />
                        메인 화면
                    </Screen>
                    <Screen>
                        <Image src={CafeSearch} width="160" height="340" />
                        <br />
                        검색 화면
                    </Screen>
                    <Screen>
                        <Image src={CafeReview} width="160" height="340" />
                        <br />
                        리뷰 조회
                    </Screen>
                    <Screen>
                        <Image src={CafeImage} width="160" height="340" />
                        <br />
                        사진 조회
                    </Screen>
                </ScreenWrapper>
                <ScreenWrapper>
                    <Screen>
                        <Image src={DeleteReview} width="160" height="340" />
                        <br />
                        리뷰 관리
                    </Screen>
                    <Screen>
                        <Image src={RegisterCafe} width="160" height="340" />
                        <br />
                        카페 등록
                    </Screen>
                </ScreenWrapper>
                <br />
                <br />
                * 카페 소개
                <br />
                <br />
                - 카페의 평점과 리뷰를 조회할 수 있습니다.
                <br />
                - 지역 또는 이름으로 검색할 수 있습니다.
                <br />
                - 별점 / 이름 / 리뷰순으로 조회할 수 있습니다.
                <br />
                <br />
                <br />
                * 리뷰 관리
                <br />
                <br />
                - 리뷰를 등록하고, 다른 사람들이 작성한 리뷰를 조회할 수 있습니다.
                <br />
                - 내가 작성한 리뷰를 삭제할 수 있습니다.
                <br />
                - 리뷰에 등록된 사진을 모아서 볼 수 있습니다.
                <br />
                <br />
                <br />
                * 카페 등록
                <br />
                <br />
                - 찾는 카페가 없다면 새로운 카페를 등록할 수 있습니다.
                <br />
                <br />
                <br />
                <br />
                2. 기술 스택
                <br />
                <br />
                - Front : React Native, Styled-component
                <br />
                - Back : Spring Boot, Maven, MySQL, MyBatis, JWT, AWS
                <br />
                <br />
            </WindowContent>
        </Window>
    );
};

const ScreenWrapper = styled.div`
    display: flex;
`;


const Screen = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    margin: 10px;
    text-align: center;
`;

export default Cafe;