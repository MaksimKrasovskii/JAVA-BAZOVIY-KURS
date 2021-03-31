
function func1() {
    var celsius = 32
    var fahrenheit = 115
    var text1 = ' сегодня 7 градусов по цельсию и '
    var text = ' по фаренгейту '

    var temperature = (9 / 5) * fahrenheit + 32;
    temperature = Math.floor(temperature)


    alert(text1 + temperature + text);
}
func1();

function func2() {
    var admin = null;
    var name = 'Василий';

    var admin = admin + name;

    alert(name);
}

func2();