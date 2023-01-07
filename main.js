const navIconEl = document.querySelector('.nav__icon');
const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');

const navOpen = ()=>{
  navList.classList.add('show');
  navBgOverlayEl.classList.add('active');
  document.body.style =`visibility: visible; height: 100vh; width: 100vw; overflow: hidden;`;
}
const navClose = ()=>{
  navList.classList.remove('show')
  navBgOverlayEl.classList.remove('active');
  document.body.style = `visibility: visible; height: initial; width: 100%; overflow-x: hidden;`;
}

navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
navBgOverlayEl.addEventListener('click', navClose);

// aos
AOS.init({
  offset: 200,
  delay: 100,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom'
});

// //1  ES5
// function User(username, email){
//   this.username = username;
//   this.email = email;
// }
// User.prototype.changeEmail = function(newEmail){
//   this.email = newEmail;
// }
// var user = new User("Amir", "info@parsclick.net");
// user.changeEmail('karim@aghan.af');
// console.dir(user);

// //2 ES6
// class User_2{
//   constructor(username, email){
//     this.username = username;
//     this.email = email;
//   }
//   changeEmail(newEmail){
//     this.email = newEmail;
//   }
// }
// let user_1 = new User_2('Ali', 'ali@gmail.com');
// user_1.changeEmail('noori@hotmail.com');
// console.dir(user_1);

// // 3

// class User_3{
//   constructor(user, email){
//     this.user = user;
//     this.email = email;
//   }
//   changeEmail(newEm){
//     this.email = newEm;
//   }
//   static register(username, email){
//     return new User_3(username, email);
//   }
// }
// let user_3 = User_3.register('Hasib', 'info@hasib.af');
// user_3.changeEmail('habibtamkin30@gmail.com');
// console.dir(user_3)

// // 4
// class User_3{
//   constructor(user, email){
//     this.user = user;
//     this.email = email;
//   }
//   changeEmail(newEm){
//     this.email = newEm;
//   }
//   static register(...args){
//     return new User_3(...args);
//   }
// }
// let user_3 = User_3.register('Hasib', 'info@hasib.af');
// user_3.changeEmail('habibtamkin30@gmail.com');
// console.dir(user_3)

// // 4 get set

// class User_3{
//   constructor(user, email){
//     this.user = user;
//     this.email = email;
//   }
//   changeEmail(newEm){
//     this.email = newEm;
//   }
//   static register(...args){
//     return new User_3(...args);
//   }
//   get username(){
//     return this.username;
//   }
//   set username(username){
//     return this.username = username;
//   }
// }
// let user_3 =new User_3('Hasib', 'info@hasib.af');
// user_3.username();
// console.dir(user_3)

// // 5 error handle

// function log(strategy){
//   strategy.handle();
// }
// log(new class{
//   handle(){
//     console.log('Handled my alert');
//   }
// })

