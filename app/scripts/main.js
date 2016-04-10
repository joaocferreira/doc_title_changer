var titleIn = document.title;
var titleOut = ":( I miss you";
var titleWelcome = "Nice"
var changeTitle;

document.addEventListener("mouseleave", function(){
    changeTitle = setTimeout(function () {
        document.title = titleOut;
    }, 1000);
});

document.addEventListener("mouseenter", function(){
    clearTimeout(changeTitle);

    if (document.title != titleIn) {
        document.title = titleWelcome;
        setTimeout(function () {
            document.title = titleIn;
        }, 200);
    }

});
