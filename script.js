/* Instructions on the README file of this repository */
/* Add this bit of code to the end of the script.js file */

setInterval(useMega, 5000);
setInterval(usePowerUps, 5000);
setInterval(honk, 17000);
let activeRace;

// The honk only counts once every 15 seconds or so, so a 17 seconds timer shouldn't have any issues.
function honk() {
  activeRace = document.querySelector(".activeRaceItem");
  if (activeRace) {
    const honkButton = document.querySelector(".actionButton");
    if (honkButton)
      honkButton.click();
  }
}

// Use all power ups available
function usePowerUps() {
  if (activeRace) {
    const powerUpButtons = document.querySelectorAll('.cursor-pointer.font-bold');
    if (powerUpButtons) {
      powerUpButtons.forEach(button => {
        button.click();
      });
    }
  }
}

//Use megas if available
function useMega() {
  if (activeRace) {
    const megaButton = document.querySelector('.ml-4');
    if (megaButton) {
      megaButton.click();
    }
  }
}
