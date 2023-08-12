/*Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.*/

//помещаем XML-заготовку в переменную
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <first2>Ivanovich</first2>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <first2>Петрович</first2>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`
;


//создаем экземпляр класса
const parser = new DOMParser();
//парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const students = xmlDOM.querySelectorAll("student");
// создаем пустой массив и помещаем его в переменную result
const result = { list: [] };


// в переборе "студентов" получаем все DOM-ноды
students.forEach((student) => {
  const nameNode = student.querySelector("name");
  const firstNode = nameNode.querySelector("first");
  const first2Node = nameNode.querySelector("first2");
  const secondNode = nameNode.querySelector("second");
  const ageNode = student.querySelector("age");
  const profNode = student.querySelector("prof");
  const langAttr = nameNode.getAttribute("lang");

 // в переменную name помещаем имя + отчетво + фамилию 
  const name = `${firstNode.textContent} ${first2Node.textContent} ${secondNode.textContent}`;
 // наполняем массив result
  result.list.push({
    name,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr,
  });
});

console.log(result);
