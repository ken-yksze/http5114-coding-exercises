var bookList = document.getElementById("bookList");
var key = "AIzaSyDtduztEVoVkKqoN19sEAoJYrPu-LlG5YY";
var url = "https://www.googleapis.com/books/v1/volumes?q=hunger&key=";

// https://developers.google.com/books/docs/v1/getting_started

fetch(url + key)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    data.items.forEach(function (item) {
      var title = item.volumeInfo.title;
      var author = item.volumeInfo.authors[0];
      var link = item.volumeInfo.canonicalVolumeLink;
      if (item.volumeInfo.hasOwnProperty("imageLinks")) {
        var image = item.volumeInfo.imageLinks.smallThumbnail;
      }

      var newItem =
        "<li><h2>" +
        title +
        "</h2>" +
        author +
        "<br>" +
        "<a href='" +
        link +
        "'>" +
        link +
        "</a><br>";
      if (item.volumeInfo.hasOwnProperty("imageLinks")) {
        newItem += "<img src='" + image + "'>";
      }
      newItem += "</li>";

      bookList.innerHTML += newItem;
    });
  });
