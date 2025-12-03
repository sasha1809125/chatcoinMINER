// Boot animation
setTimeout(() => {
    document.getElementById("boot-screen").classList.add("hidden");
    document.getElementById("desktop").classList.remove("hidden");
}, 2500); // 2.5 sec boot, как у старых маков

// Open window on HD click
document.getElementById("icon-hd").addEventListener("dblclick", () => {
    document.getElementById("window").classList.remove("hidden");
});

// Close window
document.getElementById("close-window").addEventListener("click", () => {
    document.getElementById("window").classList.add("hidden");
});
