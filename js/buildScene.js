




function buildScene() {

    imageH = 1000; // this is the height in pixels of the resulting image area (letterbox not included)


    artboardAR = 1/1;
    

    // globalSeed = Math.round( Math.random()*999 );
    globalSeed = 1;



    myrng = new Math.seedrandom(globalSeed);


    




    //////////////////////////////////////////////////////////////////////////////////////////
    blurCropFactor = 0.0; // this is the fraction of cropping that is done to prevent the blur from creating weird edges
    finalBlur = 0;



    //////////////////////////////////////////////////////////////////////////////////////////
    screenAR = artboardAR;

    imageW = imageH / artboardAR;

    artboardH = imageH * (1 + blurCropFactor);
    artboardW = artboardH / artboardAR;
    artboardWo2 = 1/artboardAR/2;
    artboardW_Norm = 1/artboardAR;

    screenH = imageH * (screenAR/artboardAR);
    screenW = imageW;








    PINS = [];   

    PINS.push( {x: 0.15, y:0.45, isHover:0, isActive:0, text:"Sara. San Antonio. 2010"} );
    PINS.push( {x:-0.30, y:0.54, isHover:0, isActive:1, text:"Ayush. El Paso. 2009."} );
    PINS.push( {x: 0.20, y:0.40, isHover:0, isActive:0, text:"Brian. Austin. 2024."} );
    PINS.push( {x:-0.10, y:0.80, isHover:0, isActive:0, text:"Elif. Pan Handle. 2001."} );
    PINS.push( {x: 0.10, y:0.20, isHover:0, isActive:0, text:"Alex. Corpus Christi. 2013."} );

    N_PINS = PINS.length;


    


}









