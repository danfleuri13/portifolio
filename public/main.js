
function showHome() {
    document.getElementById("main").style.display = 'grid';
    document.getElementById("profile").style.display = 'none';
    document.getElementById("exp").style.display = 'none';
}
function showProfile() {
    document.getElementById("main").style.display = 'none';
    document.getElementById("profile").style.display = 'grid';
    document.getElementById("exp").style.display = 'none';
}

function showExp() {
    document.getElementById("main").style.display = 'none';
    document.getElementById("profile").style.display = 'none';
    document.getElementById("exp").style.display = 'grid';
}


