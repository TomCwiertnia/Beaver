window.addEventListener("keydown", function(e){
  let box = document.getElementById('box1');
  let reg = /[0-9-].../g;

  console.log('keyCode:' + e.keyCode);

  switch(e.keyCode) {
    case 39:
        let left = reg.exec(box.style.left);
        let przeliczoneL = parseInt(left, "10");

         if (left == null) {
            przeliczoneL =1;
           }

            if (przeliczoneL > (document.documentElement.clientWidth * 0.4) - document.getElementById('box1').clientWidth) {
                przeliczoneL = przeliczoneL;
            } else {
                    przeliczoneL += 10;
           }

        box.style.left = przeliczoneL +'px';
        break;

    case 40:
        let gora = reg.exec(box.style.top);
        let przeliczoneG = parseInt(gora, "10");

        if (gora == null) {
                przeliczoneG = 1;
            }

            if (przeliczoneG > (document.documentElement.clientHeight * 0.2) - document.getElementById('box1').clientHeight) {
                przeliczoneG = przeliczoneG;
            } else {
                    przeliczoneG +=10;
            }
        box.style.top = przeliczoneG +'px';
        break;

    case 38:
        let dol = reg.exec(box.style.top);
        let przeliczoneD = parseInt(dol, "10");

        if (dol === null) {przeliczoneD =0;}

        if (przeliczoneD <= 0) {
            przeliczoneD = 0;
        } else {
                przeliczoneD -=5;
        }

        box.style.top = przeliczoneD +'px';
        break;

    case 37:
        let right = reg.exec(box.style.left);
        let przeliczoneR = parseInt(right, "10");

        if (right === null) {
            przeliczoneR =1;
            }

        if (przeliczoneR < 5) {
            przeliczoneR = 1;
        } else {
                przeliczoneR -=5;
        }

        przeliczoneR -= 5;

        box.style.left = przeliczoneR +'px';
        break;

}

});
