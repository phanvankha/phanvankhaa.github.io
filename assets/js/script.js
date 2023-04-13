let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}


var audio = new Audio('http://nguyenvanvy.site/files/music-home.mp3');
      
      audio.oncanplaythrough = function(){
      audio.play();
      }
      
      audio.loop = true;
      
      audio.onended = function(){
      audio.play();
      }

      function LuaGameguardian() {
        Swal.fire(
            'LuaGameguardian',
            'Hiện tại vẫn đang bảo trì, vui lòng thử lại sau !',
            'error'
        )
    }
  