var catList = document.getElementById("catList");

fetch("https://cat-fact.herokuapp.com/facts")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    data.forEach(function (item) {
      var fact = item.text;
      var newItem = "<li>" + fact + "</li>";

      catList.innerHTML += newItem;
    });
  });
