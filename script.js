var index = 0;
const createTab = document.getElementById("create-tab");
createTab.addEventListener("click", (event) => {
  document.getElementById("first").style.display = "block";
  var newTabName = document.getElementById("new-name").value;
  var tag = document.createElement("button"); // <button></button>
  var text = document.createTextNode(newTabName);
  tag.appendChild(text); // <button>{newTabName}</button>
  var element = document.getElementsByClassName("tab")[0];
  element.appendChild(tag);
  tag.name = index;
  index = index + 1;
  tag.className = "links";
  var newContent = document.getElementById("myTextarea").value;
  var currentLink = document.getElementsByClassName("links");

  tag.onclick = function (name) {
    for (var i = 0; i < document.getElementsByClassName("links").length; i++) {
      document.getElementsByClassName("links")[i].classList.remove("active");
    } //remove all the active tags
    var currentTab = document.getElementById("content");
    currentTab.style.display = "block";

    document.getElementById("content").innerHTML = newContent;
    document.getElementsByClassName("links")[tag.name].classList.add("active"); // define the active tags
  };

  document.getElementById("new-name").value = "";
  document.getElementById("myTextarea").value = "";
  event.preventDefault(); // It will not refresh the page
});

const goToTab = document.getElementById("go-to-tab");
goToTab.addEventListener("click", (event1) => {
  document.getElementById("after").style.display = "block";
  document.getElementById("first").style.display = "none";
  event1.preventDefault(); // check it
});

const goBack = document.getElementById("go-back");
goBack.addEventListener("click", (event2) => {
  document.getElementById("after").style.display = "none";
  document.getElementById("first").style.display = "block";
  event2.preventDefault();
});

const clearTabs = document.getElementById("clear-tab");
clearTabs.addEventListener("click", (e) => {
  var del = document.getElementById("tabs");
  var tabCount = del.childElementCount;
  console.log(tabCount);
  for (var i = 0; i < tabCount; i++) {
    if (del.hasChildNodes()) {
      console.log(del.children[0]);
      del.removeChild(del.children[0]);
    }
  }
  document.getElementById("content").innerHTML = "";
  e.preventDefault();
});
