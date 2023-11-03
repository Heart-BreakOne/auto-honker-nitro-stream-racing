let activeRace;
setInterval(usePowerUps, 5000);
setInterval(honk, 17000);
setInterval(collect, 2000);

//Claims race reward
function collect() {
  const button = document.getElementById("claimButton");
  if (button) {
    button.click();
    activeRace = false
  }
}

// The honk only counts once every 15 seconds or so, so a 17 seconds timer shouldn't have any issues.
function honk() {
  if (activeRace) {
    const honkButton = document.querySelector(".actionButton");
    if (honkButton)
      honkButton.click();
  }
}

// Use all power ups and megas available
function usePowerUps() {
  activeRace = document.querySelector(".activeRaceItem");
  if (activeRace) {
    const megaButton = document.querySelector('.ml-4');
    if (megaButton) {
      megaButton.click();
    }
    const powerUpButtons = document.querySelectorAll('.cursor-pointer.font-bold');
    powerUpButtons.forEach(button => {
      button.click();
    });
  }
}