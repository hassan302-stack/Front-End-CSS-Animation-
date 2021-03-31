
//var age =prompt('Enter Your Age');
//  Lacture 01
/*if(age > 10 && age <20){
console.log(name +' is a teenager ')

}else if(age > 20 && age <30){
    console.log(name +' is a man ')
    
    }
    else if(age >30 && age < 40){
        console.log(name +' is a younger ');
    }

    var currentage=age >= 40 && age < 50? name + " is older " :age >=50 && age<60? name+" is saint " : console.log;

    console.log(currentage);
  */
// Lacture 02    
/*switch(true){
    case  age > 10 && age <20 :
    console.log(name +' is a man ');
      break;
    case age > 20 && age <30:
    console.log(name +' is a man ');
         break;
    case age >30 && age < 40 :
    console.log(name +' is a younger ');
    break;
    default :
    console.log(name+" is saint " );

}
*/
//coding challenge 2
/*var Jt1 =108 ,Jt2=50 ,Jt3 =78 ;
var Mt1 =128 ,Mt2=40 ,Mt3 =68 ;
var Ht1 =108 ,Ht2=88 ,Ht3 =100 ;
 
var avg_jt = Jt1+Jt2+Jt3/(3);
var avg_mt = Mt1+Mt2+Mt3/(3);
var avg_ht = Ht1+Ht2+Ht3/(3);

 var result = avg_mt > avg_jt && avg_mt>avg_ht ? avg_mt + ' mike time winner  ': avg_jt>avg_ht && avg_jt>avg_mt ? avg_jt +' john team winner  ' : avg_ht+' Hassan team is winner ' ;

         console.log(result);
        */

// Lacture 03 Functions
/*function retage(age){
      var retage =60 - age;
           return retage ;
}
function status (name , job, retirement){
     var retie= retage(retirement);
     switch (job) {
       case 'teacher':
       return name + ' is a good teacher' +' service left ' + retie +' years' ;
       
       case 'designer':
        return name + ' is a web designer' +' service left ' + retie +' years' ;

        case 'driver':
          return name + ' is a good driver' +' service left ' + retie +' years' ;

     }
}

console.log(status('hassan','designer',20) );
console.log(status('Ali','driver', 40));
console.log(status('Rida','teacher',30));
*/


// coding chellenge 3
/*function tipcalculator(amount){
      var res=amount < 50 ?  0.2*amount : amount >50 && amount<200? 0.15*amount :amount>200? 0.10*amount :console
    //   var finalamount =[amount+res];
      // console.log(finalamount);
         return res;  

}

var bill =[40,80,280];
 var tips=[tipcalculator(bill[0]),
            tipcalculator(bill[1]),
            tipcalculator(bill[2])];
console.log('tips are: '+ tips);


var finalamount =[bill[0]+ tips[0],bill[1]+ tips[1],bill[2]+ tips[2]];
                  
console.log('Final ammouts are: '+finalamount);
*/
// Lacture 04
// Creating object and its types 
/*var hassan = new Object();
hassan.firstname = 'Hassan Kazmi';
hassan.job = 'student';
hassan.lastname = 'Shah'
hassan.age = 22;
hassan.familymembers = ['fizza', 'amjad'];
hassan.Hbmi = function(){
  return 'It is working really!!!!!!';
}
//console.log(hassan, hassan.familymembers);
console.log(hassan.Hbmi());
var Ali = {
  firstname: 'waqas',
  job: 'student',
  lastname: 'Shah',
  age: 22,
  familyMembers: ['Marzia', 'Anyee'],
      res :   function (abc) {
       return 'It is working really' +' '+ abc;
      
      }
};
console.log(Ali.res('hassan'));
*/
//------------------------------------------------------------------------------------------------------------
// Lacture 05
// object and method using this keyword store attribute in object and retirve without passing paramerter

