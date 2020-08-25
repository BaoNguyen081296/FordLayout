function getEID(id) {
  return document.getElementById(id);
}

getEID("nav__1").addEventListener("click", function () {
  var val = getEID("tab__content1").style.display;

  if (val == null || val == "" || val == "none") {
    getEID("tab__content1").attr("style", "visibility: visible");
  } else {
    getEID("tab__content1").attr("style", "visibility: hidden");
  }
});

//hàm show disclosures content
var lastView = true;
getEID("disclosures__click").addEventListener("click", function () {
  if (lastView == false) {
    getEID("disclosures__text1").style.display = "none";
    getEID("disclosures__icon").className = "fa fa-chevron-down";
    lastView = true;
  } else if (lastView) {
    $("#disclosures__text1").attr("style", "display: block");
    getEID("disclosures__icon").className = "fa fa-chevron-down open";
    lastView = false;
  }
});
