(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(45)},27:function(e,t,a){},28:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},29:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var i={};a.r(i),a.d(i,"SHUFFLE_MOVIES",function(){return p}),a.d(i,"ORDERED_MOVIES",function(){return g}),a.d(i,"SELECTED_MOVIES",function(){return _}),a.d(i,"REMOVE_SHUFFLED_MOVIE",function(){return u}),a.d(i,"REMOVE_SELECTED_MOVIE",function(){return f}),a.d(i,"ADD_MOVIE",function(){return w}),a.d(i,"shuffleMovies",function(){return E}),a.d(i,"selectedMovies",function(){return b}),a.d(i,"removeShuffledMovie",function(){return k}),a.d(i,"removeSelectedMovie",function(){return M}),a.d(i,"addMovie",function(){return S});var n=a(0),o=a.n(n),r=a(5),s=a.n(r),l=(a(27),a(15)),c=a(16),d=a(20),v=a(17),m=a(21),h=(a(28),a(29),{0:{title:"Iron Man",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/2/20/Ironmanposter.jpg/revision/latest/scale-to-width-down/338?cb=20080502172105"},1:{title:"The Incredible Hulk",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/7/78/The_Incredible_Hulk_%28film%29.jpg/revision/latest/scale-to-width-down/338?cb=20080529212502"},2:{title:"Iron Man 2",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/e/ed/Iron_Man_2_poster.jpg/revision/latest/scale-to-width-down/339?cb=20190309193419"},3:{title:"Thor",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/9/9c/Thor_Theatrical_Poster.jpg/revision/latest/scale-to-width-down/338?cb=20120605120807"},4:{title:"Captain America: The First Avenger",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/3/37/Captain_America_The_First_Avenger_poster.jpg/revision/latest?cb=20110725134313"},5:{title:"The Avengers",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/1/1a/The_Avengers_%28film%29_poster_011.jpg/revision/latest/scale-to-width-down/338?cb=20120229020811"},6:{title:"Iron Man 3",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/e/e9/Iron_Man_3_%28film%29_poster_006.jpg/revision/latest/scale-to-width-down/337?cb=20130228172348"},7:{title:"Thor: The Dark World",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/e/e5/Thor_The_Dark_World_poster_002.jpg/revision/latest/scale-to-width-down/337?cb=20130801204202"},8:{title:"Captain America: The Winter Soldier",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/0/03/Captain_America_The_Winter_Soldier_poster_005.jpg/revision/latest/scale-to-width-down/337?cb=20140131142746"},9:{title:"Guardians of the Galaxy",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/b/b9/Guardians_of_the_Galaxy_%28film%29_poster_001.jpg/revision/latest/scale-to-width-down/337?cb=20140516161438"},10:{title:"Avengers: Age of Ultron",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/e/ee/Avengers_Age_of_Ultron_poster_001.jpg/revision/latest/scale-to-width-down/337?cb=20150224171724"},11:{title:"Ant-Man",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/d/d6/Ant-Man_%28film%29_poster_001.jpeg/revision/latest/scale-to-width-down/337?cb=20150506151531"},12:{title:"Captain America: Civil War",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/5/5c/Civil_War_Final_Poster.jpg/revision/latest/scale-to-width-down/337?cb=20160310174551"},13:{title:"Doctor Strange",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/2/23/Doctor_Strange_%28film%29_poster_003.jpg/revision/latest/scale-to-width-down/337?cb=20160724013508"},14:{title:"Guardians of the Galaxy Vol. 2",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/9/94/Guardians_of_the_Galaxy_Vol._2_%28film%29_poster_004.jpg/revision/latest/scale-to-width-down/337?cb=20170301052056"},15:{title:"Spider-Man: Homecoming",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/4/4f/Spider-Man_Homecoming_poster_004.jpg/revision/latest/scale-to-width-down/337?cb=20170524085936"},16:{title:"Thor: Ragnarok",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/3/30/Thor_Ragnarok_poster_002.jpg/revision/latest/scale-to-width-down/337?cb=20170723014825"},17:{title:"Black Panther",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/9/94/Black_Panther_%28film%29_poster_003.jpg/revision/latest/scale-to-width-down/337?cb=20171016144930"},18:{title:"Avengers: Infinity War",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/8/8b/Avengers_Infinity_War_poster_002.jpg/revision/latest/scale-to-width-down/337?cb=20180318160428"},19:{title:"Ant-Man and the Wasp",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/3/38/Ant-Man_and_the_Wasp_%28film%29_poster_002.jpg/revision/latest/scale-to-width-down/337?cb=20180430180151"},20:{title:"Captain Marvel",img:"https://vignette.wikia.nocookie.net/marveldatabase/images/3/33/Captain_Marvel_%28film%29_poster_002.jpg/revision/latest/scale-to-width-down/337?cb=20181203081354"}}),p="SHUFFLE_MOVIES",g="ORDERED_MOVIES",_="SELECTED_MOVIES",u="REMOVE_SHUFFLED_MOVIE",f="REMOVE_SELECTED_MOVIE",w="ADD_MOVIE",E=function(e){return{type:p,payload:e}},b=function(e){return{type:_,payload:e}},k=function(e){return{type:u,payload:e}},M=function(e){return{type:f,payload:e}},S=function(e){return{type:w,payload:e}},O=a(6),j=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.shuffle(Object.keys(h));console.log(e),this.props.shuffleMovies(e)}},{key:"shuffle",value:function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),i=[e[a],e[t]];e[t]=i[0],e[a]=i[1]}return e}},{key:"renderShuffled",value:function(){var e=this,t=this.props.ShuffledMovies;return t.length<1?o.a.createElement("h6",{className:"center white-text"},"No Movies in this list"):t.map(function(t){return o.a.createElement("div",{className:"col s4",key:t},o.a.createElement("img",{src:h[t].img,height:300,onClick:function(){e.props.selectedMovies(t),e.props.removeShuffledMovie(t)}}))})}},{key:"renderSelectedMovies",value:function(){var e=this;if(this.props.SelectedMovies){var t=this.props.SelectedMovies;return t.length<1?o.a.createElement("h6",{className:"center white-text"},"No Movies in this list"):t.map(function(t){return o.a.createElement("div",{className:"col s4",key:t},o.a.createElement("img",{src:h[t].img,height:300,onClick:function(){e.props.removeSelectedMovie(t),e.props.addMovie(t)}}))})}}},{key:"render",value:function(){return this.props.ShuffledMovies?o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"shuffle col s12 m12 l6 container"},o.a.createElement("div",{className:"row"},o.a.createElement("h3",{className:"center white-text"},"Shuffled Movies"),o.a.createElement("br",null),o.a.createElement("br",null),this.renderShuffled())),o.a.createElement("div",{className:"ordered col s12 m12 l6 container"},o.a.createElement("div",{className:"row"},o.a.createElement("h3",{className:"center white-text"},"Selected Movies"),o.a.createElement("br",null),o.a.createElement("br",null),this.renderSelectedMovies())))):o.a.createElement("div",null,"Loading...")}}]),t}(n.Component);var y=Object(O.b)(function(e){return{ShuffledMovies:e.ShuffledMovies,SelectedMovies:e.SelectedMovies}},i)(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(1),T=a(3),D=Object(I.c)({ShuffledMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.payload;case u:var a=Object(T.a)(e);return a.splice(a.indexOf(t.payload),1),a;case w:return[].concat(Object(T.a)(e),[t.payload]);default:return e}},SelectedMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return[].concat(Object(T.a)(e),[t.payload]);case f:var a=Object(T.a)(e);return a.splice(a.indexOf(t.payload),1),a;default:return e}}}),A=a(19),V=a.n(A),N=Object(I.a)(V.a)(I.d);s.a.render(o.a.createElement(O.a,{store:N(D,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__({trace:!0}))},o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.830b4bb8.chunk.js.map