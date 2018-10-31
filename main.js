enchant();
screenWidth = this.screen.width;
screenHeight = this.screen.height;
window.onload = function(){
    game = new Game(screenWidth,screenHeight);
    game.preload('pad.png','apad.png','bar.png','se2.wav','se3.wav','se5.wav','se6.wav','pigSound5sec.wav','nevDiceStop.wav','monsterHit.wav','nevHit.wav','jingle03.wav','jingle04.wav','nevHitSound.wav','hitSound.wav','icon0.png','piratePig.png','chara5.png','chara6.png','map1.png','font1.png','bigmonster1.gif');
    game.keybind(32,'a');
    game.fps = 25;
    game.spriteSheetWidth = 16;
    game.spriteSheetHeight = 16;
    
    buttonYes = new enchant.ui.Button("Yes,gamble!","blue");
    setMaps = function(){
        backgroundMap = new Map(game.spriteSheetWidth,game.spriteSheetHeight);
        backgroundMap.image = game.assets['map1.png'];
        backgroundMap.loadData(
        [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,16,17,17],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,48,49,49],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [27,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]
        ,[
        [-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,99,100,100,101,-1,-1,-1,-1,-1],
        [-1,-1,-1,107,-1,-1,-1,107,-1,-1,-1,99,100,100,101,-1,-1,-1,-1,-1],
        [-1,-1,28,107,-1,-1,-1,-1,-1,-1,-1,99,100,100,101,-1,-1,67,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,99,100,100,101,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,99,100,100,101,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,99,100,100,100,84,84,84,84,85],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,99,100,100,100,100,100,100,100,101],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,99,100,100,100,100,100,100,100,101],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,115,116,116,116,116,116,116,116,117],
        [-1,-1,-1,-1,147,148,148,148,148,149,-1,-1,-1,-1,-1,-1,-1,-1,-1,28],
        [-1,-1,-1,-1,163,164,164,164,164,165,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,179,180,180,180,180,181,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,-1,-1,-1,28,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [195,192,192,192,80,-1,-1,28,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [192,192,195,192,80,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,-1,-1],
        [-1,192,192,192,80,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        ]);

backgroundMap.collisionData = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
        [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

foregroundMap = new Map(game.spriteSheetWidth,game.spriteSheetHeight);
foregroundMap.image = game.assets['map1.png'];
foregroundMap.loadData([
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,60,61,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,76,77,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    ]); 
};

setStage = function(){
   
//PLAYER CHARACTER CLASS
Knight = Class.create(Sprite,{
    initialize:function(XCoord,YCoord){
        Sprite.call(this,32,32);
        this.image = game.assets['chara5.png'];
        this.name = "Neville the Knight";
        this.x = XCoord;
        this.y = YCoord;
        //this.health = 30;
        this.gold = 250;
        this.inventory = [];
        this.spriteSheetOffset = 0;
        this.frame = [0];
        game.rootScene.addChild(this);

        displayNevilleInfo = function(){
            playAmbienceMusic('se2.wav');
            textLabel.width = screenWidth;
            textLabel.height = 10;
            textLabel.height = game.height / 6;
            textLabel.font = "14px verdana";
            textLabel.color = "white";
            textLabel.backgroundColor = "black";
            textLabel.text =  " " + nevilleKnight.name + "<br>" + " Gold: " + nevilleKnight.gold;
            game.rootScene.addChild(textLabel);
        }
    },
    onenterframe:function(){
       
        //NEVILLE KNIGHT WALK FUNCTIONALITY
        if(game.input.up){ 
            nevilleKnight.frame = [27,27,27,28,28,28,29,29,29];
            this.y--;
        } else if(game.input.right){
            nevilleKnight.frame = [18,18,18,19,19,19,20,20,20];
            this.x++;
        } else if(game.input.down){
            nevilleKnight.frame = [0,0,0,1,1,1,2,2,2];
            this.y++;
        } else if(game.input.left){
            nevilleKnight.frame = [9,9,9,10,10,10,11,11,11];
            this.x--;
        } else {
            nevilleKnight.frame = [];
        }
    }
});

            
//PLAYER CHARACTER CLASS
Sorcerer = Class.create(Sprite,{
    initialize:function(XCoord,YCoord){
        Sprite.call(this,32,32);
        this.image = game.assets['chara6.png'];
        this.x = XCoord;
        this.y = YCoord;
        this.frame = 3;
        this.scaleX = 1.4;
        this.scaleY = 1.4;
        this.gold = 5000;
        game.rootScene.addChild(this);
  
    displaySorcererInfo = function(){
        sorcererInfoScene = new Scene();
        sorcererInfoScene.backgroundColor = "black";
        playAmbienceMusic('jingle04.wav');
       
        textLabel.color = "white";
        textLabel.font = "12px verdana";
        textLabel.textAlign = "center";
        textLabel.text = "Good day imbecile!<br>I am Gambleron the great gambling sorcerer!<br>Do you want to gamble against me?<br>" +
        "Gambleron's Gold: " + sorcerer.gold;
        sorcererInfoScene.addChild(textLabel);

        buttonYes = new enchant.ui.Button("Yes,gamble!","blue");
        buttonYes.moveTo(screen.width / 2.5,screen.height / 6);
        sorcererInfoScene.addChild(buttonYes);
        game.pushScene(sorcererInfoScene);

        buttonYes.addEventListener(Event.TOUCH_START, function(){
                if(nevilleKnight.gold < 250){
                    sorcererInfoScene.removeChild(buttonYes);
                    sorcererInfoScene.removeChild(buttonNo);
                    textLabel.text = "You don't have enough gold<br> to handle my stakes chum!<br>Buzz off twat!";
                    setTimeout(function(){
                        game.popScene(sorcererInfoScene);
                    },3000);
                    
                } else if(sorcerer.gold === 0){
                    textLabel.text = "I got no more gold.Buzz off twat!";
                    sorcererInfoScene.removeChild(buttonYes);
                    sorcererInfoScene.removeChild(buttonNo);
                    setTimeout(function(){
                        game.popScene(sorcererInfoScene);
                    },3000);
                } else {
                    textLabel.text = "Ok fool!Lets see what you got!";
                    sorcererInfoScene.removeChild(buttonYes);
                    sorcererInfoScene.removeChild(buttonNo);
                    setTimeout(function(){
                        game.popScene(sorcererInfoScene);
                        gambleScene();
                    },3000);
                }
            });

            buttonNo = new enchant.ui.Button("Nope,cheers!","blue");
            buttonNo.moveTo(screen.width / 2.5,screen.height / 4);
            sorcererInfoScene.addChild(buttonNo);
            buttonNo.addEventListener(Event.TOUCH_START,function(){
                game.popScene(sorcererInfoScene);
            });      
        }
    },
    onenterframe:function(){
        if(nevilleKnight.within(this,30)){
            this.frame = [9];  
        } else {
            this.frame = [3];
        }
    }
});

Monster = Class.create(Sprite,{
    initialize:function(xChoord,yChoord){
        Sprite.call(this,80,80);
        this.image = game.assets['bigmonster1.gif'];
        this.frame = [2,2,2,3,3,3,4,4,4];
        this.scaleX = 0.7;
        this.scaleY = 0.7;
        this.x = xChoord;
        this.y = yChoord;

        this.addEventListener(Event.ENTER_FRAME,function(){
            if(this.within(nevilleKnight,40)){
                monsterFightSceneFunc();
            }
        });  
    },
    onenterframe:function(){
        this.tl.moveTo(150,80,100).scaleTo(-0.7, 0.7, 4).moveTo(320 - 80,80,100).scaleTo(0.7, 0.7, 4).moveTo(160,0,100).loop();
    }
});

PiratePig = Class.create(Sprite,{
    initialize:function(XChord,YChord){
        Sprite.call(this,32,32);
        this.image = game.assets['piratePig.png'];
        this.x = XChord;
        this.y = YChord;
        this.gold = 100;
        game.rootScene.addChild(this);

        this.tl.scaleTo(-1,1,1).moveTo(36,275,40).scaleTo(1,1,1).moveTo(5,260,40).loop();
        this.addEventListener(Event.ENTER_FRAME,function(){
            if(nevilleKnight.within(this,30)){
               this.PiratePigGambleScene();
            }
        });
    },
    onenterframe:function(){   
        this.frame = [0,0,0,1,1,1,2,2,2];
    },
    PiratePigGambleScene:function(){
        this.x = nevilleKnight.x ;
        gamblePigScene = new Scene();
        gamblePigScene.width = screen.width;
        gamblePigScene.height = screen.height;
        gamblePigScene.backgroundColor = "black";
        textLabel.text = 'YO! YOU WANA GAMBLE PUNK ASS!';
        textLabel.textAlign = "center";
        gamblePigScene.addChild(textLabel);

        pigSceneYesButton = new enchant.ui.Button("Yes pig!","blue");
        pigSceneYesButton.x = screen.width / 3.3;
        pigSceneYesButton.y = screen.height / 2.5;
        pigSceneYesButton.scaleX = 2;
        pigSceneYesButton.scaleY = 2;
        gamblePigScene.addChild(pigSceneYesButton);


        pigSceneYesButton.addEventListener(Event.TOUCH_START,function(){
            game.popScene(gamblePigScene);
            fruitGambleScene = new Scene();
            fruitGambleScene.backgroundColor = "black";
            textLabel.text = "";
            textLabel.textAlign = "center";
            fruitGambleScene.addChild(textLabel);

            
            fruitImage1 = new Sprite(game.spriteSheetWidth,game.spriteSheetWidth);
            fruitImage1.image = game.assets['icon0.png'];
            fruitImage1.x = screen.width / 4 - game.spriteSheetWidth;
            fruitImage1.y = screen.height / 3;
            fruitImage1.scaleX = 3;
            fruitImage1.scaleY = 3;
            fruitImage1.frame = [16,17,27];
            setTimeout(function(){
                fruitImage1.frame = [];
            },300);
            fruitGambleScene.addChild(fruitImage1);

            fruitImage2 = new Sprite(game.spriteSheetWidth,game.spriteSheetWidth);
            fruitImage2.image = game.assets['icon0.png'];
            fruitImage2.x = (screen.width / 2) - (game.spriteSheetWidth / 2);
            fruitImage2.y = screen.height / 3;
            fruitImage2.scaleX = 3;
            fruitImage2.scaleY = 3;
            fruitImage2.frame = [17,27,16];
            setTimeout(function(){
                fruitImage2.frame = [];
            },600);
            fruitGambleScene.addChild(fruitImage2);

            fruitImage3 = new Sprite(game.spriteSheetWidth,game.spriteSheetWidth);
            fruitImage3.image = game.assets['icon0.png'];
            fruitImage3.x = screen.width / 1.4 + game.spriteSheetWidth;
            fruitImage3.y = screen.height / 3;
            fruitImage3.scaleX = 3;
            fruitImage3.scaleY = 3;
            fruitImage3.frame = [27,16,17];
            setTimeout(function(){
                fruitImage3.frame = [];
                if(fruitImage1.frame === fruitImage2.frame && fruitImage2.frame === fruitImage3.frame){
                    playAmbienceMusic('pigSound5sec.wav');
                    textLabel.text = "JACKPOT YOU LUCKY PUNK!<br>1000 GOLD!";
                    nevilleKnight.gold+= 1000;
                } else if(fruitImage1.frame === fruitImage2.frame){
                    playAmbienceMusic('se6.wav');
                    nevilleKnight.gold+= 50;
                    textLabel.text = "YOU WIN!<br>50 GOLD!";
                } else if(fruitImage2.frame === fruitImage3.frame){
                    playAmbienceMusic('se6.wav');
                    nevilleKnight.gold+= 50;
                    textLabel.text = "YOU WIN!<br>50 GOLD!";
                } else {
                    playAmbienceMusic('se5.wav');
                    textLabel.text = "WHA HA LOSER!<br>YOU WIN NOTHING!";
                }
               
                gamblePigAgainButton = new enchant.ui.Button("Spin Again!","blue");
                gamblePigAgainButton.x = screen.width / 4.5;
                gamblePigAgainButton.y = screen.height / 1.5;
                gamblePigAgainButton.scaleX = 2;
                gamblePigAgainButton.scaleY = 2;
                fruitGambleScene.addChild(gamblePigAgainButton);
                gamblePigAgainButton.addEventListener(Event.TOUCH_START,function(){
                    game.popScene(fruitGambleScene);
                });  
            },900);
            fruitGambleScene.addChild(fruitImage3);
        
            game.pushScene(fruitGambleScene);
        });

        pigSceneNoButton = new enchant.ui.Button("No fart face!","blue");
        pigSceneNoButton.x = screen.width / 4.5;
        pigSceneNoButton.y = screen.height / 1.7;
        pigSceneNoButton.scaleX = 2;
        pigSceneNoButton.scaleY = 2;
        pigSceneNoButton.addEventListener(Event.TOUCH_START,function(){
            game.popScene(this);
            nevilleKnight.y = 220;
        });
        gamblePigScene.addChild(pigSceneNoButton);

        game.pushScene(gamblePigScene);

    },
    pigFruitGambleScene:function(){
        
    }
});

//FUNCTION TO PLAY MUSIC WHEN LOOKING AT STATS OR INTERACTING WITH CHARACTERS IN THE GAME
playAmbienceMusic = function(music){
    game.assets[music].play(); 
}
    monster = new Monster(170,0);
    nevilleKnight = new Knight(10,200);
    sorcerer = new Sorcerer(290,10);
    pigPirate = new PiratePig(0,260);
    textLabel = new Label();
    textLabel.textAlign = "center";
    textLabel.color = "white";

    pad = new Pad();
    pad.moveTo(10,screen.height - 160);

    gambleScene = function(){
        if(sorcerer.gold === 0){
            var scene = new Scene();
            scene.backgroundColor = 'black';
            textLabel.textAlign = "center";
            textLabel.text = "Oops,I got no more gold mate!I am defeated!";
            textLabel.color = "white";
            scene.addChild(textLabel);
            setTimeout(function(){
                game.popScene();
            },3000 );
        } else if(nevilleKnight.gold === 0){
            var scene = new Scene();
            scene.backgroundColor = 'black';
            textLabel.textAlign = "center";
            textLabel.text = "You got no more gold mate!Buzz off!";
            textLabel.color = "white";
            scene.addChild(textLabel);
            setTimeout(function(){
                game.popScene();
            },3000 );
        } else if (nevilleKnight.gold < 250){
            var scene = new Scene();
            scene.backgroundColor = 'black';
            textLabel.textAlign = "center";
            textLabel.text = "Not enough gold!Buzz off!";
            textLabel.color = "white";
            scene.addChild(textLabel);
            setTimeout(function(){
                game.popScene();
            },3000 );
        } else {
            var scene = new Scene();
            scene.backgroundColor = 'black';
            textLabel.textAlign = "center";
            textLabel.text = "Lets play the dice game for 250 gold pieces.<br>Highest number wins.<br>You go first bufoon..";
            textLabel.color = "white";
            scene.addChild(textLabel);
            
            dice = new Sprite(16,15.8);//ADJUSTED THE HEIGHT TO 15.8 TO FIX HOW THE IMAGE DISPLAY
            dice.image = game.assets['icon0.png'];
            dice.scaleX = 4;
            dice.scaleY = 4;
            dice.frame = [37,37,39,39,40,40,38,38,36,36,41,41];
            dice.x = screen.width / 2;
            dice.y = screen.height / 4;
            scene.addChild(dice);

            diceRollButton = new enchant.ui.Button("Stop dice!","blue");
            diceRollButton.x = screen.width / 3.5;
            diceRollButton.y = screen.height / 1.5;
            diceRollButton.scaleX = 2;
            diceRollButton.scaleY = 2;
            diceRollButton.addEventListener(Event.TOUCH_START,function(){
                playAmbienceMusic('nevDiceStop.wav');
                dice.frame = [];
                if(dice.frame === 36){
                    nevilleKnightDiceRollResults(1);
                } else if(dice.frame === 37){
                    nevilleKnightDiceRollResults(2);
                }else if(dice.frame === 38){
                    nevilleKnightDiceRollResults(3);
                }else if(dice.frame === 39){
                    nevilleKnightDiceRollResults(4);
                }else if(dice.frame === 40){
                    nevilleKnightDiceRollResults(5);
                }else if(dice.frame === 41){
                    nevilleKnightDiceRollResults(6);
                }
                scene.removeChild(diceRollButton);
            });
            scene.addChild(diceRollButton);
        } 
        
        playAgain = function(){
            //console.log(nevilleKnight.gold);
            //console.log(sorcerer.gold);

            playAgainButton = new enchant.ui.Button("Play again?","blue");
            playAgainButton.x = screen.width / 3.5;
            playAgainButton.y = screen.height / 1.5;
            playAgainButton.scaleX = 2;
            playAgainButton.scaleY = 2;
            playAgainButton.addEventListener(Event.TOUCH_START,function(){
                game.popScene(gambleScene);
                gambleScene();   
            });
            scene.addChild(playAgainButton);

            quitButton = new enchant.ui.Button("Quit!","blue");
            quitButton.x = screen.width / 2.5;
            quitButton.y = screen.height / 2;
            quitButton.scaleX = 2;
            quitButton.scaleY = 2;
            quitButton.addEventListener(Event.TOUCH_START,function(){
                game.popScene(gambleScene);
            });
            scene.addChild(quitButton);
        }
        //FUNCTION TO HANDLE NEVILLES DICE ROLL RESULTS
        nevilleKnightDiceRollResults = function(nevilleDiceRollNumber){
            textLabel.text = "You threw a " + nevilleDiceRollNumber + "<br>Now its my turn you fool..";
            setTimeout(function(){
                sorcererDiceRoll();
            },2000);

            //FUNCTION TO HANDLE SORCERER DICE ROLL RESULTS
            sorcererDiceRoll = function(){
                scene.removeChild(diceRollButton);
                dice = new Sprite(16,15.8);//ADJUSTED THE HEIGHT TO 15.8 TO FIX HOW THE IMAGE DISPLAY
                dice.image = game.assets['icon0.png'];
                dice.scaleX = 4;
                dice.scaleY = 4;
                dice.frame = [37,37,39,39,40,40,38,38,36,36,41,41];
                dice.x = screen.width / 2;
                dice.y = screen.height / 4;
                scene.addChild(dice);

                setTimeout(function(){
                    dice.frame = [];
                    if(dice.frame === 36){
                        sorcererDiceResults = 1;
                        checkGambleResults(sorcererDiceResults);
                    } else if(dice.frame === 37){
                        sorcererDiceResults = 2;
                        checkGambleResults(sorcererDiceResults);
                    }else if(dice.frame === 38){
                        sorcererDiceResults = 3;
                        checkGambleResults(sorcererDiceResults);
                    }else if(dice.frame === 39){
                        sorcererDiceResults = 4;
                        checkGambleResults(sorcererDiceResults);
                    }else if(dice.frame === 40){
                        sorcererDiceResults = 5;
                        checkGambleResults(sorcererDiceResults);
                    }else if(dice.frame === 41){
                        sorcererDiceResults = 6;
                        checkGambleResults(sorcererDiceResults);
                    }
                },2500);

                checkGambleResults = function(sorcererDiceResults){
                    if(sorcererDiceResults > nevilleDiceRollNumber){
                        playAmbienceMusic('se5.wav');
                        nevilleKnight.gold -= 250;
                        sorcerer.gold += 250;
                        textLabel.text = "Neville threw " + nevilleDiceRollNumber + "<br>Gambleron threw " + sorcererDiceResults + "<br>I win fool!Give me my winnings<br>"+ 
                         "Neville Gold: " + nevilleKnight.gold + "<br>Gambleron gold: " + sorcerer.gold;
                        playAgain();
                    } else if(sorcererDiceResults === nevilleDiceRollNumber){
                        playAmbienceMusic('se3.wav');
                        textLabel.text = "Neville threw " + nevilleDiceRollNumber + "<br>Gambleron threw " + sorcererDiceResults + "<br>It's a draw!fart!<br>"+ 
                        "Neville Gold: " + nevilleKnight.gold + "<br>Gambleron gold: " + sorcerer.gold;
                        playAgain();
                    } else {
                        playAmbienceMusic('se6.wav');
                        nevilleKnight.gold += 250;
                        sorcerer.gold -= 250;
                        textLabel.text = "Neville threw " + nevilleDiceRollNumber + "<br>Gambleron threw " + sorcererDiceResults + "<br>You win!Take my gold then you lucky punk!<br>"+ 
                        "Neville Gold: " + nevilleKnight.gold + "<br>Gambleron gold: " + sorcerer.gold;
                        playAgain();
                    }
                }
            }
        }
        game.pushScene(scene);
    }
    
    monsterFightSceneFunc = function(){
        monsterFightScene = new Scene();
        monsterFightScene.backgroundColor = "black";
        
        textLabel.text = "";
        monsterFightScene.addChild(textLabel);

        NevilleLable = new MutableText(screen.width / 6,screen.height / 4);
        NevilleLable.text = 'Neville';
        monsterFightScene.addChild(NevilleLable);

        fightingNeville = new Sprite(32,32);
        fightingNeville.image = game.assets['chara5.png'];
        fightingNeville.frame = [22];
        fightingNeville.x = screen.width / 6;
        fightingNeville.y = screen.height / 2.8;
        fightingNeville.scaleX = 2;
        fightingNeville.scaleY = 2;
        monsterFightScene.addChild(fightingNeville);

        fightingNevilleLife = new Sprite();
        fightingNevilleLife.image = game.assets['bar.png'];
        fightingNevilleLife.width = 1;
        fightingNevilleLife.height = 16;
        fightingNevilleLife.frame = [0];
        fightingNevilleLife.scaleX = 140;
        fightingNevilleLife.scaleY = 1;
        fightingNevilleLife.moveTo(screen.width / 3,screen.height / 5);
        monsterFightScene.addChild(fightingNevilleLife);

        monsterLable = new MutableText(screen.width / 2, screen.height / 1.8);
        monsterLable.text = 'Monster';
        monsterFightScene.addChild(monsterLable);

        fightingMonsterLife = new Sprite();
        fightingMonsterLife.image = game.assets['bar.png'];
        fightingMonsterLife.width = 1;
        fightingMonsterLife.height = 16;
        fightingMonsterLife.frame = [0];
        fightingMonsterLife.scaleX = 140;
        fightingMonsterLife.scaleY = 1;
        fightingMonsterLife.moveTo(screen.width / 1.5,screen.height / 2);
        monsterFightScene.addChild(fightingMonsterLife);
        
        fightingMonster = new Sprite(80,80);
        fightingMonster.image = game.assets['bigmonster1.gif'];
        fightingMonster.scaleX = 1.3;
        fightingMonster.scaleY = 1.3;
        fightingMonster.x = screen.width / 1.4;
        fightingMonster.y   = screen.height / 3.5;
        monsterFightScene.addChild(fightingMonster);
        
        fightingNeville.addEventListener(Event.ENTER_FRAME,function(){
           
            //NEVILLE KNIGHT WALK FUNCTIONALITY
            if(game.input.right){
                fightingNeville.frame = [18,18,18,19,19,19,20,20,20];
                this.x++;
            }  else if(game.input.left){
                fightingNeville.frame = [9,9,9,10,10,10,11,11,11];
                this.x--;
                if(this.x < 0){
                    textLabel.text = "No running away now Nev my boy!<br>Finish what you started!<br>Dead or alive!";
                    textLabel.font = "14px verdana";
                    fightingNeville.frame = [18,18,18,19,19,19,20,20,20];
                    fightingNeville.x = screen.width / 6;
                    fightingNeville.y = screen.height / 2.8;
                    fightingNeville.frame = [22];
                    setTimeout(function(){
                        textLabel.text = "";
                    },5000);
                }
            } else {
                fightingNeville.frame = [];
            }

            if(fightingNeville.x >= (screen.width / 4)){
                fightingMonster.frame = [2,2,2,2,3,3,3,3,4,4,4];
                fightingMonster.x-=3;
                if(fightingMonster.within(fightingNeville,60)){
                    playAmbienceMusic('hitSound.wav');
                    playAmbienceMusic('monsterHit.wav');
        
                    if(fightingNevilleLife.scaleX === 0){
                       textLabel.text = "Neville got his ass kicked!";
                       textLabel.font = "14px verdana";
                       monsterFightScene.removeChild(fightingNevilleLife);
                       monsterFightScene.removeChild(fightingNeville);
                       setTimeout(function(){
                        monsterFightScene.removeChild(fightingNevilleLife);
                            nevilleKnight.x = 140;
                            //nevilleKnight.health-=40;
                            nevilleKnight.gold-=nevilleKnight.gold;

                            game.popScene(monsterFightScene);
                            monsterFightScene.removeChild(textLabel);
                        },3000);
                    }
                    console.log('nom nom');
                    fightingNevilleLife.scaleX-=5;
                    fightingNeville.x-=4;
                }
             } else {
                fightingMonster.frame = [0,0,0,0];
                fightingMonster.tl.moveTo(screen.width / 2,screen.height / 3.5,50).moveTo(screen.width / 1.4,screen.height / 3.5,50).loop();
             }
        });
      
        fightPad = new Pad();
        fightPad.moveTo(20,screen.height / 1.6);
        fightPad.backgroundColor = "grey";
        monsterFightScene.addChild(fightPad);
      
        var hitButton = new enchant.ui.Button("Hit","dark");
        hitButton.scaleX = 2;
        hitButton.scaleY = 2;
        hitButton.moveTo(200,screen.height / 1.5);
        hitButton.addEventListener(Event.TOUCH_START, function(){
            playAmbienceMusic('nevHitSound.wav');
            fightingNeville.frame = [34,34,34,26,26,26,35,35,35,35];
            if(fightingNeville.within(fightingMonster,75)){
                playAmbienceMusic('nevHit.wav');
                console.log('neville hit');
                fightingMonsterLife.scaleX-=5;
                fightingMonster.x+=35;

                if(fightingMonsterLife.scaleX === 0){
                    textLabel.text = "You defeated Gambleron's monster!";
                    textLabel.font = "14px verdana";
                    nevilleKnight.gold+=500;
                    monsterFightScene.addChild(textLabel);
                    fightingMonster.scaleX = -1;
                    fightingMonster = new Sprite(80,80);
                    fightingMonster.image = game.assets['bigmonster1.gif'];
                    
                    setTimeout(function(){
                        
                        game.popScene(monsterFightScene);
                        stage.removeChild(monster);
                        monsterFightScene.removeChild(textLabel);
                    },3000);
                }
            }
        });
        hitButton.addEventListener(Event.TOUCH_END, function(){
            fightingNeville.frame = [22];
        });
        monsterFightScene.addChild(hitButton);

        game.pushScene(monsterFightScene);
    }
    
        var buttonB = new enchant.ui.Button("B","blue");
        buttonB.moveTo(260,screen.height - 150);
        buttonB.addEventListener(Event.TOUCH_START, function(){
                if(sorcerer.frame === 9){
                    displaySorcererInfo();
                } else {
                    displayNevilleInfo();
                }
        });
        game.rootScene.addChild(buttonB);

    nevilleMovementByPad = function(){
        nevilleKnight.addEventListener(Event.ENTER_FRAME,function(){
           
            if(nevilleKnight.health <= 0){
                console.log('create die scene for neville - neville died of scurvy!');
            }
        //Move up
        if (game.input.up) {
            //THIS REMOVES ANY LABELS THAT MAY BE PRESENT IN THE SCENE
            game.rootScene.removeChild(buttonYes);
            game.rootScene.removeChild(textLabel);
            if (backgroundMap.hitTest(nevilleKnight.x + 16, nevilleKnight.y + 32)) {
                    nevilleKnight.y += 2;
                }
            }
        //Move down
        else if (game.input.down) {
            game.rootScene.removeChild(buttonYes);
            game.rootScene.removeChild(textLabel);
            if (backgroundMap.hitTest(nevilleKnight.x + 16, nevilleKnight.y + 32)) {
                    nevilleKnight.y -= 2;
                }
            }
        //Move left
        else if (game.input.left) {
            game.rootScene.removeChild(buttonYes);
            game.rootScene.removeChild(textLabel);
            if (backgroundMap.hitTest(nevilleKnight.x + 16, nevilleKnight.y + 32)){
                    nevilleKnight.x += 2;
                } 
            }
        //Move right
        else if (game.input.right) {
            game.rootScene.removeChild(buttonYes);
            game.rootScene.removeChild(textLabel);
            if (backgroundMap.hitTest(nevilleKnight.x + 16, nevilleKnight.y + 32)){   
                nevilleKnight.x -= 2;
            } 
        }
    });
}

    stage = new Group();
    stage.addChild(backgroundMap);
    stage.addChild(nevilleKnight);
    stage.addChild(sorcerer);
    stage.addChild(foregroundMap);
    stage.addChild(monster);
    stage.addChild(pigPirate);
    stage.addChild(pad);
    game.rootScene.addChild(stage);
 };

//GAME ROOTSCENE
game.onload = ()=>{
        setMaps();
        setStage();
        nevilleMovementByPad();
    }
    game.start();
}




