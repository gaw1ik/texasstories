// Copyright © 2022 Brian Gawlik
// See LICENSE.txt for license information


function saveImg() {
    var link = document.getElementById('save_img_link');
    let fileName = seed + ".png";
    // link.setAttribute('download', 'download.png');
    link.setAttribute('download', fileName);

    link.setAttribute('href', canvas0.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    link.click();
}