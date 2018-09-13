(function(){
  var test = document.getElementById("menu");
  (function init(){
    rightMouseListener();
    leftMouseListener();
  }());
  function leftMouseListener(){
    document.addEventListener("click", function(){
      toggle(0);
    });
    
  }
  function rightMouseListener(){
    document.addEventListener("contextmenu", function(e){
      event.preventDefault();
      toggle(1);
      showmenu(e.x,e.y);
    });
  }
  function toggle(num){
    if(num==1){
      console.log("안뇽");
      test.classList.add("active");
    }
    else{
      test.classList.remove("active");
    }
  }
  function showmenu(x,y){
    test.style.top= y + "px";
    test.style.left=x +"px";
  }
}());