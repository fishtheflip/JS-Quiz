const data = [
    {   
        id: "1",
        question: "Внутрь какого HTML тега помещается JavaScript код?",
        variable1: "<scripting>",
        variable2: "<script>",
        variable3: "<javascript>",
        variable4: "<code>",
        trueAnswer: "variable2",
    },
    {   
        id: "2",
        question: "Язык Javascript чувствительный к регистру?",
        variable1: "Да",
        variable2: "Нет",
        variable3: "Нет правильного ответа",
        variable4: "При добавлении модулей в код может быть как да, так и нет",
        trueAnswer: "variable1",
    },
    {   
        id: "3",
        question: "Какое из этих деклараций устарела?",
        variable1: "let",
        variable2: "const",
        variable3: "var",
        variable4: "Ни один из перечисленых",
        trueAnswer: "variable3",
    },
    {   
        id: "4",
        question: "Как правильно объявлять переменную?",
        variable1: "variable a;",
        variable2: "Var a; ",
        variable3: "var a;",
        variable4: "a var",
        trueAnswer: "variable3",
    },
    {   
        id: "5",
        question: "Как объявить строгий режим в Javascript?",
        variable1: " 'strict use'",
        variable2: " 'use of strict' ",
        variable3: " 'use = strict' ",
        variable4: "'use strict'",
        trueAnswer: "variable4",
    },    {   
        id: "6",
        question: "Что такое DOM?",
        variable1: "DOM – это представление HTML-документа в виде дерева тегов",
        variable2: "DOM – это представление JavaScript-кода в виде дерева тегов",
        variable3: "DOM – это расширение для CSS",
        variable4: "DOM – это фреймворк для javaScript",
        trueAnswer: "variable1",
    },
    {   
        id: "7",
        question: "Что не является фреймворком для Javascript?",
        variable1: "Angular",
        variable2: "Jquery",
        variable3: "Vue",
        variable4: "React",
        trueAnswer: "variable4",
    },
    {   
        id: "8",
        question: "Что делает оператор ** ?",
        variable1: "Возводит в степень",
        variable2: "Умножает сам на себя",
        variable3: "Конкатенирует",
        variable4: "Такого оператора не существует",
        trueAnswer: "variable1",
    },
    {   
        id: "9",
        question: `Правда ли что a == b если: a = [1, 2, 3], b = [1,2,3] ?`,
        variable1: "Да",
        variable2: "Нет",
        variable3: "Выведет ошибку",
        variable4: "В зависимости от браузера",
        trueAnswer: "variable2",
    },
    {   
        id: "10",
        question: "Что возвращает свойство length?",
        variable1: "Не существует данного свойства",
        variable2: "Размер кэш-файла",
        variable3: "Число узлов в DOM дереве",
        variable4: "Число элементов в массиве",
        trueAnswer: "variable4",
    },
    {
        id: "11",
        question: "Самый быстрый способ преобразовать строчку в число?",
        variable1: "Оператор '+' ",
        variable2: "Функция Number()",
        variable3: "Функция ToNumber()",
        variable4: "Такого способа не существует",
        trueAnswer: "variable1",
    },
    {
        id: "12",
        question: "Как можно создать объект?",
        variable1: "let obj = {} ",
        variable2: "let obj = new Object()",
        variable3: "let obj = Object.create(null)",
        variable4: "Все перечисленные методы",
        trueAnswer: "variable4",
    },
    {
        id: "13",
        question: "Как правильно объявить стрелочную функцию?",
        variable1: "const func() => {}",
        variable2: "const func => {}",
        variable3: "const func = () => {}",
        variable4: "const func ==> {}",
        trueAnswer: "variable3"
    },
    {
        id: "14",
        question: "Что выведет console.log(!!null)?",
        variable1: "true",
        variable2: "false",
        variable3: "null",
        variable4: "undefined",
        trueAnswer: "variable2"
    },
    {
        id: "15",
        question: "Какой метод проверяет принадлежит ли указанное свойство к объекту или нет?",
        variable1: "instanceof",
        variable2: "typeof",
        variable3: "hasOwnProperty",
        variable4: "valueOf",
        trueAnswer: "variable3"
    },
    {
        id: "16",
        question: "Что выведит console.log(0.1 + 0.2 === 0.3)",
        variable1: "true",
        variable2: "false",
        variable3: "undefined",
        variable4: "NaN",
        trueAnswer: "variable2"
    },
    {
        id: "17",
        question: "Что означает термин hoisting?",
        variable1: "Оптимизация переменной или функции в глобальную или функциональную области видимости",
        variable2: "Удаление переменной или функции в глобальную или функциональную области видимости",
        variable3: "Скрытие переменной или функции в глобальную или функциональную области видимости",
        variable4: "Подъем переменной или функции в глобальную или функциональную области видимости",
        trueAnswer: "variable4"
    },
    {
        id: "18",
        question: "Какие значение являются ложными?",
        variable1: "0",
        variable2: "false",
        variable3: "undefined",
        variable4: "Все ответы",
        trueAnswer: "variable4"
    },
    {
        id: "19",
        question: "Что такое промисы (Promises)?",
        variable1: "Это один из способов объявления функций в JS",
        variable2: "Это одна из парадигм в JS",
        variable3: "Это один из приемов работы с асинхронным кодом в JS",
        variable4: "Это один из способоы объявления переменных в JS",
        trueAnswer: "variable3"
    },
    {
        id: "20",
        question: "Что означает операор '%' ?",
        variable1: "Процент от числа",
        variable2: "Остаток от деления",
        variable3: "Возведение в степень",
        variable4: "Возведение в куб",
        trueAnswer: "variable2"
    },



    

    

];


export default data;