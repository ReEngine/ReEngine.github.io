function displayImage(src,amount, width = 200, height = 200) {
    var img = document.createElement("img");
    var rand = Math.random();
    rand*=amount;
    rand = parseInt(rand);
    img.src = src+rand+".jpg";
    img.className = "image";
    document.body.appendChild(img);
   }

displayImage("./pictures/",4);