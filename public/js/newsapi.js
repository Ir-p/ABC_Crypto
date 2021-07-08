// Call API news function
function getNews() {
  console.log("test");
  return new Promise(function (resolve, reject) {
    fetch(
      "https://newsapi.org/v2/everything?q=(crypto OR cryptocurrency)&apiKey=731a235df1a34bb3909c63341f260f5e"
    )
      // Turn data to JSON
      .then((response) => {
        return response.json();
      })

      .then(function (data) {
        for (let i = 0; i < 5; i++) {
          // var newsCard = [];
          // newsCard.title = data.articles[i].title;
          // newsCard.url = data.articles[i].url;
          // newsCard.description = data.articles[i].description;
          // newsCard.imageSrc = data.articles[i].urlToImage;

          $(".newsDisplay").append(
            "<h5>" + data.articles[i].description + "</h5>"
          );
          $(".newsDisplay").append(
            '<a href='+data.articles[i].url+' target=_blank><img class="articleImage" src=' +
              data.articles[i].urlToImage + " width=600px></img></a><p>"
          );
          $(".newsDisplay").append(
            '<a href='+data.articles[i].url+'>'+ data.articles[i].title + "</a><p>"
          );
        }
      })

      .catch(function (error) {
        reject(error);
      });
  });
}

function all() {
  getNews();
}

all();
document.addEventListener("load", all);
