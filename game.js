class  Game{
    constructor(){

    }
    getstate(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    update(){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef= await database.ref('playerCount').once("value")
         if(playerCountRef.exites()){
             playerCount=playerCountRef.val();
             player.getCount();
         }
        }
        form=new Form();
            form.display();
   
    }
}