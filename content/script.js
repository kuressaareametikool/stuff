
function myFunction(background_picture) {
	var picture = background_picture;
    document.getElementsByTagName("body")[0].style.backgroundImage="-webkit-linear-gradient(top, rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)), url('"+picture+"')";
    document.getElementsByTagName("body")[0].style.backgroundSize = "100% 100%";
}