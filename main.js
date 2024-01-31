window.onload = function() {
    console.log("Document loaded");
    document.getElementById("main").style.display = "none";
};
function hideMain() {
    document.getElementById("mainImg").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('penalty.jfif')";
}