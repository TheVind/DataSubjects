var sia = document.getElementById("sia");
var mads = document.getElementById("mads");
var jeppe = document.getElementById("jeppe");
var before = document.getElementById("before");
var now = document.getElementById("now");
var next = document.getElementById("next");
var arrowBef = document.getElementById("arrowBef");
var arrowNext = document.getElementById("arrowNext");

//sia.addEventListener("mouseover", (e) => {
//    sia.src="./buttons/sia_hover.png";
//});

sia.addEventListener("mouseover", (e) => {
    sia.src = "./buttons/sia_hover.png";
});
sia.addEventListener("mouseleave", (e) => {
    sia.src = "./buttons/sia.png";
});
mads.addEventListener("mouseover", (e) => {
    mads.src = "./buttons/mads_hover.png";
});
mads.addEventListener("mouseleave", (e) => {
    mads.src = "./buttons/mads.png";
});
jeppe.addEventListener("mouseover", (e) => {
    jeppe.src = "./buttons/jeppe_hover.png";
});
jeppe.addEventListener("mouseleave", (e) => {
    jeppe.src = "./buttons/jeppe.png";
});

var notClicked = true;
var person = "";
var imageDisp = 1

sia.addEventListener("click", (e) => {
    if (notClicked || person === "jeppe" || person === "mads") {
        notClicked = false;
        person = "sia";
        imageDisp = 1;
        now.src="./images/sia/1.jpg";
        before.src="./images/sia/30.jpg";
        next.src="./images/sia/2.jpg";
        next.style.display = "inline-block";
        before.style.display = "inline-block";
        now.style.display = "inline-block";
        arrowNext.style.display = "inline-block";
        arrowBef.style.display = "inline-block";
    } else {
        next.style.display = "none";
        before.style.display = "none";
        now.style.display = "none";
        arrowNext.style.display = "none";
        arrowBef.style.display = "none";
        notClicked = true;
        person="";
    }
});

jeppe.addEventListener("click", (e) => {
    if (notClicked || person === "sia" || person === "mads") {
        notClicked = false;
        person = "jeppe";
        imageDisp = 1;
        now.src="./images/jeppe/1.jpg";
        before.src="./images/jeppe/9.jpg";
        next.src="./images/jeppe/2.jpg";
        next.style.display = "inline-block";
        before.style.display = "inline-block";
        now.style.display = "inline-block";
        arrowNext.style.display = "inline-block";
        arrowBef.style.display = "inline-block";
    } else {
        next.style.display = "none";
        before.style.display = "none";
        now.style.display = "none";
        arrowNext.style.display = "none";
        arrowBef.style.display = "none";
        notClicked = true;
        person="";
    }
});

arrowNext.addEventListener("click", (e) => {
    if (person === "sia") {
        imageDisp += 1;
        if (imageDisp > 30) {
            imageDisp = 1;
        }
        nowImage = "./images/sia/" + imageDisp + ".jpg";
        now.src=nowImage;
        beforeImageNum = imageDisp - 1;
        if (beforeImageNum === 0) {
            beforeImageNum = 30;
        }
        beforeImage = "./images/sia/" + beforeImageNum + ".jpg";
        nextImageNum = imageDisp + 1;
        if (nextImageNum === 31) {
            nextImageNum = 1;
        }
        nextImage = "./images/sia/" + nextImageNum + ".jpg";
        before.src=beforeImage;
        next.src=nextImage;
    }
    else if (person === "jeppe") {
        imageDisp += 1;
        if (imageDisp > 9) {
            imageDisp = 1;
        }
        nowImage = "./images/jeppe/" + imageDisp + ".jpg";
        now.src=nowImage;
        beforeImageNum = imageDisp - 1;
        if (beforeImageNum === 0) {
            beforeImageNum = 9;
        }
        beforeImage = "./images/jeppe/" + beforeImageNum + ".jpg";
        nextImageNum = imageDisp + 1;
        if (nextImageNum === 10) {
            nextImageNum = 1;
        }
        nextImage = "./images/jeppe/" + nextImageNum + ".jpg";
        before.src=beforeImage;
        next.src=nextImage;
    }
});

arrowBef.addEventListener("click", (e) => {
    if (person === "sia") {
        imageDisp -= 1;
        if (imageDisp < 1) {
            imageDisp = 30;
        }
        nowImage = "./images/sia/" + imageDisp + ".jpg";
        now.src=nowImage;
        beforeImageNum = imageDisp - 1;
        if (beforeImageNum === 0) {
            beforeImageNum = 30;
        }
        beforeImage = "./images/sia/" + beforeImageNum + ".jpg";
        nextImageNum = imageDisp + 1;
        if (nextImageNum === 31) {
            nextImageNum = 1;
        }
        nextImage = "./images/sia/" + nextImageNum + ".jpg";
        before.src=beforeImage;
        next.src=nextImage;
    }
    else if (person === "jeppe") {
        imageDisp -= 1;
        if (imageDisp < 1) {
            imageDisp = 9;
        }
        nowImage = "./images/jeppe/" + imageDisp + ".jpg";
        now.src=nowImage;
        beforeImageNum = imageDisp - 1;
        if (beforeImageNum === 0) {
            beforeImageNum = 9;
        }
        beforeImage = "./images/jeppe/" + beforeImageNum + ".jpg";
        nextImageNum = imageDisp + 1;
        if (nextImageNum === 10) {
            nextImageNum = 1;
        }
        nextImage = "./images/jeppe/" + nextImageNum + ".jpg";
        before.src=beforeImage;
        next.src=nextImage;
    }
});