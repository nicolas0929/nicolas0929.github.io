//Get the button
var mybutton = document.getElementById("myBtn");

// main page to other page
function navigateTo(page_selected) {
    document.getElementById(page_selected).style.display='block';
    document.getElementById("mainPage").style.display='none';
}

// back to main page
function returnToMain(previous_page) {
    document.getElementById(previous_page).style.display='none';
    document.getElementById("mainPage").style.display='block';
}