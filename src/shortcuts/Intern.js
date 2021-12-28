import ButtonBar from "../components/ButtonBar";
import Window from "../components/Window";
import WindowContent from "../components/WindowContent";

const Intern = ({ onClose }) => {
    return (
        <Window>
            <ButtonBar text="인턴 활동.txt" onClose={onClose} />
            <WindowContent>
                <br />
                태그하이브(TagHive) 개발팀 인턴 | 2020. 01. 01 - 2020. 02. 29
                <br />
                <br />
                <br />
                <br />
                1. 기술 스택
                <br />
                <br />
                * Flask, Firebase, Python
                <br />
                <br />
                <br />
                <br />
                2. 업무
                <br />
                <br />
                * Firebase 기반의 대용량 데이터 조회 및 분석과 전처리 업무 수행              <br />
                <br />
                * 사용자 정보 저장을 위한 API 구현
                <br />
                <br />
                * 인공지능의 추천 기능을 위한 데이터 셋 구성
                <br />
                <br />
                * TF-IDF와 Word2Vec를 활용해 임베딩 후 코사인 유사도 기반의 추천알고리즘 구현
                <br />
                <br />
                * 오타 검사, 수정 후 감정 분석을 통해 자연어 수치화
                <br />
                <br />
                * 유사도 계산으로 기존 데이터의 중복을 발견하여 불필요한 비용 절감
                <br />
                <br />
                * 인공지능 논문 분석
                <br />
                <br />
                <br />
            </WindowContent>
        </Window>
    );
};

export default Intern;
