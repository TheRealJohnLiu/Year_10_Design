news()
async function news() {
  var url = 'http://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?' +
  'q=NHL&' +
  'sortBy=popularity&' +
  'apiKey=a42e7594bbe2463589399dec9e9f0c01';
  
  var req = new Request(url);
  response = await fetch(req);
  response = await response.json()

  buildNews(response.articles)
}

function buildNews(articles) {
  console.log(articles);
  newsData = {}
  newsUrl = {}
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    var a = document.createElement('div')
    newsData[i] = article.description
    newsUrl[i] = article.url
    a.innerHTML = `
      <button data-toggle="modal" data-target="#exampleModal" onclick="showNews('${i}')" class="btn btn-light my-1" type="button" >${article.title}</button>
      <br>
      <img src='${article.urlToImage}'>
      <p class="hidden" id="${i}text">${article.description}</p>
    `
    // <div>The Flash/div>

    document.getElementById('news').appendChild(a) //// :D 

  }
}

function showNews(id) {
  $('#newscontent').html(`${newsData[id]} <br><br> <a href="${newsUrl[id]}">${newsUrl[id]}</a>`)
}

//---------------------------------------------------------------------------------


// hockey()

window.nhlData1 = {}

nhl()
async function nhl() {
  var url = 'https://statsapi.web.nhl.com/api/v1/teams';
  
  var req = new Request(url);
  response = await fetch(req);
  response = await response.json()

  console.log(response);
  for (let i = 0; i < response.teams.length; i++) {
    const element = response.teams[i];

    nhlData1[element.id] = element
    // element.name, element.id, element.abbreviation

    myElement = document.createElement('div')
    myElement.classList.add('divthingy')
    myElement.innerHTML = `
    <button class="teambtn" onclick="showTeamData('${element.id}')">${element.name}</button>
    `
    // <a href="link">text</a>

    $('#roster').get(0).appendChild(myElement)
    
  }
}

function showTeamData(id) {
  // Toggle modal
  $('#hockey').modal('toggle')

  $("#hockeystuff").html(`
  
    ${nhlData1[id].officialSiteUrl}
    ${nhlData1[id].shortName}
  
  `)

}