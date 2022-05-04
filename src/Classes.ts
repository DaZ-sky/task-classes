/*
Реализуйте класс Counter:
- Значение счётчика хранится в поле counter: number. Значение поля по умолчанию: 0
- В конструктор можно передать параметр start: number - начальное значение счётчика.
- Класс должен иметь метод increment, который увеличивает counter на 1 и возвращает результат
- Класс должен иметь метод decrement, который уменьшает counter на 1 и возвращает результат
 */
export class Counter {
    counter: number;
    constructor(start: number = 0){
        this.counter = start;
    }
    increment(): void{
        this.counter += 1;
    }
    decrement(): void{
        this.counter -= 1;
    }
}
