var myQuote = document.getElementById("quote-text");
var myAuthor = document.getElementById("author-name");
var quoteArray = [["Moral indignation is jealousy with a halo.", "H.G. Wells"],
                  ["You can do anything, but not everything.", "David Allen"],
                  ["Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.", "Antoine de Saint-Exupéry"],
                  ["You miss 100 percent of the shots you never take.", "Wayne Gretzky"],
                  ["Those who believe in telekinetics, raise my hand.", "Kurt Vonnegut"],
                  ["There’s so much comedy on television. Does that cause comedy in the streets?", "Dick Cavett"],
                  ["I’d rather live with a good question than a bad answer.", "Aryeh Frimer"],
                  ["I have made this letter longer than usual because I lack the time to make it shorter.", "Blaise Pascal"],
                  ["The trouble with the rat race is that even if you win, you’re still a rat.", "Lily Tomlin"]];
var newQuoteBtn = document.getElementById("new-quote");
var twitterBtn = document.getElementById("share-btn");
newQuoteBtn.onclick = function() {
    var runRandom = true;
    var oldQuote = myQuote.innerHTML;
    while(runRandom === true) {
        var rand = Math.floor(Math.random() * 10);
        if(oldQuote !== quoteArray[rand][0]) {
            myQuote.innerHTML = quoteArray[rand][0];
            myAuthor.innerHTML = quoteArray[rand][1];
            runRandom = false;
        }
    }
};
twitterBtn.onclick = function() {
    var quoteText = '"' + myQuote.innerHTML + '"' + " - " + myAuthor.innerHTML;
    window.open("https://twitter.com/intent/tweet?text=" + quoteText);
};

