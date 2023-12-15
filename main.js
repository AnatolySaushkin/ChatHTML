function greeting() {
    let name = prompt("Привет, как тебя зовут?", "Введите свое имя");
    alert(`Приятного пользования HTML-страницей, ${name}!`);
}

greeting()

function send() {
    let message = document.getElementById('message').value
    
    if (message == '') {
        document.getElementById('errors').innerText = 'Вы забыли ввести сообщение'
        return
    }
    document.getElementById('errors').innerText = ''
    document.getElementById('message').value = ''
    document.getElementById('messages').innerText = message
}



