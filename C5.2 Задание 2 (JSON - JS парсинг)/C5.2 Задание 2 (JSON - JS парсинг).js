// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

// Этап 1. Помещаем JSON, который будем парсить, в переменную jsonString
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`
;

// Этап 2. Получение данных
const data = JSON.parse(jsonString);

// console.log(jsonString);
// console.log(data);

// const result = {list:[]};

// Этап 3. Запись данных в результирующий объект
for (let i=0; i< data.list.length; i++){
  data.list[i].age = parseInt(data.list[i].age);
}

console.log(data);