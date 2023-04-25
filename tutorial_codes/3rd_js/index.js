'use strict';

document.getElementById("titleImg").style.display = "none";

function clickBtn() {
     console.log("ボタンが押されました");
     let displayImg = document.getElementById("titleImg").style.display;
     console.log(displayImg);
     
     // 画像を表示/非表示
     if (displayImg == "none"){
          document.getElementById("titleImg").style.display = "block";
     } else {
          document.getElementById("titleImg").style.display = "none";
     }
}