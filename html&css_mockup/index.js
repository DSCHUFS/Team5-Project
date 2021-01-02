function openPosts(postKind) {
  var x = document.getElementsByClassName("posts");
  var btns = document.getElementsByClassName("tab-bar-button");

  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  document.getElementById(postKind).style.display = "flex";
}

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}