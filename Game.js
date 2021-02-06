class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

   
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    //player.getcarsEnd();
    back = createSprite(800, 100, 2000, 800);
    back.addImage(b_image);
    back.velocityX = -4;
    back.scale = 4;
    player = createSprite(200, 600, 100, 100);
    player.setCollider('circle', 0, 0, 100);
  player.addAnimation("player_image",player_img);
  player.scale = 1.5;

  if (keyDown("left")){
    player.x = player.x - 10;
  }
  if (keyDown("right")){
    player.x = player.x + 10;
  }

  if (back.x<0){
    back.x = 800;
  }
  
if (player.x<0 || player.x>400 ){
 edges=createEdgeSprites();
 player.bounceOff(edges) ;

}

    
    if(allPlayers !== undefined){
      
      for(var plr in allPlayers){
       
       
        if (index === player.index){
         
          
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }
    if (player.isTouching(droppingGroup)){
      player.velocityX = 0;
      textSize(50);
      stroke("yellow");
      strokeWeight(5);
      text("GameOver", 800, 400);

      crow.velocityX = 0;
      tree.velocityX = 0;
      back.velocityX = 0;
      player.destroy();
      tree.destroy();
      crowGroup.destroyEach();
      droppingGroup.destroyEach();
      treeGroup.destroyEach();
      stop(all);
    }
    
   
    spawnDroppings();
    spawnCrows();
    drawSprites();
  }
   spawnCrows(){
    if (frameCount % 200 ===0){
      crow = createSprite(random(1500, 1800), random(80, 100), 20, 20);
      crow.addImage(crow_image);
      crow.scale = 0.8;
      crow.velocityX = -10;
      tree = createSprite(1600, 350, 45, 45);
      tree.velocityX = -10;
      tree.addImage(tree_image);
      tree.scale = 0.5;
      player.depth = tree.depth;
      player.depth+=1;  
      dropping.depth = tree.depth;
      dropping.depth+=1;
      crow.depth=tree.depth;
      crow.depth+=1;
      crowGroup.add(crow);
    }
  }
  
   spawnDroppings(){
    if (frameCount%200 === 0){
      dropping = createSprite(random(1500, 1800), 100, 10, 10);
      dropping.shapeColor = "yellow";
      dropping.velocityY = 3;
      dropping.velocityX = -10;
      droppingGroup.add(dropping);
      
    }
  }
  end(){
    
  }
}
