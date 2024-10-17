
var gamePattern=[];
var buttonColours=['red','blue','green','yellow'];
userClickedPattern=[]



var start=false;

var level=0;
$(document).keypress(function(){
    if(!start){
        $("#level-title").text("Level"+ " "+level)
        nextSequence();
        start=true;
      
}
});

function nextSequence(){
  userClickedPattern=[];
    level++
    $("#level-title").text("Level"+ " "+level)
    var randomNumber=Math.floor(Math.random()*4)
   var randomChosenColour=buttonColours[randomNumber];
   gamePattern.push(randomChosenColour)



$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

playsound(randomChosenColour)


  
}



$(".btn").click(function(){

    userChosenColour=$(this) .attr("id")
userClickedPattern.push(userChosenColour)
playsound(userChosenColour)
animatedPress(userChosenColour)
checkAnswer(userClickedPattern.length-1)
})



function playsound(value){
    var audio=new Audio("./sounds/"+value+".mp3");
    audio.play()
}





function animatedPress(currentColour){
$("#"+currentColour).addClass("pressed")

setTimeout(function(){
    $("#"+currentColour).removeClass("pressed") 
},100)
}


function checkAnswer(currentLevel){
if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    
console.log('success')
    if(userClickedPattern.length===gamePattern.length){
setTimeout(function(){
    nextSequence()
},1000);
    }
}else{
    console.log('wrong')
    playsound('wrong')
    $("body").addClass("game-over")
    setTimeout(function(){
        $("body").removeClass("game-over")
    })

    $("#level-title").text("Game Over, Press Any Key to Restart")
    statOver()
}
}


  
function statOver(){
level=0;
gamePattern=[];
start=false;
}
