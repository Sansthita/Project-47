const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var crow, crow_image, player, player_img, tree_image, forest_image, dropping, tree, back, playerCount;
var form, player, game;

 var drops = []
function preload(){
  player_img = loadAnimation("boy[1].png", "player[2].png");
  tree_image = loadImage("tree.png");
  forest_image = loadImage("forest.jpg");
  crow_image = loadImage("crow.png");
  b_image = loadImage("forest.jpg")
}

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;
    
 
   droppingGroup = new Group();
   treeGroup = new Group();
   crowGroup = new Group();
  

  // for (var i=0; i<1000; i++){
  //   droppings = new Droppings(random(50, 400), 50);
  //   drops.push(droppings);
  // }
}

function draw(){
    background('white');
    Engine.update(engine);
    
    // image(tree_image, 200, 50, 700, 700);
    // image(tree_image, 800, 50, 700, 700);
    // crow.display();
    // crow_1.display();
    // crow_2.display();
    // crow_3.display();
    // crow_4.display();
    // crow_5.display();
    // drop.display();
    // drop_1.display();
    // drop_2.display();
    // drop_3.display();
    // drop_4.display();
    // drop_5.display();
    
    // for (var j=0; j<1000; j++){
    //   drops[j].display();
    // }
     if (playerCount===2){
       game.update(1);
       if(gameState===1){
         clear();
         game.play();
       }
    }
}


