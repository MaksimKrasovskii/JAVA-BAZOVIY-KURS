
function func1() {
    var celsius = 7
    var fahrenheit = (9 / 5) * celsius + 32;

    fahrenheit = Math.floor(fahrenheit);


    alert('Сегодня ' + celsius + 'градусов по цельсию и ' + fahrenheit + 'по фаренгейту ');
}

func1();

function func2() {
    var admin = null;
    var name = 'Василий';

    var admin = admin + name;

    alert(name);
}

func2();