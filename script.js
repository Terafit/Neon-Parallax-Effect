'use strict'

//Функция паралакса
function parallax(event) {
    //получаем массив объектов-изображений и вызываем forEach(цикл). layer - очередной элемент массива. Цикл нужен для перебора Массива(чтобы все фота двигались)
    document.querySelectorAll('.back').forEach(layer => {
        //получаем атребут скорости, передаваемый с html
        let speed = layer.getAttribute('data-speed');
        //применяем transform для ээфекта движения. translateX - смещение по оси X. Формула в скобках: кординаты мыши по X * скорость / на число : px
        layer.style.transform = `translateX(${event.clientX * speed / 1000}px)`
    })
}

//отслеживает движение мыши, вызывая обработчик функцию parallax()
document.addEventListener('mousemove', parallax)


//инфа по translateX - https://webref.ru/css/value/translatex