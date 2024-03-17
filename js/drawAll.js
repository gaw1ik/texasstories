// Copyright © 2022 Brian Gawlik
// See LICENSE.txt for license information








function drawAll() {


    ////////////////////////////////////////////////////////////////////////////////////////////////////
    var startTime = performance.now()

    seed = globalSeed;

    // console.log("globalSeed",globalSeed);

    myrng = new Math.seedrandom(globalSeed);




    /////////////////////////////////////////////////////////////////////////////////////////////////////////// DRAW
    ctxToDrawToNow = ctx_aux01;
    

    /////////////////////////////////////////////////////////////////////////////////////////////// BG
    



    let texasImage = document.getElementById("texasOutline");
    ctxToDrawToNow.drawImage(texasImage,0,0,artboardW,artboardH);


    // let bgObject = {};
    // [bgObject.hue, bgObject.sat, bgObject.lit] = [210,90,70]; // black background
    // bgObject.alpha = 20;
    // draw_bg(bgObject);







    let pins_object = {};
    draw_pins(pins_object);



    // let storyCard_object = {};
    // storyCard_object.pinNum = 

    // draw_storyCard();

    






    //////////////////////////////////////////////////////////////////////////////////////////////////////     
    drawTo_ctxDest( ctx_aux02, auxCanvas01,  0 )




    //////////////////////////////////////////////////////////////////////////////////////////////////////////// FINAL DRAW

    IMAGES[0] =  auxCanvas02 

    drawTo_ctx0( auxCanvas02, finalBlur ) 

    var endTime = performance.now();
    let timeElapsed = (endTime - startTime) / 1000;
    timeElapsed = timeElapsed.toFixed(1);
    // console.log("...\ntook " + timeElapsed + " seconds \n" + "----------------------\n----------------------")
    
}

























