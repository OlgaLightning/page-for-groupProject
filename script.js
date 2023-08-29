const content = document.getElementById('content');

//TODO Добавить export/import для function range()
const questionsBeginner = [
    {
        'question': 'Что такое TCP/IP, из каких уровней состоят и какие протоколы содержит. (В частности Ethernet, IP, TCP)',
        'input': range()
    },
    {
        'question': 'Что такое HTML. Базовые элементы разметки. Семантика SEO-оптимизация и доступность',
        'input': range()
    },
    {
        'question': 'Что такое CSS. Базовые свойства стилизации. Позиционирование элементов макета. Flexbox. Grid. Адаптивность посредством составления @‌media запросов. Псевдоэлементы и псевдоклассы. Методология БЭМ',
        'input': range()
    },
    {
        'question': 'Основы языка программирования JavaScript. Типы данных. Циклы, Условия, Работа с объектами. Функции. Прототипы и наследование. Работа с объектами. Методы массивов',
        'input': range()
    },
    {
        'question': 'Умеешь ли ты пользоваться программными средствами, аналогичными Slack, для организации коммуникации и совместной работы?',
        'input': range()
    },
    {
        'question': 'Имеешь ли ты практический опыт и навыки работы с инструментами, подобными Trello, для организации рабочих процессов и управления задачами?',
        'input': range()
    }
]

//Убрать эту функцию из файла, когда делаешь страницу в проекте и вместо сделать TODO задание сверху
function range() {
    return '<div class="input indent">' +
        '<input type="range" min="1" max="5" class="slider" value="1">' +
        '<div class="numbers"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>' +
        '</div>' +
        '</div>';
}

//Убрать эту функцию из файла, когда делаешь страницу в проекте и вместо добавить export/import в document.addEventListener
//TODO Вынести этот цикл в отдельный файл и записать в функцию
document.addEventListener("DOMContentLoaded", function (event) {

    for (const question of questionsBeginner) {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = question.question;
        questionDiv.appendChild(questionText);

        questionDiv.innerHTML += question.input;

        content.appendChild(questionDiv);
    }

});



//НЕ ИСПОЛЬЗОВАТЬ!! Another solution for array of questions

//Массив для Новичка
/*const questions = [
    'Что такое TCP/IP, из каких уровней состоят и какие протоколы содержит. (В частности Ethernet, IP, TCP)',
    'Что такое HTML. Базовые элементы разметки. Семантика SEO-оптимизация и доступность',
    'Что такое CSS. Базовые свойства стилизации. Позиционирование элементов макета. Flexbox. Grid. Адаптивность посредством составления @‌media запросов. Псевдоэлементы и псевдоклассы. Методология БЭМ',
    'Основы языка программирования JavaScript. Типы данных. Циклы, Условия, Работа с объектами. Функции. Прототипы и наследование. Работа с объектами. Методы массивов',
    'Умеешь ли ты пользоваться программными средствами, аналогичными Slack, для организации коммуникации и совместной работы?',
    'Имеешь ли ты практический опыт и навыки работы с инструментами, подобными Trello, для организации рабочих процессов и управления задачами?'
]

//Отдельный файл - применить export/import на страницах с вопросами

document.addEventListener("DOMContentLoaded", function (event) {
    questions.forEach(item => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionTextElement = document.createElement('p');
        questionTextElement.textContent = item;

        questionDiv.appendChild(questionTextElement);
        questionDiv.innerHTML += range();

        content.appendChild(questionDiv);
    });
    /*for (let i = 2; i < 4; i += 1) {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = questions[i];
        const questionElement = document.createElement('p');
        questionElement.textContent = questionText;

        questionDiv.appendChild(questionElement);
        questionDiv.innerHTML += range();

        content.appendChild(questionDiv);
    }
})*/