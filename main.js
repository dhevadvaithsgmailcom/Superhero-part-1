var canvas = new fabric.Canvas('myCanvas');

player_y= 10;
player_x= 10;

img_width= 30;
img_height= 30;

var playerobject="";
var imgobject= "";


function playerupdate(){
    fabric.Image.fromURL("images.jpg", function(Img)
    {playerobject=Img;
     playerobject.scaleToWidvth(150);
     playerobject.scaleToHeight(140);

    playerobject.set({ top:player_y, left:player_x });
    canvas.add(playerobject); });

      
}


function newimg(getimg){
    fabric.Image.fromURL(getimg, function(Img)
    {imgobject=Img;
     imgobject.scaleToWidth(img_width);
     imgobject.scaleToHeight(img_height);

    imgobject.set({ top:player_y, left:player_x });
    canvas.add(imgobject); });

      
}

