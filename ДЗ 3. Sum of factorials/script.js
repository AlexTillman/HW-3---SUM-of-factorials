//Запрашиваем данные у пользователя

a = +prompt('Введите неотрицательное число a');
while(a < 0) {
    alert('Вы ввели отрицательное число')
    a = +prompt('Введите неотрицательное число a');
}

b = +prompt('Введите число b, которое больше числа a');
while(b <= a) {
    alert('Это число меньше или равняется числу а')
    b = +prompt('Введите число b, которое больше числа a');
}

h = +prompt('Введите шаг');
while(h <= 0) {
    alert('Вы ввели отрицательное число или ноль')
    h = +prompt('Введите шаг');
}

// Создаем переменные для работы с данными



// Запускаем цикл перебора от a до b с шагом h

for (sum = 0; a <= b; a += h) {
    //расчитываем факториал
    c = a;
    f = a;
    if (c) {
        while(c > 1) {
            c--;
            f *= c;
        }
    } else {
        f = 1;
    }
    console.log(f);
    //прибавляем факториал к общей сумме чисел
    sum += f;
}

//Выводим сумму факториалов чисел, которые попадаются во время перебора

console.log(sum);
