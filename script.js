/* Instructions on the README file of this repository */
/* Add this bit of code to the end of the script.js file */

/* The honk only counts once every 15 seconds or so, so a 20 seconds timer shouldn't have any issues. */
var honkInterval = window.setInterval(honkAThon, 20000);
function honkAThon() {
  const activeRace = document.getElementsByClassName("activeRaceItem");
  if (activeRace){
    const honkButton = document.getElementsByClassName("actionButton")[0];
    if (honkButton) {
      honkButton.click();
    }
  }
}
