




function draw_storyCard(pinNum) {

    // let pinNum = object.pinNum;

    // let pinNum;

    // for(let i=0; i<N_PINS; i++) { 
    //     if(PINS[i].isHover) {
    //         pinNum = i;
    //         return;
    //     }
    // }

    // let [hue, sat, lit] = [0,0,0];

    // let fontSizePix = 24;
    let fontSize = 0.03;

    // console.log("pinNum",pinNum)

    let text = PINS[pinNum].text;


    let [card_x,card_y] = [PINS[pinNum].x + 0.01, PINS[pinNum].y + 0.01];

    let numCharacters = text.length;
    let text_width = numCharacters*fontSize*0.42;
    let text_height = fontSize;
    
    let borderThicknessX = 0.05;
    let borderThicknessY = 0.30;


    let card_width = text_width + text_width*borderThicknessX*2;
    let card_height = text_height + text_height*borderThicknessY*2;
    let card_radii = 0.01;

    let alpha = 220;
    let [card_hue,card_sat,card_lit] = [210,50,35];

    drawRoundRect(card_x, card_y, card_width, card_height, card_radii, lineWidth=0.005, card_hue,card_sat,card_lit, alpha, fillMode=0);

    let text_x = card_x + card_width*borderThicknessX;
    let text_y = card_y + card_height*borderThicknessY; 

    let [text_hue, text_sat, text_lit] = [0,0,100];

    drawText(text, text_x, text_y, fontSize, text_hue, text_sat, text_lit);
    
}