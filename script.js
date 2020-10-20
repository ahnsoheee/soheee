let i = 0
let text = '안소희의 포트폴리오%'
text += '경력사항%'
text += '2020.01 ~ 2020.02 태그하이브 개발 팀 인턴%'
text += '참여 교육%'
text += '2020.07 ~ 2020.08 부스트 캠프 - 챌린지 과정 수료%'
text += '2020.09 ~ 부스트 캠프 - 멤버십 과정 진행 중%'

function typing() {
    if (i < text.length) {
        if (text[i] === '%') document.getElementById('container').innerHTML += '<br>'
        else document.getElementById('container').innerHTML += text[i]
        i++
        setTimeout(typing, 100)
    }
}
typing()