  'use strict';
  

  let game = function (){

   let hiddenNumber = Math.round(Math.random()*100);
  
  
  let check =  function (){

    let num = prompt('Угадай число от 1 до 100: ');

    if (num === null){
      alert('Игра окончена!');

    }else if (num.trim() === '' || isNaN(num)){
      alert('Введите число!');
      check();

    }else if (num <= 100 && num >0){

      if (+num < hiddenNumber){
     alert('Число больше!');
     check();
     }else if (+num > hiddenNumber){
       alert('Число Меньше!');
       check();
    }else{
      alert('Поздравляю, Вы угадали!!!');
    }

    
    }else {
      alert('Введите число от 1 до 100');
      check();
    }
      
 
 
  };  

  check();
  console.dir(check);
};
  

      
 game();

   
    
    



