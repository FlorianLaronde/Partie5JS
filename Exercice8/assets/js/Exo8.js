var i = 0;
var original = document.getElementById('duplicater');

function duplicate() {
    var clone = original.cloneNode(true); //"deep" clone
    i++;
    clone.id = "duplicater" + i;
    //or clone.id = ""; if the divs don't need an ID
    original.parentNode.appendChild(clone);
}