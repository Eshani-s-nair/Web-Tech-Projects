var noOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfDrumButtons;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    // var audio=new Audio("sounds/tom-1.mp3");
    // audio.play();
    this.style.color="white";
    var buttonHtml=this.innerHTML;
    makesound(buttonHtml);
    AddAnimation(buttonHtml);
});
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    AddAnimation(event.key)
})
function makesound(key){
   switch(key){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;     
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break; 
        default:console.log("invalid")
                 break;             
    }
}
function AddAnimation(key){
    var Activebutton=document.querySelector("."+key);
    Activebutton.classList.add("pressed");
    setTimeout(function(){
        Activebutton.classList.remove("pressed")}
    ,100)
}