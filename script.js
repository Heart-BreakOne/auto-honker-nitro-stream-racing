/* Instructions on the README file of this repository */
/* Add this bit of code to the end of the script.js file */

/* The honk only counts once every 15 seconds or so, so a 17 seconds timer shouldn't have any issues. */
setInterval(function () {
  const activeRace = document.querySelector(".activeRaceItem");
  if (activeRace) {
    const honkButton = document.querySelector(".actionButton");
    if (honkButton)
      honkButton.click();
  }
}, 17000);