/*
  var hassan= {
    firstName : 'Hassan',
    lastName : 'Kazmi',
    birth: 1998,
    calcAge : function(){
       this.age = 2020 - this.birth;
        
    }

  }
hassan.calcAge();
console.log(hassan);
*/
//-------------------------------------------------------------------------------------------------
// Coding Chalenge 04
/*
var John ={
    name : 'john',
    mass: 50,
    height:3,
      JohnBmi: function(){
     return   this.Johnbmi= this.mass/(this.height*this.height);
      }


};
var Mark ={
  name : 'mark',
  mass: 60,
  height:2,
  MarkBmi: function(){
  return  this.Markbmi= this.mass/(this.height*this.height);
  }


};
Mark.MarkBmi();
John.JohnBmi();
if(Mark.MarkBmi() > John.JohnBmi()){
  console.log(Mark.name +' bmi is greater than John');
}
console.log(Mark);
console.log(John);

*/
// Coding Challenge 05
/*
var Johnbills ={
   John_rest_bills:[124,268,48,180,42],
    
    tipcalculator : function(){
      this.John_caltips=[];
      this.John_calfinnal=[];
       for (i=0 ; i<=this.John_rest_bills.length-1; i++ ){
        var perc;
           var billing=this.John_rest_bills[i];    
                    if(billing <50){
                          perc = 0.2;

                    }
                  else if(billing>50&& billing<200){
                       perc =.15;
                      }
                             this.John_caltips[i] = perc*billing;
                             this.John_calfinnal[i] = perc*billing+billing;  
                
       }
   }

}
var Markbills ={
  Mark_rest_bills:[120,168,288,380,142],
   
   tipcalculator : function(){
     this.Mark_caltips=[];
     this.Mark_calfinnal=[];
      for (i=0 ; i<=this.Mark_rest_bills.length-1; i++ ){
       var perc;
          var billing=this.Mark_rest_bills[i];    
                   if(billing <50){
                         perc = 0.2;

                   }
                 else if(billing>50&& billing<200){
                      perc =.15;
                     }
                            this.Mark_caltips[i] = perc*billing;
                            this.Mark_calfinnal[i] = perc*billing+billing;  
               
      }
  }

}

var calAvg=function(){
  var Jsum=0;
var Msum=0;
    var Javg=0;
    var Mavg=0;
      for(i=0; i<Johnbills.John_rest_bills.length; i++){
        var val = Johnbills.John_rest_bills[i]; 
       Jsum=Jsum+val;
       
}
Johnbills.Javg=Jsum/Johnbills.John_rest_bills.length;
   
for(i=0; i<Markbills.Mark_rest_bills.length; i++){
  var val = Markbills.Mark_rest_bills[i]; 
           Msum=Msum+val;

}
Markbills.Mavg=Msum/Markbills.Mark_rest_bills.length;
if(Johnbills.Javg>Markbills.Mavg){
   return Johnbills.Javg +' : John Avg is Greater than ' + Markbills.Mavg +' Marks ' ;
}else{

  return Markbills.Mavg +' : Mark Avg is Greater than ' + Johnbills.Javg +' John ' ;
}

}
console.log(Johnbills.John_rest_bills);
console.log(Markbills.Mark_rest_bills);
Johnbills.tipcalculator();
Markbills.tipcalculator();
console.log(Johnbills);
console.log(Markbills);

console.log(calAvg());
*/
// Scoping Chain 
/*
var a ='Hello';
first();
function first(){
  
       var b = 'Hi';
       second();
function second(){
         
        
        var c = 'Hye'; 
        four();
        third();
        console.log(a+b+c);
function third(){
          
          var d= 'Ali';
          four();
          console.log(a+b+c+d);
          
          }
      }
}

function four(){
 
var e= 'HASSAN';

console.log(a+' '+e);
}
*/

// This keyword

// Regular function =this keyword as Window Object
// method = this keyword as corresponding Object
// inner funcction as regular function = Window object 


/*function test() {
  ad = 45;
  console.log(this);         // Regular function =this keyword as Window Object
}

var john = {
  name: 'john',
  BirthDay: 1990,

  calAge: function () {
    console.log(2020 - this.BirthDay);   
    console.log(this);             // method = this keyword as corresponding Object
  
  }
}
   var mike={
           name: 'Mike',
           BirthDay: 1998,                 // proof method = this keyword as corresponding Objects
                                           // this become a mike object
   }
 mike.calculateage =john.calAge; //Bowring Function ,Here john.calage assinging same function to mike.calulateage
 mike.calculateage();
john.calAge();
test();
*/
// PIG Game 
var score, current, activePlayer, checkdice, setName1, setName2, final_score;
var winnigscore = 0;
checkdice = 0;
var gamePlying = true; // State initializer variable

newGame();
if (gamePlying) {
  setName1 = prompt("Enter Player 1 Name");
  setName2 = prompt("Enter Player 2 Name");
  document.querySelector('#name-0').textContent = setName1;
  document.querySelector('#name-1').textContent = setName2;
  console.log(setName1, setName2);

}

//document.querySelector('.dice').style.display ='none';

document.querySelector('.btn-roll').addEventListener('click',function () {
  if (gamePlying) {
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice1 = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice1').style.display = 'block';
    document.querySelector('.dice').src = 'dice-' + dice + '.png';
    document.querySelector('.dice1').src = 'dice-' + dice1 + '.png';

    final_score = document.getElementById('Final-score').value;
    console.log(final_score);
    // 0 , Null,undefine false so, input empty    

    if (final_score) {
      winnigscore = final_score;

    } else {
      winnigscore = 20;
    }
    if (dice === 6 && checkdice === 6) {
      nextPlayer();
      current = 0;
      checkdice = 0;
      document.querySelector('#current-' + activePlayer).textContent = '0';

    }
    else if (dice !== 1 && dice1 !== 1) {
      //dice ==1? activePlayer =0: activePlayer =1;
      var sum = dice + dice1;
      document.querySelector('#current-' + activePlayer).textContent = current += sum;
    }


    else {
      nextPlayer();

    }
    checkdice = dice;
  }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
  // score[activePlayer]+= current;
  if (gamePlying) {
    score[activePlayer] += current;
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

  }

  if (score[activePlayer] >= winnigscore) {
    gamePlying = false;
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';
    //document.querySelector('.player-0-panel-').classList.remove= 'active';


  }
  else {
    nextPlayer();
  }
});


document.querySelector('.btn-new').addEventListener('click', newGame); //no need to call function

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  current = 0;
  document.querySelector('#current-0').textContent = '0';
  document.querySelector('#current-1').textContent = '0';
  //document.querySelector('#current-'+ activePlayer).textContent=current= 0;

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}

function newGame() {
  gamePlying = true;
  score = [0, 0];
  current = 0;
  activePlayer = 0;
  final_score = 0;
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('#name-0').textContent = setName1;
  document.querySelector('#name-1').textContent = setName2;
  document.querySelector('#current-0').textContent = '0';
  document.querySelector('#current-1').textContent = '0';
  document.querySelector('#score-0').textContent = '0';
  document.querySelector('#score-1').textContent = '0';
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice1').style.display = 'none';
}
























