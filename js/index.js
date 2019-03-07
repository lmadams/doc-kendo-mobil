var app = new kendo.mobile.Application($(document.body), {
  transition: "slide",
  skin: "material"
});


function onClickLogin() {
  app.navigate('menu');
}

function onClickMenu() {
  app.navigate('detail');
}
