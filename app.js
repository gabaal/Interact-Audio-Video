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
stopBtn.addEventListener(`click`, function () {
  nature.pause();
  nature.currentTime = 0;
});
pauseBtn.addEventListener(`click`, function () {
  nature.pause();
});
skipFor.addEventListener(`click`, function () {
  nature.currentTime += 10;
});
skipBack.addEventListener(`click`, function () {
  nature.currentTime -= 10;
});
