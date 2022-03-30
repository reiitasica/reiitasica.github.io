// Sound
function playSoundPick() {
    var sound = document.getElementById("audiopick");
    sound.load();
    sound.play();
  }
  function playSoundClear() {
    var sound = document.getElementById("audioclear");
    sound.load();
    sound.play();
  }
  function playSoundWrong() {
    var sound = document.getElementById("audiowrong");
    sound.load();
    sound.play();
  }
  function playSoundLoad() {
    var sound = document.getElementById("audioload");
    sound.load();
    sound.play();
  }

// Insert angka ke textview
function insert(num){
	document.form.textarea.value = document.form.textarea.value + num;
    playSoundPick();
    display.innerHTML = theNum;
}

// Fungsi Hitung
function equal(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = eval(hasil);
    playSoundLoad();
}

// Clean
function clean(){
	document.form.textarea.value = "";
    playSoundClear();
}

// Delete
function back(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = hasil.substring(0,hasil.length-1);
}