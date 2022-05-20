window.onload = function() {
//As the window loads everything below becomes functional

  //Variables and objects!
  let money = 0; //The player's money
  let moneyclock = setInterval(getMoney, 500); //Money increment speed
  let hunger = 100; //Hunger bar
  let clock1 = setInterval(depleteH, 350); //Hunger decrement speed
  let bladder = 100; //Bladder bar
  let clock2 = setInterval(depleteB, 360); //Bladder decrement speed
  let fun = 100; //Fun bar
  let clock3 = setInterval(depleteF, 370); //Fun decrement speed
  let cowboy = false; //Boolean to check if the pet has upgraded to a Cowboy
  let rapper = false; //Boolean to check if the pet has upgraded to a Rapper
  let gameover = 0; //Game Over checker
  
  
  //Events without which, the buttons wouldn't work
  
  //These are for the buttons that refill the pet's needs
  document.getElementById("BtnHunger").onclick = fillHunger;
  document.getElementById("BtnBladder").onclick = fillBladder;
  document.getElementById("BtnFun").onclick = fillFun;
  
  //These are for the items
  document.getElementById("item1").onclick = nuggetsEffect;
  document.getElementById("item2").onclick = medicineEffect;
  document.getElementById("item3").onclick = antidepressantsEffect;
  
  //Boutique buttons
  document.getElementById("boutique1").onclick = fCowboy;
  document.getElementById("boutique2").onclick = fRapper;
  
  //Functions galore!
  
  //This function checks if all your stats are at zero
  //If so, the Game Over pop-up appears
  function gameovercheck(){
    if(hunger==0&&bladder==0&&fun==0&&gameover==0){
      alert("Game Over!");
      gameover++;
      daffyHandler();
    }
    else{
      daffyHandler();
    }
  }
  
  //This function handles your pet's image
  function daffyHandler(){
    if(hunger==0&&bladder==0&&fun==0){
      document.getElementById("Daffy").src = "daffyDead.png";
    }
    else if(cowboy==false&&rapper==false){
      document.getElementById("Daffy").src = "daffy1.png";
    }
    else if(cowboy==true&&rapper==false){
      document.getElementById("Daffy").src = "daffyCowboy.png"
    }
    else if(cowboy==true&&rapper==true){
      document.getElementById("Daffy").src = "daffyRapper.png"
    }
  }
  
  //This function adds money if all your stats are above zero
  //Otherwise, no additional money are generated
  function getMoney(){
    if(hunger>0&&bladder>0&&fun>0){
      document.getElementById("MoneyValue").value = money;
      money++;
    }
  }
  
  //This function applies the Chicken Nuggets effect, re-filling Hunger stat
  function nuggetsEffect(){
    if(hunger==0&&money>=150&&gameover==0){
      money-=150;
      hunger+=50;
      clock1 = setInterval(depleteH, 350);
      depleteH();
      daffyHandler();
    }
  }
  
  //This function applies the Medicine Item effect, re-filling Bladder stat
  function medicineEffect(){
    if(bladder==0&&money>=200&&gameover==0){
      money-=200;
      bladder+=50;
      clock2 = setInterval(depleteB, 360);
      depleteB();
      daffyHandler();
    }
  }
  
  //This function applies the Antidepressants effect, re-filling Fun stat
  function antidepressantsEffect(){
    if(fun==0&&money>=300&&gameover==0){
      money-=300;
      fun+=50;
      clock3 = setInterval(depleteF, 370);
      depleteF();
      daffyHandler();
    }
  }
  
  //Become a Cowboy function
  function fCowboy(){
    if(cowboy==false&&money>=250){
      money-=250;
      cowboy=true;
      daffyHandler();
      clearInterval(moneyclock);
      moneyclock = setInterval(getMoney,100);
    }
  }
  
  //Become a Rapper function
  function fRapper(){
    if(cowboy==true&&rapper==false&&money>=1000){
      money-=1000;
      rapper=true;
      daffyHandler();
      clearInterval(clock1);
      clearInterval(clock2);
      clearInterval(clock3);
      clearInterval(moneyclock);
      alert("Congratulations! You win!");
    }
  }
  
  //Feed button effect
  function fillHunger(){
    if(hunger<=99&&hunger!=0){
      hunger += 2;
    }
    else if(hunger==0){
      hunger+=0;
    }
  }
  
  //Bathroom button effect
  function fillBladder(){
    if(bladder<=99&&bladder!=0){
      bladder += 2;
    }
    else if(bladder==0){
      bladder+=0;
    }
  }
  
  //Play button effect
  function fillFun(){
    if(fun<=99&&bladder!=0){
      fun += 2;
    }
    else if(fun==0){
      fun+=0;
    }
  }
  
  //This is what makes your hunger go down
  function depleteH(){
    if(hunger == 0){
      clearInterval(clock1);
      alert("Your pet is starving!");
      gameovercheck();
    }
    else{
      hunger--;
      document.getElementById("HungerBar").value = hunger;
    }
  }
  
  //This is what makes your bladder go down
  function depleteB(){
    if(bladder == 0){
      clearInterval(clock2);
      alert("Your pet has become sick!");
      gameovercheck();
    }
    else{
      bladder--;
      document.getElementById("BladderBar").value = bladder;					
    }
  }
  
  //This is what makes your fun go down
  function depleteF(){
    if(fun == 0){
      clearInterval(clock3);
      alert("Your pet is depressed!");
      gameovercheck();
    }
    else{
      fun--;
      document.getElementById("FunBar").value = fun;
    }
  }
}