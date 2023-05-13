function displayImage(src,picnum) {
    var imgBox = document.createElement("div");
    var img = document.createElement("img");
    imgBox.className = "imgbox";
    img.src = src+picnum+".jpg";
    img.className = "image";
    var imgblur = img.cloneNode();
    imgBox.appendChild(img);
    imgblur.className = "blur";
    imgBox.appendChild(imgblur);
    document.body.appendChild(imgBox);
   }

   var rand = parseInt(Math.random()*5);
   
displayImage("./resources/pictures/",rand);