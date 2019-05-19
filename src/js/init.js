import view from './view.js'
import controller from './controller.js'
function init() {
  view.start();
  view.generateShips();
  controller.keyPress();
  controller.btnStop.onclick = view.stop;
}

document.addEventListener('DOMContentLoaded',function(){
  controller.btnStart.onclick = init;
  controller.btnRank.onclick = view.rank;
  view.renderRank();
});