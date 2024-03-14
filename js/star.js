// // Отримання всіх зірочок
// const stars = document.querySelectorAll('.star');

// // Зміна рейтингу при натисканні на зірочку
// stars.forEach(star => {
//   star.addEventListener('click', function() {
//     const value = parseInt(this.getAttribute('data-value'));
//     setRating(value);
//   });
// });

// // Функція для встановлення рейтингу
// function setRating(value) {
//   const rating = document.getElementById('rating');
//   rating.setAttribute('data-rating', value);

//   // Оновлення зірочок в залежності від значення рейтингу
//   stars.forEach(star => {
//     const starValue = parseInt(star.getAttribute('data-value'));
//     if (starValue <= value) {
//       star.classList.add('selected');
//     } else {
//       star.classList.remove('selected');
//     }
//   });

//   // Тут ви можете реалізувати логіку для оновлення рейтингу на сервері
//   // Наприклад, відправляти нове значення рейтингу на сервер або виконувати інші дії.
// }
