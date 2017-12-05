/**
 * Created by dell on 03.12.17.
 */
var products = $('#fifteen'),
    productsNode = document.getElementById('fifteen'),
    draggedProduct,
    shuffle = $('#shuffle');

$('#fifteen li')
    .attr('draggable', 'true')
;

document.addEventListener('DOMContentLoaded', function() {

    placesRewrite($('#fifteen li'));

    products
        .on('dragstart', dragstart)
        .on('dragover', dragover)
        .on('dragleave', dragleave)
        .on('drop', drop)
    ;

    shuffle.on('click', shuffleTales);

}, false);



function dragstart(event) {
    draggedProduct = event.target;
}

function dragover(event) {
    event.preventDefault();
}
function dragleave(event) {
}

function drop(event) {
    checkIfDraggable(draggedProduct);
    checkIfWin();
    placesRewrite();
}

function placesRewrite() {
    var verticalPos =0,
        horisontalPos = 0;
    var product = $('#fifteen li');
    product.each(function(){
        this.setAttribute('data-vertical',verticalPos);
        this.setAttribute('data-horisontal', horisontalPos);
        verticalPos++;
        if (verticalPos >=4) {
            horisontalPos++;
        }
        verticalPos = verticalPos%4;
    });
}

function checkIfWin() {
    var checker = 0;
    var product = $('#fifteen li');
    for (var i=0; i<=15; i++) {
        if (parseInt(product[i].getAttribute('data-id')) === i+1) checker++;
    };
    if (checker === 16) {
        console.log('WIN!');
        document.getElementById('congrats').classList.add('win');
    };
}

function shuffleTales (){

    var siblingDataId  = 0;
    var product = $('#fifteen li');
    var i = 0;
    product.each(function(){
        siblingDataId = Math.floor((Math.random() * 15) + 1);
        console.log(productsNode, product[i], siblingDataId, document.querySelector('[data-id="'+siblingDataId+'"]'));
        productsNode.insertBefore(product[i], document.querySelector('[data-id="'+siblingDataId+'"]'));
        i++;
    });

    placesRewrite(product);
}

function checkIfDraggable(draggedProduct) {
    var product = $('#fifteen li');;
    var vPos = draggedProduct.getAttribute('data-vertical'),
        hPos = draggedProduct.getAttribute('data-horisontal'),
        targetProduct = document.getElementById('empty'),
        vTarget = targetProduct.getAttribute('data-vertical'),
        hTarget = targetProduct.getAttribute('data-horisontal');

    console.log('hor',hPos, hTarget, hPos - hTarget, draggedProduct, targetProduct);

    if (((((hPos - hTarget) == 1 ) || (hTarget - hPos == 1) ) && (vTarget - vPos == 0 )) ||
        ((((vPos - vTarget) == 1 ) || (vTarget - vPos == 1) ) && (hTarget - hPos == 0 ))) {
        var emptySibling = draggedProduct.nextSibling;
        if (emptySibling !== null)  {
            productsNode.insertBefore(draggedProduct, targetProduct);
            productsNode.insertBefore(targetProduct, emptySibling );
        }
        else {
            products.append(draggedProduct);
        }

    };

}