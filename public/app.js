// $.getJSON("/articles", function(data) {
//     // For each one
//     for (var i = 0; i < data.length; i++) {
//       //$("#articles").append("<p class='article-break'>" + data[i].title + "</p>")

//     }
//   });

$("#scrape").on("click", function() {
    $.ajax({
        method: "GET",
        url: "/scrape"
    }).then(function(data) {
        console.log(data)
        for (var i = 0; i < 6; i ++) {
          var articleDiv = $("<div>")
          articleDiv.append(data[i].title)
          articleDiv.addClass("article-break")
          $("#articles").append(articleDiv)
        }
    })
})