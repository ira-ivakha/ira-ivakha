/**
 * Created by dell on 19.11.17.
 */
var result = [], answer = [], trueRes = 0;
var number;

document.getElementById('start').onclick = function () {
    document.getElementById('question-wrapper').innerHTML = '';
    number = document.getElementById('number').value;
    timeout();
    result = [];
    var isDivision = (document.getElementById('division').checked)? true : false;
    var isAll = (document.getElementById('all').checked)? true : false;
    console.log('isdiv ',isDivision);
    var item1, item2, count = 0;
    var operSymbol;
    for(var i=0; i<number; i++) {
        item1 = Math.floor((Math.random() * 9) + 1);
        item2 = Math.floor((Math.random() * 9) + 1);
        operSymbol = '*';
        if (isAll) isDivision = Math.floor((Math.random() * 2) );
        console.log(isDivision);
        operResult = item1*item2;
        if (isDivision) {
            var tmpResult = item1;
            item1 = operResult;
            operResult = tmpResult;
            operSymbol = ':';

        }
        result.push(operResult);
        var answerWrapper = document.createElement('div');
        answerWrapper.className = 'answer-wrapper';
        var question = document.createElement('span');
        question.className = 'question';
        question.innerHTML+= ' '+item1+' '+operSymbol+' '+item2+' = ';

        var answerInput = document.createElement('input');
        answerInput.type='number';
        answerInput.className = 'answer';
        answerInput.setAttribute('id', 'answer'+i);
        answerWrapper.appendChild(question).appendChild(answerInput);
        document.getElementById('question-wrapper').appendChild(answerWrapper);

    }
};

document.getElementById('submit-question').addEventListener('click', function(){
    trueRes = 0;
    answer = [];
    for (var i=0; i<number; i++) {
        answer.push(document.getElementById('answer'+i).value);
        if (answer[i] == result[i]) {
            trueRes++;
            document.getElementById('answer'+i).classList.remove('error');
        }
        else {
            document.getElementById('answer'+i).classList.add('error');
        }
    }
    document.getElementsByClassName('results-show')[0].classList.add('shown');
    document.getElementById('trueres').innerHTML = trueRes;
    document.getElementById('allres').innerHTML = number;
    document.getElementById('sec-count').innerHTML = document.getElementById("seconds").innerHTML;
    document.getElementById("min-count").innerHTML = document.getElementById("minutes").innerHTML;
});

function  timeout () {

    var sec = 0;
    function pad ( val ) { return val > 9 ? val : "0" + val; };

    setInterval(function (){
        document.getElementById("seconds").innerHTML=pad(++sec%60);
        document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
    }, 1000);

}


