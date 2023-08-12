document.getElementById('buttonRequest').addEventListener('click', function() {
let number = parseInt(document.getElementById('inputNumber').value);
let limit = parseInt(document.getElementById('inputLimit').value);
let result = document.getElementById('result');
      result.innerHTML = '';
      
  if ((isNaN(number) || number < 1 || number > 10) && (isNaN(limit) || limit < 1 || limit > 10)) {
        result.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
        return;
      }

  if (isNaN(number) || number < 1 || number > 10) {
        result.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
        return;
      }

  if (isNaN(limit) || limit < 1 || limit > 10) {
        result.innerHTML = 'Лимит вне диапазона от 1 до 10';
        return;
      }
                
let url = 'https://picsum.photos/v2/list?page=' + number + '&limit=' + limit;
      fetch(url)
        .then(function(response) {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Ошибка при выполнении запроса: ' + response.status);
          }
        })
        .then(function(data) {
          for (let i = 0; i < data.length; i++) {
            let image = document.createElement('img');
            image.src = data[i].download_url;
            result.appendChild(image);
          }
        })
        .catch(function(error) {
          result.innerHTML = 'Произошла ошибка: ' + error.message;
        });
    });

