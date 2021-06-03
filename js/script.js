  'use strict';
  

  let game = function (){

   let hiddenNumber = Math.round(Math.random()*100);
   let attempts = 10;
  
  
  let check =  function (){

    let num = prompt('Угадай число от 1 до 100: ');

    if(attempts > 1){
      attempts -= 1;
    }else{
      let status = confirm('Упс.. вы проиграли (:  Хотели бы сыграть еще?');
      if (status === true){
        attempts = 10;
        check();
      }else{
        alert('Не расстраивайтесь, если будите играть чаще у вас точно получится !! ^^');
        return 0;
      }
      
    }

    if (num === null){
      alert('Игра окончена!');

    }else if (num.trim() === '' || isNaN(num)){
      alert('Введите число!');
      check();

    }else if (num <= 100 && num >0){

      if (+num < hiddenNumber){
     alert('Загаданное число больше, осталось попыток : '+ attempts);
     check();
     }else if (+num > hiddenNumber){
       alert('Загаданное число меньше, осталось попыток : '+ attempts);
       check();
    }else{
      let status = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
      if (status === true){
        attempts = 10;
        check();
      }else{
        alert('Хм.. Ну ладно до встречи!!');
        return 0;
      }

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

   
    
    



