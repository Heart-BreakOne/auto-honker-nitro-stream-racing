/* Instructions on the README file of this repository */
/* Add this bit of code to the end of the script.js file */


var honkInterval = window.setInterval(honkAThon, 15000);
function honkAThon() {
  const activeRace = document.getElementsByClassName("activeRaceItem");
  if (activeRace){
    const honkButton = document.getElementsByClassName("actionButton")[0];
    if (honkButton) {
      honkButton.click();
    }
  }
}
