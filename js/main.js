//Initialize the phaser engine. Create a 400x490px game.

var game = new Phaser.Game(400,490, Phaser.AUTO,"gmaeDiv");

//Create our "main" State that will contain the game
//this is the body of the game itself. It contains all relevant code

var mainState = {  
  
    preload: function () {
       //This function will execute at thebeginning of the game
       //Here we'll load all of our assets (art, music, etc.)     
       
},
  
    create: function() {
      //The create function is callled after the preload f(x)
      //This is were we will set up the game assets from scratch
      
},
  
    update: function () {
    //This function is called 60 times a second
    //It contains the gammes logic and all time related actions
    
},
  
}


//Add and start the gameState
game.state.add('main', mainState);
game.state.start('main');