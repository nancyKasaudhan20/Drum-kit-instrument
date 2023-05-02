// alert("helloooo");  check JS activated or not

//document.querySelector("button").addEventListener("click",handleClick);  //here we are not writing handleClick() otherwise once we load page that function is automatically called and loaded 

/* function handleClick(){    //whenever clicked on any box this activates 
    alert("I got clicked");
} */

//-----------------Better way is replace function handleClick as function ()  ---both same
// function (){
//     alert("I got clicked");
// }

//-----------------Even Better way 
/*  document.querySelector("button").addEventListener("click",function (){
    alert("I got clicked");
    //other lines of code
}); */
//To select all button we use querySelectorAll("button")[2] but we will have to write for all buttons instead we use loops 

var noofButtons = document.querySelectorAll(".drum").length;
for(var i=0;i<noofButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonValue= this.innerHTML;  //button click krne pe kya html return krega
       makesound(buttonValue);
       buttonAnimation(buttonValue);
       
        //other lines of code
    });  

}


    document.addEventListener("keypress", function (event) {
            makesound(event.key); //key  property gives which button on keyboard is clicked
            buttonAnimation(event.key);
        }); 

// sound
   function makesound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
            default:
                console.log(buttonValue);
     }
   }
   
   //animationn

   function buttonAnimation(currentkey){
      var activeButton = document.querySelector("."+ currentkey);
      activeButton.classList.add("pressed");
      setTimeout(() => {
        activeButton.classList.remove("pressed");
      }, 100);
   }

