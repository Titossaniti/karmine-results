const options = {method: 'GET', headers: {accept: 'application/json'}};
/*Last match LoL*/
fetch('https://api.pandascore.co/teams/128268/matches?filter[finished]=true&sort=&page=1&per_page=1&token=qwGVuDmu-F_mxv2UDLUbguPahXPR3GoNrTtBZbAL8lIz6PUDgjA', options)
.then(response => response.json())
.then(response => {
  const lastMatch = response[0];
  document.getElementById("league").innerHTML = lastMatch.league.name;
  document.getElementById("bo").innerHTML = "BO " + lastMatch.number_of_games;
  document.getElementById("team1").innerHTML = lastMatch.opponents[0].opponent.name;
  document.getElementById("team1score").innerHTML = lastMatch.results[0].score;
  document.getElementById("team1img").src = lastMatch.opponents[0].opponent.image_url;
  document.getElementById("team2").innerHTML = lastMatch.opponents[1].opponent.name;
  document.getElementById("team2score").innerHTML = lastMatch.results[1].score;
  document.getElementById("team2img").src =lastMatch.opponents[1].opponent.image_url;
  
})










.catch(err => console.error(err));
/**LOL 1 : 128268 */
/**RL 22 : 129570 */
/**VALO 26 : 130922 */