var servey = new Vue({
    el: '#test',
    data: {
        intro: '당신의 오늘은 어떤가요? \n 현재 당신에게 맞는 음식을 알려드릴게요',
        title: '오늘의 메뉴',
        index: 0,
        question: [],
        answer1: [],
        answer2: [],
        result: "",
        loading: "",
        result_list: [],
        question_image: [],
        result_image: [],
        current: ['1/9', '2/9', '3/9', '4/9', '5/9', '6/9', '7/9', '8/9', '9/9'],
        user_answer: [],
        result_explain:"",
        result_name:"",
        result_name_list:[],
        result_explain_list:[],
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

            this.result_image.push('assets/result_1.jpg');
            this.result_image.push('assets/result_2.jpg');
            this.result_image.push('assets/result_3.jpeg');
            this.result_image.push('assets/result_4.jfif');
            this.result_image.push('assets/result_5.jpg');
            this.result_image.push('assets/result_6.jfif');
            this.result_image.push('assets/result_7.jpg');
            this.result_image.push('assets/result_8.jpg');
            this.result_image.push('assets/result_9.png');
            this.result_image.push('assets/result_10.jfif');
            this.result_image.push('assets/result_11.jfif');
            this.result_image.push('assets/result_12.jpg');
            this.result_image.push('assets/result_13.jpg');
            this.result_image.push('assets/result_14.jpg');
            this.result_image.push('assets/result_15.jpg');


            this.result_list.push('든든한 한상');
            this.result_list.push('햄최몇? 간단하지만 맛있는');
            this.result_list.push('우아하게');
            this.result_list.push('한..1.5마라탕정도? 이상하게 생각나는');
            this.result_list.push('로제가 유행이라며? 떡볶이는 늘 옳다');
            this.result_list.push('오늘은 돈 좀 쓰자');
            this.result_list.push('건강한 어른의 맛');
            this.result_list.push('볶음밥이 진짜지');
            this.result_list.push('샐러드만으로는 배가 안차');
            this.result_list.push('짜장면이냐 짬뽕이냐 그게 문제야');
            this.result_list.push('빠르게 먹고 가야할땐');
            this.result_list.push('치킨과 양대산맥이지');
            this.result_list.push('다이어트에도 치팅데이가 필요해');
            this.result_list.push('그 돈이면 든든하게');
            this.result_list.push('깔끔하고 담백한');

            this.result_name_list.push('한식');
            this.result_name_list.push('햄버거');
            this.result_name_list.push('스테이크');
            this.result_name_list.push('마라탕');
            this.result_name_list.push('분식');
            this.result_name_list.push('오마카세 스시');
            this.result_name_list.push('샐러드');
            this.result_name_list.push('닭갈비');
            this.result_name_list.push('샌드위치');
            this.result_name_list.push('중식');
            this.result_name_list.push('편의점 인스턴트');
            this.result_name_list.push('피자');
            this.result_name_list.push('치킨');
            this.result_name_list.push('국밥 한 그릇');
            this.result_name_list.push('쌀국수');

            this.result_explain_list.push('당신은 진성 한국인입니다.\n 밥이 있어야 한끼를 먹은 것 같아요.\n 외국 음식들은 니글거리고, 향때문에 금방 물려버려요. \n하얀 쌀밥과 김치만 있으면 어디든 갈 수 있어...');
            this.result_explain_list.push('빠르고 간단하게 먹을 수 있지만 맛있는 햄버거. \n돈 좀 쓰고 싶을때 수제 햄버거 먹으면 이보다 행복할 수 없어요.\n 햄버거 한 입에 콜라 한 입이면 바랄 거 없는 당신. \n이미 햄버거를 주문하고 있겠군요.');
            this.result_explain_list.push('맛있는 음식과 분위기 있는 식당, 그리고 함께 먹을 사람이 있으면 너무 행복해요.\n 파스타, 피자, 샐러드와 함께 스테이크를 썰고 있으면 이게 바로 자본주의의 맛이에요. \n인증샷은 필수인거 아시죠?');
            this.result_explain_list.push('"마라탕 그만 먹어"\n"그게 뭔데"\n"마라탕 그만 먹으라고"\n"그거 어떻게 하는건데"');
            this.result_explain_list.push('한국인하면 빼놓을 수 없는 음식이에요. \n매콤한 맛, 달콤한 맛, 만능 음식 떡볶이에요. \n치즈도 넣어보고 김밥도 넣어보고 핫도그도 넣어봐요. \n떡볶이와 함께면 무슨 음식이든 엄청난 케미를 보여줘요.');
            this.result_explain_list.push('초밥도 초밥 나름인거 아시죠?\n 깨끗하고 분위기 있는 곳에서 주방장님이 주시는 오마카세가 땡길때가 있어요.\n 비싸다고 맛있는건 아니지만 한 번 먹으면 못잊는 맛이에요');
            this.result_explain_list.push('샐러드야 말로 진정한 어른의 맛이에요. \n어릴때 왜그렇게 야채를 안 먹었는지 스스로도 이해가 안돼요. \n이젠 건강을 관리해야하기 때문에 샐러드는 내 삶의 필수가 되었어요.');
            this.result_explain_list.push('고기는 땡기지만 삼겹살같이 너무 무거운 건 별로일 때 닭갈비가 딱이에요. \n사실 닭갈비보다 남은 닭갈비에 밥, 치즈, 김가루 까지 넣어 볶아먹는 볶음밥이 진짜에요.');
            this.result_explain_list.push('건강하게는 먹고 싶지만 샐러드로는 배가 안찰때 맛있는 샌드위치로 한끼를 해결해요. \n프랜차이즈 빵집이나 샌드위치 전문집, 또는 수제 샌드위치도 좋아요.\n 건강도 챙기면서 맛도 즐길 수 있어요');
            this.result_explain_list.push('배달하면 바로 생각나는 중국집이에요.\n 단체 주문은 메뉴 통일해서 빠르게 먹는게 중요해요.\n 서비스로 군만두 몇개가 올지 생각하는게 소소한 행복이에요. \n부먹과 찍먹은 알아서 합의 봅시다.');
            this.result_explain_list.push('돈도 시간도 없지만 굶는건 용서가 안돼요. \n요즘 편의점 인스턴트 음식들이 아주 잘나와요. \n편의점 레시피도 많이 나와있으니 빠르고 간단하지만 맛있게 해결할 수 있어요.');
            this.result_explain_list.push('치킨과 양대산맥인 피자에요. \n배달도 좋고 포장주문도 좋아요. \n콜라도 궁합이 좋지만, 요즘은 맥주가 신흥강자로 떠오르고 있어요.\n 오늘은 피맥 어때요?');
            this.result_explain_list.push('치킨이야말로 K-배달음식의 정점이에요. \n닭다리를 양보하는 사이는 찐 사랑인거 아시죠?');
            this.result_explain_list.push('그 돈이면 든든~한 국밥 하나 사먹고 말지! \n아무리 국밥충이니 뭐니 해도 국밥이 가성비 음식하면 원탑이에요. \n맛있고 빠르게 먹을 수 있고 가성비 좋고 이런 음식 찾기 쉽지 않다구요.');
            this.result_explain_list.push('쌀국수는 다이어트에도 좋고 맛도 너무 맛있어요.\n 향신료 향이랑 숙주 향이 아주 매력적이에요.\n해장하기에도 좋은 음식이에요.');
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
    servey.result_explain = servey.result_explain_list[result_index];
    servey.result_name = servey.result_name_list[result_index];
    $('#result_image')[0].src = servey.result_image[result_index];
    $('#intro').hide();
    $('#main').hide();
    $('#loading').hide();
    $('#result').show();
}

function remap(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


