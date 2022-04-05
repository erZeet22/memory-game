var cards = ["photo1.png", "photo4.png", "photo2.png", "photo3.png", "photo5.png", "photo6.png", "photo1.png", "photo4.png", "photo2.png", "photo3.png", "photo5.png", "photo6.png"];
var oneVisible = false;
var cardnr;

function odkryj(nr) {
    var obraz = "url(" + cards[nr] + ")";
    $("#c" + nr).css("background-image", obraz);


    if (oneVisible == false) {
        //pierwsza karta
        oneVisible = true;
        cardnr = nr;

    } else {
        //druga karta
        if (cards[cardnr] == cards[nr]) {
            alert("para");
        } else {
            alert("pudło")
        }
    }
}