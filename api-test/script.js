fetch("https://statsapi.web.nhl.com/api/v1/game/2022020454/feed/live")
.then(res => res.json())
.then(res => console.log(res))