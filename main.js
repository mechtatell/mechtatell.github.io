function hoba() {
  el.classList.add('animate');
  hader.classList.add('animate');
}

var fcall = true;
var moveFlag1 = false;
var moveFlag2 = false;
var moveFlag3 = false;
var moveFlag4 = false;
var moveFlag5 = false;

function disableSub() {
  sub1.style.display="none";
  sub2.style.display="none";
  sub3.style.display="none";
  sub4.style.display="none";
  sub5.style.display="none";
}

function removePrev() {
  if (moveFlag1) {
    information1.classList.remove('animate');
    el1.classList.remove('animate');
  }
  if (moveFlag2) {
    information2.classList.remove('animate');
    el2.classList.remove('animate');
  }
  if (moveFlag3) {
    information3.classList.remove('animate');
    el3.classList.remove('animate');
  }
  if (moveFlag4) {
    information4.classList.remove('animate');
    el4.classList.remove('animate');
  }
  if (moveFlag5) {
    information5.classList.remove('animate');
    el5.classList.remove('animate');
  }
}

function move1() {
  if (fcall) {
  hoba();
  disableSub(); }
  moveFlag1 = true;
  removePrev();
  el1.classList.add('animate');
  information1.classList.add('animate');
  fcall = false;
}

function move2() {
  if (fcall) {
  hoba();
  disableSub(); }
  moveFlag2 = true;
  removePrev();
  el2.classList.add('animate');
  information2.classList.add('animate');
  fcall = false;
}

function move3() {
  if (fcall) {
  hoba();
  disableSub(); }
  moveFlag3 = true;
  removePrev();
  el3.classList.add('animate');
  information3.classList.add('animate');
  fcall = false;
}

function move4() {
  if (fcall) {
  hoba();
  disableSub(); }
  moveFlag4 = true;
  removePrev();
  el4.classList.add('animate');
  information4.classList.add('animate');
  fcall = false;
}

function move5() {
  if (fcall) {
  hoba();
  disableSub(); }
  moveFlag5 = true;
  removePrev();
  el5.classList.add('animate');
  information5.classList.add('animate');
  fcall = false;
}
