// Copyright © 2022 Brian Gawlik
// See LICENSE.txt for license information



function handleResize() {



    canvasContainer = document.getElementById("canvasContainer");
    canvasContainer_width  = canvasContainer.clientWidth;
    canvasContainer_height = canvasContainer.clientHeight;

    canvasContainer_AR = canvasContainer_height/canvasContainer_width;


    if( canvasContainer_AR < screenAR ){
        //console.log("lower than")
        canvas0_style_height = canvasContainer_height * (1-canvasPad);
        canvas0_style_width  = canvas0_style_height / screenAR;
    } else {
        //console.log("greater than")
        canvas0_style_width  = canvasContainer_width * (1-canvasPad);
        canvas0_style_height = canvas0_style_width * screenAR;
    }

    canvas0.style.height = canvas0_style_height.toString() + "px";
    canvas0.style.width  = canvas0_style_width.toString()  + "px";
    canvas0_style_top  = (canvasContainer_height - canvas0_style_height)/2;
    canvas0_style_left = (canvasContainer_width  - canvas0_style_width )/2;
    // canvas0_style_top  = 0;
    // canvas0_style_left = 0;
    canvas0.style.top = canvas0_style_top.toString() + "px";
    canvas0.style.left  = canvas0_style_left.toString()  + "px";

    canvas0.height = screenH; 
    canvas0.width  = screenW;

    canvasWindow.style.height = canvas0_style_height.toString() + "px";
    canvasWindow.style.width  = canvas0_style_width.toString()  + "px";
    canvasWindow.style.top = canvas0_style_top.toString() + "px";
    canvasWindow.style.left  = canvas0_style_left.toString()  + "px";

    xCenterOffset = 1/artboardAR * xOrigin;
    yCenterOffset = yOrigin;

    drawTo_ctx0( IMAGES[0], finalBlur )

}

function handleResize00() {

    // console.log("resize")

    pageContainer = document.getElementById("pageContainer");
    pageContainer_width  = pageContainer.clientWidth;
    pageContainer_height = pageContainer.clientHeight;

    pageContainer_AR = pageContainer_height/pageContainer_width;

    // canvas0_style_height;
    // canvas0_style_width;

    // console.log("pageContainer_AR",pageContainer_AR)
    // console.log("screenAR",screenAR)

    if( pageContainer_AR < screenAR ){
        //console.log("lower than")
        canvas0_style_height = pageContainer_height * (1-canvasPad);
        canvas0_style_width  = canvas0_style_height / screenAR;
    } else {
        //console.log("greater than")
        canvas0_style_width  = pageContainer_width * (1-canvasPad);
        canvas0_style_height = canvas0_style_width * screenAR;
    }

    canvas0.style.height = canvas0_style_height.toString() + "px";
    canvas0.style.width  = canvas0_style_width.toString()  + "px";
    canvas0_style_top  = (pageContainer_height - canvas0_style_height)/2;
    // canvas0_style_left = (pageContainer_width  - canvas0_style_width )/2;
    // canvas0_style_top  = 0;
    canvas0_style_left = 0;
    canvas0.style.top = canvas0_style_top.toString() + "px";
    canvas0.style.left  = canvas0_style_left.toString()  + "px";

    canvas0.height = screenH; 
    canvas0.width  = screenW;

    canvasWindow.style.height = canvas0_style_height.toString() + "px";
    canvasWindow.style.width  = canvas0_style_width.toString()  + "px";
    canvasWindow.style.top = canvas0_style_top.toString() + "px";
    canvasWindow.style.left  = canvas0_style_left.toString()  + "px";

    
    // canvasMag_style_height = canvas0_style_height*canvasMagSize;
    // canvasMag_style_width = canvasMag_style_height;
    // canvasMag_style_top = 0;
    // canvasMag_style_left = 0;
    // canvasMag.style.height = canvasMag_style_height.toString() + "px";
    // canvasMag.style.width  = canvasMag_style_width.toString()  + "px";
    // canvasMag.style.top = canvasMag_style_top.toString() + "px";
    // canvasMag.style.left  = canvasMag_style_left.toString()  + "px";
    // canvasMag.height = 1080; 
    // canvasMag.width  = 1080;
    // let borderRadius = canvasMag_style_height/2;
    // canvasMag.style.borderRadius = borderRadius.toString() + "px";

    xCenterOffset = 1/artboardAR * xOrigin;
    yCenterOffset = yOrigin;


    // for(i=0; i<IMAGES.length; i++) {
    //     ctx0.drawImage(IMAGES[i], 0, 0, screenW, screenH);
    // }

    drawTo_ctx0( IMAGES[0], finalBlur )

}










function setup_auxCanvases() {

    artboardW = artboardH / artboardAR;
    artboardWo2 = 1/artboardAR/2;
    artboardW_Norm = 1/artboardAR;
    screenH = artboardH * (screenAR/artboardAR);
    screenW = artboardW;

    auxCanvas01.style.height = "0px";
    auxCanvas01.style.width  = "0px";
    auxCanvas02.style.height = "0px";
    auxCanvas02.style.width  = "0px";
    auxCanvas03.style.height = "0px";
    auxCanvas03.style.width  = "0px";
    auxCanvas04.style.height = "0px";
    auxCanvas04.style.width  = "0px";

    auxCanvas01.width  = artboardW;
    auxCanvas01.height = artboardH;
    auxCanvas02.width  = artboardW;
    auxCanvas02.height = artboardH;
    auxCanvas03.width  = artboardW;
    auxCanvas03.height = artboardH;
    auxCanvas04.width  = artboardW;
    auxCanvas04.height = artboardH;

}





