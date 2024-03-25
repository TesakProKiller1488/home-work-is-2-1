document.getElementById('addButton').addEventListener('click', function() {
    // Собираем данные из полей ввода
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Создаем элемент для карточки пользователя и добавляем информацию
    const userCard = document.getElementById('userCard');
    userCard.innerHTML = `<div class="user-info">
        <p>Имя: ${firstName}</p>
        <p>Фамилия: ${lastName}</p>
        <p>Адрес: ${address}</p>
        <p>Телефон: ${phone}</p>
        <p>Email: ${email}</p>
    </div>`;
});
