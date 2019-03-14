
//two calls - 
//need to call first for songs and add rows to table and for each track, get the lyrics URL from 
//
//http://api.musixmatch.com/ws/1.1/track.search?q_track=footloose&apikey=28e8336b7ccf4b5261bf290e9cfc6874&s_track_rating=desc&page_size=3&page=2

var searchLyric = "over the rainbow"; //$("#songLyric").val()//.trim();
var searchArtist = ""; 
var trackId = "";
var searchQuery = searchLyric + "&q_artist="+searchArtist; 

var trackQueryURL = "https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=" + searchQuery + 
    "&apikey=28e8336b7ccf4b5261bf290e9cfc6874&s_track_rating=desc&page_size=10&page=1"

var snippetQueryURL = "https://api.musixmatch.com/ws/1.1/track.snippet.get?track_id=" + trackId + "&apikey=28e8336b7ccf4b5261bf290e9cfc6874"

console.log(searchLyric);
console.log("test");

$.ajax({
  type: 'GET',
  url: trackQueryURL,
  contentType: 'application/json',
  dataType:'jsonp',
  responseType:'application/json',
  xhrFields: {
    withCredentials: false
  },
  headers: {
    'Access-Control-Allow-Credentials' : true,
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET',
    'Access-Control-Allow-Headers':'application/json',
  },
  success: function(data) {
    console.log(data);
  },
  error: function(error) {
    console.log("FAIL....=================");
  }
});

            
//             var trackList = response.data;
//             for (var i = 0; i < topicGifs.length; i++) {
//                 var gifDiv = $("<div>");
//                 gifDiv.addClass("float-left");
//                 var rating = topicGifs[i].rating;
//                 var gifInfo = $("<p>").html("Rating: " + rating);
//                 var topicImage = $("<img>");

//                 //set src to static image at first
//                 topicImage.attr("src", topicGifs[i].images.fixed_height_still.url);
//                 topicImage.attr("src-animate", topicGifs[i].images.fixed_height.url);
//                 topicImage.attr("src-still", topicGifs[i].images.fixed_height_still.url);
//                 topicImage.attr("gifState", "still")
//                 topicImage.addClass("gifTastic float-left m-2")

//                 gifDiv.append(topicImage);
//                 gifDiv.append(gifInfo);
//                 $("#gifHolder").prepend(gifDiv);
//             }
//         });
// }