
//ЗАДАНИЕ № 1
console.log('Задание № 1 ОТВЕТ');
        
let max = 999;
let digit = {
  number: Math.round(Math.random() * max), /*запрос у пользователя +prompt('Введите число от 0 до 999'),*/
  units: 0,
  dozens: 0,
  hundredths: 0,
};
if (digit.number <= 22){
  digit.units = digit.number;
} else if (digit.number <= 999){
  digit.units = Math.floor(digit.number % 10);
  digit.dozens = Math.floor(digit.number / 10 % 10);
  digit.hundredths = Math.floor(digit.number / 100 % 10);
} else {
	digit.number = 0;
	console.log('Ваше число не соответсвует диапозону от  0 до 999');
}
console.log(digit);

//ЗАДАНИЕ № 2
console.log('Задание № 2 ОТВЕТ');

/**
 * Объект с настройками игры.
 * @property {int} rowsCount Количество строк в карте.
 * @property {int} colsCount Количество колонок в карте.
 */
 const config = {
    rowsCount: 10,
    colsCount: 10,
};

/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним.
 * @property {int} x Позиция по X-координате.
 * @property {int} y Позиция по Y-координате.
 */
const player = {
    x: 0,
    y: 0,

    /**
     * Двигает игрока по переданному направлению.
     * @param {{x: int, y: int}} nextPoint Следующая точка пользователя.
     */
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },
};

let renderer = {
    // Сюда запишем все что надо отобразить.
    map: "",

    /**
     * Отображает игру в консоли.
     */
    render() {
        // Цикл перебирает все строки, которые надо отобразить.
        for (let row = 0; row < config.rowsCount; row++) {
            // В каждой строке отображаем для каждой колонки (x - клетка, o - игрок).
            for (let col = 0; col < config.colsCount; col++) {
                // Проверяем, если на данной позиции должен быть и игрок, отображаем игрока, если нет - клетку.
                if (player.y === row && player.x === col) {
                    this.map += 'o ';
                } else {
                    this.map += 'x ';
                }
            }
            // После того как отобразили всю строку делаем переход на следующую строку.
            this.map += '\n';
        }

        // Выводим все что надо отобразить в игре.
        alert(this.map);
    },

    clear() {
        // Чистим консоль.
        console.clear();
        // Чистим карту.
        this.map = "";
    }
};

let mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        // Доступные значения ввода.
        const availableDirections = ['w', 'a', 's', 'd'];

       /* while (true) {
            // Получаем от пользователя направление.
            let direction = prompt('Введите букву (w, a, s или d), куда вы хотите переместиться, "Отмена" для выхода.');
            if (!direction) {
				if (availableDirections.includes(direction)) {
					return direction;
				} else {
					alert('Для перемещения необходимо ввести одну из букв w, a, s или d.');
					continue;
				}
			} else {
                return null;
            }
		}
	},*/

	while (true) {
		// Получаем от пользователя направление.
		let direction = prompt('Введите букву (w, a, s или d), куда вы хотите переместиться, "Отмена" для выхода.');
		if (!direction) {
			return null;
			} 
			if (availableDirections.includes(direction)) {
				alert('Для перемещения необходимо ввести одну из букв w, a, s или d.');
					continue;
		}
		return direction;
	}
},

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        // Следующая точка игрока, в самом начале в точке будут текущие координаты игрока.
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        // Определяем направление и обновляем местоположение игрока в зависимости от направления.
        switch (direction) {
            case 's':
                nextPosition.y++;
                break;
            case 'a':
                nextPosition.x--;
                break;
            case 'd':
                nextPosition.x++;
                break;
            case 'w':
                nextPosition.y--;
                break;
        }

        return nextPosition;
    },
};

let game = {
    /**
     * Запускает игру.
     */
    run() {
        // Бесконечный цикл
        while (true) {
            // Получаем направление от игрока.
            const direction = mover.getDirection();

            // Если игрок сказал что хочет выйти, то игра заканчивается.
            if (direction === null) {
                alert("Игра окончена.");
                return;
            }
            // Получаем следующую точку пользователя в зависимости от направления.
            const nextPoint = mover.getNextPosition(direction);

            renderer.clear();
            player.move(nextPoint);
            renderer.render();

        }
    },

    // Этот метод выполняется при открытии страницы.
    init() {
        console.log("Ваше положение на поле в виде о.");
        // Отображаем нашу игру.
        renderer.render();
        alert("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();

//ЗАДАНИЕ № 3
alert("Добро пожаловать в игру «Кто хочет стать миллионером?»");

    let questions = [ //questionList
      'Сколько в комнате кошек, если в каждом из четырех углов сидит по кошке, а напротив каждой кошки сидит по кошке?',
      'Крышка стола имеет четыре угла. Один из них отпилили. Сколько углов стало?',
      'Сколько нужно сделать распилов, что бы распилить бревно на 12 частей?',
      'Каким числом является сумма натуральных чисел?',
      'Сколько граней у незаточенного карандаша?',
      'Говорят, что математика — царица всех наук, а царица математики...',
	  'Из двух селений навстречу друг другу выехали два велосипедиста: первый со скоростью 20 км/ч, второй — 15 км/ч. Чему будет равно расстояние между ними через 2 ч после встречи?',
      ' Условный знак для обозначения чисел — это...',
      'Кто сказал слова: «Математику уж затем учить надо, что она ум в порядок приводит»?',
	  'Прибор для измерения углов на местности называется...'];

    let money = [1000, 5000, 10000, 'первую несгораемую сумму 50 000', 100000, 200000, 400000,
                'вторую несгораемую сумму 800000', 1500000, 3000000]; //gain

    let answers = [['A: 12 B: 16 C: 4  D: 8 '],['A: 4 B: 3 C: 5 D: 6 '],['A: 11 B: 12 C: 10 D: 6'],
                  ['A: целым B: натуральным C: положительным D: отрицательным'],['A: 5 B: 8 C: 6 D: 10'],
                  ['A: Геометрия B: Арифметика C: Алгебра D: Тригонометрия'],['A: 70 км B: 20 км C: 0 D: 35 км'],
				  ['A: точка B: тире C: цифра D: корень'],['A: Жириновский B: Ломоносов C: Ленин D: Аристотель'],
                  ['A: транспортир B: астролябия C: линейка D: экер']];
                  
    let right = ['C','C','A','B','B','B','A','C','B','B']; //correct

    let a = 0;
    let b = 1;
    for(let i = 0; i < 10; i++) {
    var answer = prompt('Вопрос ' + b + ': ' + questions[i]+'\r\n'+ 'Варианты ответа: \r\n' + answers[0] + '\r\n' + 'Ваш ответ?');
    if(answer.toUpperCase() == right[0]) {
    alert('Поздравляю вы выиграли ' + money[a] + ' рублей');
    a++;
    b++;
    answers.shift(0);
    right.shift(0);
    }else if (money[a] >= 100000){
    alert('Ответ неправильный. Вы выиграли ' + money[7] + ' рублей'); 
    break;
    }else if (money[a] >= 10000){
    alert('Ответ неправильный. Вы выиграли ' + money[3] + ' рублей'); 
    break;
    }else{
    alert('Ответ неправильный');
    break;
    }
    }