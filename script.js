let activeRace;

setInterval(() => document.getElementById("claimButton")?.click() && (activeRace = false), 2000);
setInterval(() => activeRace && document.querySelector(".actionButton")?.click(), 17000);
setInterval(() => {
  activeRace = document.querySelector(".activeRaceItem");
  activeRace && document.querySelectorAll('.ml-4, .cursor-pointer.font-bold').forEach(button => button.click());
}, 5000);