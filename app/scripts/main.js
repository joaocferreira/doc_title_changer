var titleIn = document.title;
var titleOut = ":( I miss you";
var titleWelcome = "Nice"
var changeTitle;

document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    document.title = titleOut;
  } else {
    document.title = titleWelcome;
  }
});
