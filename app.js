console.log(`JS Working`);

const nature = document.getElementById(`nature`);
const playBtn = document.getElementById(`play`);
const stopBtn = document.getElementById(`stop`);
const pauseBtn = document.getElementById(`pause`);
const skipFor = document.getElementById(`forward`);
const skipBack = document.getElementById(`back`);

playBtn.addEventListener(`click`, function () {
  nature.play();
});
