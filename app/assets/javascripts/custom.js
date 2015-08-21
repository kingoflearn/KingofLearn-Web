// var data = [
//   {
//     "name": "MUHAMMAD UMER",
//     "username": "techsin",
//     "score": "165"
//   },
//   {
//     "name": "DAMIAN LAJARA",
//     "username": "damianlajara",
//     "score": "161"
//   },
//   {
//     "name": "GIANCARLO MARTINEZ",
//     "username": "GxDesign",
//     "score": "155"
//   },
//   {
//     "name": "HENRY PAULINO",
//     "username": "henrypl95",
//     "score": "150"
//   },
//   {
//     "name": "ANDREW PERSAD",
//     "username": "akpersad",
//     "score": "138"
//   },
//   {
//     "name": "MENACHEM BLESOFSKY",
//     "username": "mannybeso",
//     "score": "138"
//   },
//   {
//     "name": "WAYNE TATUM",
//     "username": "KingLemuel",
//     "score": "131"
//   },
//   {
//     "name": "ALEXANDER BURTON",
//     "username": "PurpIeHaze",
//     "score": "129"
//   },
//   {
//     "name": "GILBERTO VELEZ",
//     "username": "gil93",
//     "score": "128"
//   },
//   {
//     "name": "DYLAN O'KEEFE",
//     "username": "dylan-okeefe",
//     "score": "126"
//   },
//   {
//     "name": "LEWIS MATOS",
//     "username": "LewisMatos",
//     "score": "125"
//   },
//   {
//     "name": "ZALMAN BLAU",
//     "username": "ZalmanB",
//     "score": "124"
//   },
//   {
//     "name": "OMRIKA FOLKES",
//     "username": "Omrika",
//     "score": "123"
//   },
//   {
//     "name": "LOIS TATIS",
//     "username": "wolfwzrd",
//     "score": "123"
//   },
//   {
//     "name": "PETER HAN",
//     "username": "peterhan92",
//     "score": "119"
//   },
//   {
//     "name": "HASSAN NAEEM",
//     "username": "hnae6443",
//     "score": "119"
//   },
//   {
//     "name": "STEPHEN KOLTZ",
//     "username": "skoltz",
//     "score": "117"
//   },
//   {
//     "name": "ISAAC LAPIDES",
//     "username": "Ilapides",
//     "score": "113"
//   },
//   {
//     "name": "CARSON CRANE",
//     "username": "Cranium1",
//     "score": "111"
//   },
//   {
//     "name": "JAIMIE WALKER",
//     "username": "JaimieWalker",
//     "score": "109"
//   },
//   {
//     "name": "LEONARDO CASTILLO",
//     "username": "cloudleo",
//     "score": "107"
//   },
//   {
//     "name": "DJAVAN JOSEPH",
//     "username": "DJoseph1250",
//     "score": "107"
//   },
//   {
//     "name": "SAMUEL JOLI",
//     "username": "Samueljoli",
//     "score": "106"
//   },
//   {
//     "name": "CHRISTOPHER DABALSA",
//     "username": "Gettekt",
//     "score": "103"
//   },
//   {
//     "name": "JEREMY DELVALLE",
//     "username": "jmdelvalle",
//     "score": "101"
//   },
//   {
//     "name": "BRIAN MESA",
//     "username": "Bmesa620",
//     "score": "100"
//   },
//   {
//     "name": "LAWRENCE CHONG",
//     "username": "lawrencechong",
//     "score": "95"
//   },
//   {
//     "name": "JENNA FELDMAN",
//     "username": "feljen",
//     "score": "85"
//   },
//   {
//     "name": "RANDY CASTRO",
//     "username": "RaptorDog",
//     "score": "79"
//   },
//   {
//     "name": "BRUNA NETTO",
//     "username": "BrunaNett",
//     "score": "74"
//   },
//   {
//     "name": "ESTHER MOHADEB",
//     "username": "EstherMo",
//     "score": "72"
//   },
//   {
//     "name": "SYLVIA DOLMO",
//     "username": "sdolmo",
//     "score": "65"
//   }
// ];

// var cont = $('.cont'),
//   ul = $('.cont ul');

// for(var i = 0; i< 7; i++){
//   var d=data[i];
//   addPanel(d.name, d.score, d.username);
// }

// function addPanel(n, s, l) {
//   var li = $("<li>");
//   li.text(n).append($("<span class='score'>").text(s));
//   li.click(openUrl(l));
//   ul.append(li);
// }

// function openUrl(user) {
//   return function() {
//     window.open("https://www.learn.co/" + user)
//   }
// }

// ul.on('scroll', animate);

// /*cont.on('mousewheel', function(e) {
//   ul.scrollTop(ul.scrollTop() + e.originalEvent.deltaY);
//   animate(); 
// });*/

// function animate() {
//   console.log(3);
//   var c = ul[0];
//   if (c.scrollHeight - c.scrollTop - 10 < c.clientHeight) {
//     cont.addClass('btmanimation');
//   } else if (c.scrollTop == 0) {
//     cont.addClass('topanimation');
//   } else {
//     cont.removeClass('btmanimation topanimation');
//   }
// }