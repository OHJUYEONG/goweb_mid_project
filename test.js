var servey = new Vue({
    el: '#test',
    data: {
        intro: '당신의 오늘은 어떤가요? \n 당신에게 맞는 음식을 테스트해보세요',
        title: '오늘의 음식',
        index: 0,
        question: [],
        answer1: [],
        answer2: [],
        result: "",
        loading: "",
        result_list: [],
        question_image: [],
        current: ['1/9', '2/9', '3/9', '4/9', '5/9', '6/9', '7/9', '8/9', '9/9'],
        user_answer: [],
    },
    mounted: function () {
        $('#intro').show();
        $('#main').hide();
        $('#loading').hide();
        $('#result').hide();

        {
            this.question.push('나는 매운 음식을');
            this.question.push('지금 나의 스트레스 상태는');
            this.question.push('현재 나의 금전상태는');
            this.question.push('나는 다른 나라 음식을');
            this.question.push('오늘의 간 컨디션은');
            this.question.push('나의 오늘 밥메이트는');
            this.question.push('나는 다이어트를');
            this.question.push('오늘은 배달좀 시킬까?');
            this.question.push('한국인은');

            this.answer1.push('신라면도 나에겐 고난');
            this.answer1.push('자극적인걸로 풀지않으면 안된다!!');
            this.answer1.push('지갑이 가벼워도 너무 가볍다');
            this.answer1.push('흥선대원군 저리가라급 한식파');
            this.answer1.push('어제 미친듯이 달려서 해장이 필요하다');
            this.answer1.push('그런거 없다 인생은 홀로 태어나서 홀로 가는 것');
            this.answer1.push('왜 하는데?');
            this.answer1.push('음식은 가서 먹어야지');
            this.answer1.push('밥심이지');

            this.answer2.push('불닭볶음면은 귀여운 수준');
            this.answer2.push('오늘은 무난무난하게 지내왔다');
            this.answer2.push('비싸도 맛있다면 용서 가능');
            this.answer2.push('이거 외국음식이었어..? 맛있기만 하네');
            this.answer2.push('음주와는 거리가 멀다');
            this.answer2.push('직장동료 / 친구 / 애인이 있어 함께 먹을 거다');
            this.answer2.push('하긴 해야지...');
            this.answer2.push('돈만내면 편하게 먹을 수 있는데 굳이 가야해?');
            this.answer2.push('맛있기만 하면 뭔들');

            this.question_image.push('assets/question_0.png');
            this.question_image.push('assets/question_1.png');
            this.question_image.push('assets/question_2.png');
            this.question_image.push('assets/question_3.png');
            this.question_image.push('assets/question_4.png');
            this.question_image.push('assets/question_5.png');
            this.question_image.push('assets/question_6.png');
            this.question_image.push('assets/question_7.png');
            this.question_image.push('assets/question_8.png');

            this.result_list.push('든든한 한식 한상');
            this.result_list.push('햄최몇? 간단하지만 맛있는 햄버거');
            this.result_list.push('우아하게 스테이크 썰기');
            this.result_list.push('한..1.5마라탕정도? 이상하게 생각나는 마라탕');
            this.result_list.push('로제가 유행이라며? 떡볶이는 늘 옳다 분식');
            this.result_list.push('오늘은 돈 좀 쓰자 오마카세 스시');
            this.result_list.push('건강한 어른의 맛 샐러드');
            this.result_list.push('볶음밥이 진짜지 닭갈비');
            this.result_list.push('샐러드만으로는 배가 안차지 샌드위치');
            this.result_list.push('짜장면이냐 짬뽕이냐 그게 문제야 중식');
            this.result_list.push('빠르게 먹고 가야해 편의점 인스턴트');
            this.result_list.push('치킨과 양대산맥이지 피자');
            this.result_list.push('다이어트에도 치팅데이가 필요하다구요 치킨');
            this.result_list.push('그 돈이면 든든한 국밥 한 그릇');
            this.result_list.push('깔끔하고 담백한 쌀국수');
        }// init question
    },
    methods: {
        start: function () {
            $('#intro').hide();
            $('#main').show();
            $('#loading').hide();
            $('#result').hide();
        },
        answerClicked: function (number) {
            this.user_answer.push(number);
            this.index += 1;

            if (this.index == this.question.length) {
                startLoading();
                return;
            }
            $('#question_image')[0].src = this.question_image[this.index];
        },
    }
});
function startLoading() {
    $('#intro').hide();
    $('#main').hide();
    $('#loading').show();
    $('#result').hide();

    window.setTimeout(() => {
        servey.loading += ".";
        window.setTimeout(() => {
            servey.loading += ".";
            window.setTimeout(() => {
                servey.loading += ".";
                window.setTimeout(() => {
                    servey.loading += ".";
                    window.setTimeout(() => {
                        calcResult();
                    }, 700);
                }, 700);
            }, 700);
        }, 700);
    }, 700);
}

function calcResult() {
    let value = 0;

    for (let i = 0; i < servey.user_answer.length; i++) {
        value += servey.user_answer[i];
    }

    result_index = parseInt(remap(value, 9, 18, 0, 14))
    showResult(result_index);
}

function showResult(result_index) {
    servey.result = servey.result_list[result_index];
    $('#intro').hide();
    $('#main').hide();
    $('#loading').hide();
    $('#result').show();
}

function remap(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


