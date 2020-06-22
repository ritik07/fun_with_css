function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;
    document.getElementById("card").style["boxShadow"] = absolute +
        alpha + beta + gamma + "rgba(0, 0, 0, 0.2)";
    // Do stuff with the new orientation data
}
window.addEventListener('deviceorientation', handleOrientation);