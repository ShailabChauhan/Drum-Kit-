for (var i = 0; i < document.querySelectorAll(".drum").length; i++) 
{
  document.querySelectorAll("button")[i].addEventListener("click", function() 
  {
      // this.style.color = "yellow";

      var button1 = this.innerHTML;
      makesound(button1);
      buttonAnimation(button1);
});
  
}

document.addEventListener("keydown", function(event) 
{
    // this.style.color = "yellow";
    makesound(event.key);
    buttonAnimation(event.key);

});

function makesound(key)
{
    switch (key) 
    {
      case "w":
        var audio = new Audio('tom-1.mp3');
        audio.play();
        break
      case "a":
        var audio = new Audio('tom-2.mp3');
        audio.play();
        break;
      case "s":
        var audio = new Audio('tom-3.mp3');
        audio.play();
        break;
      case "d":
        var audio = new Audio('tom-4.mp3');
        audio.play();
        break;
      case "j":
        var audio = new Audio('snare.mp3');
        audio.play();
        break;
      case "k":
        var audio = new Audio('kick-bass.mp3');
        audio.play();;
        break;
      case "l":
        var audio = new Audio('crash.mp3');
        audio.play();
        break;

      default : console.log(button1);
  }
}

// for(var i =0;i< document.querySelectorAll(".drum").length; i++)
// {
//     document.querySelectorAll("button")[i].addEventListener("click", handleclick);
// }

// function handleclick()
// {
//     alert("I got clicked");
//

function buttonAnimation(key)
{
    var activationButton = "." + key;
    document.querySelector(activationButton).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(activationButton).classList.remove("pressed");
    }, 100);
}