function getData() {
    $('.GIf').empty();
    var searchParm = document.getElementById("searchBox").value;
    console.log(searchParm);

    var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${searchParm}&api_key=GZ85UIUEKT6LXr7u6gS3jQJ93R81uA19&limit=25`);

        xhr.done(function (response) {
        console.log("success got data", response);

        var img = "";
        img = response.data;
        console.log("count",img.length);
        var imgCount = img.length;
        document.getElementById("imgCount").innerHTML = imgCount;
        



        for (i in img) {
            $('.GIf').append(`<img id='img' src='${img[i].images.original.url}'>`)
        }
    });
}


function menuToggle() {
    var x = document.getElementById("menu");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }