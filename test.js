var test = new Vue({
    el: '#test',
    data:{
        intro: '당신의 오늘은 어떤가요? \n 당신에게 맞는 음식을 테스트해보세요',
        title: '오늘의 음식',
        index: 0,
        question: ['나는 매운 음식을'],
        answer1: ['신라면도 나에겐 고난'],
        answer2: ['불닭볶음면은 귀여운 수준'],
        result: '맵찔이입니다',
        image:['question_0.png'],
        current:['1/9','2/9','3/9','4/9','5/9','6/9','7/9','8/9','9/9']
    },
    mounted: function() {
        $('#intro').show();
        $('#main').hide();
        $('#result').hide();
        //question
        //this.question.push('1. 나는 매운 음식을');
        //this.answer.push(['신라면도 나에겐 고난','불닭볶음면은 귀여운 수준']);
    },
    methods: {
        start: function() {
            $('#intro').hide();
            $('#main').show();
            $('#result').hide();
        }
    }
});

