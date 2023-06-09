//Задание 1
//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
//Вам понадобятся методы строк.

function ucFirst(str);
let newucFirst = 's';
console.log (newucFirst.toUpperCase(0) + ucFirst);


function ucFirst(str);
console.log (ucFirst.toUpperCase(0) + ucFirst);

//Задание 2
//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
//Функция должна быть нечувствительна к регистру.

function checkSpam(str);
if( checkSpam.includes ('badWord' || 'XXX') {
console.log ('true');
} else {
console.log ('false');
}

//Задание 3
//Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»
//Обратите внимание: метод reverse существует только у массивов.
const ucFirst = ['Даша'];
ucFirst.reverse();
console.log (reverse);

//Задание 4
//Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые 
//машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 
let stations = [
'MAN675847583748sjt567654;Manchester Piccadilly',
'GNF576746573fhdg4737dh4;Greenfield',
'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
'SYB4f65hf75f736463;Stalybridge',
'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];
let name1 = stations.slise (0, 4);
let name2 = stations.slise (0, 4);
let name3 = stations.slise (0, 4);
let name4 = stations.slise (0, 4);
let name5 = stations.slise (0, 4);


//Задание 5
//Напишите функцию, которая проверяет, можержит ли массив элементы, равные нулю. Если да - возвращает true.
//Проверить работу функции на примере массивов [12, 4, 50, 1, 0, 18, 40], [56, 24, -55, 2, 9, -345]
Маленькая интродукция
Задача поиска элемента в массиве стоит перед всеми достаточно часто и хорошо бы расписать, как это можно сделать.

Ищут обычно в массиве элементы типа Number, String или Object. Естественно, самый быстрый способ поиска - по элементам типа Number, сравнение числа, даже очень большого, происходит очень быстро, гораздо проще проверить один элемент, чем лексиграфически сравнивать строки, а с объектами вообще другая история. Если мы ищем именно тот объект, который мы добавили в массив, то есть сравниваем ссылки - это так же быстро, как и сравнивать числа, а вот если же надо искать по свойствам объекта, то это может весьма и весьма затянуться. В особо сложных случаях, советую составлять какой-нибудь хэш объекта и строить отдельным массив-карту, в которой уже спокойно искать всё, что надо найти.

Разберем 6 способов сделать это на нативном JS разной новизны и 3 способа с их разбором на популярных фреймворках: jQuery, underscore и lodash.

Часть первая, нативная, в стиле аллегро
Для начала надо пройтись по родным возможностям языка и посмотреть, что можно сделать самим.

Поиск в лоб
Попробуем просто идти по элементам массива, пока мы не встретим то, что нам нужно. Как всегда самое простое решение является в среднем самым быстрым.

function contains(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}

//Задание 6
//Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
let result (strings);
Array.from(result (strings));
