function displayImage(src,amount, width = 200, height = 200) {
    var imgBox = document.createElement("div");
    var img = document.createElement("img");
    var rand = parseInt(Math.random()*amount);
    imgBox.className = "imgbox";
    img.src = src+rand+".jpg";
    img.className = "image";
    imgBox.appendChild(img)
    document.body.appendChild(imgBox);
   }

displayImage("./pictures/",4);