// 5. Create a way to listen for a click that will play the song in the audio play

const container = document.querySelector('.container')
let player = document.querySelector('.music-player')
let results = document.querySelector('.results')
let submitButtom = document.querySelector('.submitButton')

  const form = document.querySelector(".search-form")
  form.addEventListener('submit', function(event){
    event.preventDefault()

    const resultsDisplay = document.querySelector(".resultsDisplay")
    resultsDisplay.innerHTML =""// destroy all the content

    const input = document.querySelector("#inputField").value;
    console.log(input)

    fetch(`https://itunes.apple.com/search?term=${input}`)
    .then(function(data){
      return data.json()
    }).then(function(json){
      console.log(json);

      for (var i = 0; i < json.results.length; i++) {

        const searchResults = `

        <div class ="searchResultsItems">
        <img class ="resultsImage" src="${json.results[i].artworkUrl100}" value=${json.results[i].previewUrl}>
          <a href="https://en.wikipedia.org/wiki/${input}"><h3 class ="resultsArtist">${json.results[i].artistName}</h3></a>
          <a href="${json.results[i].previewUrl}"><h4 class="resultsTitle" value = ${json.results[i].previewUrl}>${json.results[i].trackName}</h4></a>
        </div>

        `
        resultsDisplay.insertAdjacentHTML("beforeEnd", searchResults)
      }

      let resultsImage = document.querySelector(".resultsImage")
      results.addEventListener('click', function(e) {
        if (e.target && e.target.nodeName == "IMG") {
          player.src = e.target.getAttribute('value')
        }
    })
  })
})
