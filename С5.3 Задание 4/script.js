const submitButton = document.getElementById("submit_button");
const result = document.getElementById("query_result");
const validInput = document.querySelector(".valid_input");

function checkNumRange(num) {
    if (num >= 100 && num <= 300 && !isNaN(num))
        return num;
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    let width = document.getElementById("input_1").value;
    let height = document.getElementById("input_2").value;
    // console.log(inputWidth, inputHeight);
    if (!checkNumRange(width) || !checkNumRange(height)) {
        validInput.textContent = "одно из чисел вне диапазона от 100 до 300";
        console.log("одно из чисел вне диапазона от 100 до 300");
        return;
    } else {
        validInput.textContent = "";
    }

    const url = `https://picsum.photos/${width}/${height}`;
    fetch(url)
        .then((response) => {
            let oldImage = result.querySelector('img');
            if (oldImage) {
                result.removeChild(oldImage);
            }
            let image = document.createElement('img');
            image.src = `${response.url}`;
            result.appendChild(image);
        })
        .catch((error) => {
            result.textContent = "Загрузка не выполнена";
        });
});