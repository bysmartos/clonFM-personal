import {filtrarEstilo} from "./testing.js"
//Sandra escribe debajo de esta linea 
//Esto es para ver el array en la consola

    fetch("music.json")
    .then(res => res.json())
    .then(data=>console.log(data));
    
 //USER STORY 1: se carga el listado JSON  con todas las canciones al cargar la pagina  
window.addEventListener("load", cargarJSON);

function cargarJSON(){
    fetch("music.json")
     .then(res => res.json())
     .then(function(data){
         let html="";
         data.forEach(song => {
             html += `<li><img src="logoMusica.png" atr=""/ ><span class="songArtist" > <a href=${song.artist.url}> ${song.artist.name} </a> </span> <span class="songBold"> <a href=${song.url}> ${song.name} </a> </span><span class="listEnd"> ${song.listeners} listeners</span></li>`
         });
         document.querySelector(".songs").innerHTML=html;
         document.querySelector("#titleSongsContainer").innerHTML="Overview";
         
     });
}

// FUNCION PARA FILTRO ESTILO MUSICAL

 //USER STORY 4: Cuando clico en la opción "Rock" de la barra superior Entonces puedo ver un listado con las canciones más escuchadas del género rock
 let rock = document.querySelector(".rock")
 rock.addEventListener("click", listaRock);

 function listaRock(){
    fetch("music.json")
    .then(res => res.json())
    .then(data=>filtrarEstilo(data,"rock","Rock") )     
 };

   



 //USER STORY 6: Cuando clico en la opción "Rock" de la barra superior Entonces puedo ver un listado con las canciones más escuchadas del género rock
 let indie = document.querySelector(".indie")
 indie.addEventListener("click", listaIndie);

 function listaIndie(){
    fetch("music.json")
    .then(res => res.json())
    .then(data=>filtrarEstilo(data,"indie","Indie"))
        
    };

    //USER STORY 12
 let biggest = document.querySelector("#biggest")
 biggest.addEventListener("click", listaBiggest);

    function listaBiggest(){
        fetch("music.json")
        .then(res => res.json())
        .then(function(data){
            let html="";
            let arrayArtistas = data.reduce((artistaSinRepetir, currentArtista) =>{

                if(!artistaSinRepetir.find(d => d == currentArtista.artist.name)) {
                    artistaSinRepetir.push(currentArtista.artist.name)
                } 
                return artistaSinRepetir;
               }, [])
           
               console.log( arrayArtistas);
               arrayArtistas = arrayArtistas.map(function(elemento){
                return {name: elemento};
              });

              console.log(arrayArtistas)

            arrayArtistas.forEach(artist => {
                let filter = data.filter(a => a.artist.name.includes(artist.name)) 
                console.log(filter);
                let contador= filter.reduce((a ,b) => a + parseInt(b.listeners),0)
                artist.listeners= contador;
            })
            console.log(arrayArtistas)
            let dataOrdenado= arrayArtistas.sort(function (a, b) {
                if (a.listeners > b.listeners) {
                    return -1;
                } else if (a.listeners < b.listeners) {
                    return 1;
                } else {
                    return 0;
                }
            });
            console.log(dataOrdenado);
            let grupoBiggest= dataOrdenado[0].name;
             let biggestArray= data.filter(song => song.artist.name.includes(grupoBiggest) )
                biggestArray.forEach(song => {
                    html += `<li><img src="logoMusica.png" atr="" ><span class="songArtist" > <a href=${song.artist.url}> ${song.artist.name} </a> </span> <span class="songBold"> <a href=${song.url}> ${song.name} </a> </span><span class="listEnd"> ${song.listeners} listeners</span></li>`
                });
                document.querySelector(".songs").innerHTML=html;
                document.querySelector("#titleSongsContainer").innerHTML="The Biggest";
                })

    }
    
       

//Sara escribe debajo de esta linea

let top10text = document.querySelector("#top10")
 top10text.addEventListener("click", listaTop10);
function listaTop10(){
    fetch("music.json")
    .then(res => res.json())
    .then(function(data){
        let html="";
        let dataOrdenado= data.sort(function (a, b) {
                if (parseInt(a.listeners) > parseInt(b.listeners)) {
                    return -1;
                } else if (parseInt(a.listeners) < parseInt(b.listeners)) {
                    return 1;
                } else {
                    return 0;
                }
            });
            console.log(dataOrdenado);
        
        let top10Array= dataOrdenado.slice(0,10);
        top10Array.forEach(song => {
            html += `<li><img src="logoMusica.png" atr="" ><span class="songArtist" >  ${song.artist.name}</span> <span class="songBold" >${song.name}</span><span class="listEnd"> ${song.listeners} listeners</span></li>`
        });
        document.querySelector(".songs").innerHTML=html;
        document.querySelector("#titleSongsContainer").innerHTML="Top 10 listened";
        })
        
    };

   /**User story 8**
    Cuando clico en la opción "Reggae",
puedo ver un listado con las canciones más escuchadas del género reggae*/

let reggae = document.querySelector(".reggae")
 reggae.addEventListener("click", listaReggae);

   function listaReggae(){
    fetch("music.json")
    .then(res => res.json())
    .then(data=>filtrarEstilo(data,"alternative","Reggae"))
    }

    /*User story 9*/ 


    
    let overviewMenu=document.getElementById("overview");
     overviewMenu.addEventListener("click",clickorder1);
    let top10Listened=document.getElementById("top10");
    top10Listened.addEventListener("click", clickorder2);
    let theBiggest=document.getElementById("biggest");
    theBiggest.addEventListener("click", clickorder3);
    
     
   function clickorder1(){
       overviewMenu.style.color="rgb(186,0,0)"
       top10Listened.style.color="black"
       theBiggest.style.color="black"
    } 
    function clickorder2(){
        overviewMenu.style.color="black"
        top10Listened.style.color="rgb(186,0,0)"
        theBiggest.style.color="black"
    }
   
    function clickorder3(){
        overviewMenu.style.color="black"
        top10Listened.style.color="black"
        theBiggest.style.color="rgb(186,0,0)"

    }

  

//Helena escribe debajo de esta linea
//U2
//HELENA
//U2 al hacer click en overwieu se carga songs list
const overview=document.querySelector("#overview")
overview.addEventListener('click', cargarJSON);


//U5 al hacer click en hip-hop nav bar, aparece songs list de ése género
let hiphop = document.querySelector(".hip-hop")
 hiphop.addEventListener("click", listaHiphop);

 function listaHiphop(){
    fetch("music.json")
    .then(res => res.json())
    .then(data=>filtrarEstilo(data,"Hip-Hop","Hip-Hop"))
        
    };
    //U7 al hacer click en Jazz nav bar aparece songs list de ése género. Como no hay jazz songs he filtrado por psychedelic genero.

 let jazz = document.querySelector(".jazz")
 jazz.addEventListener("click", listaJazz);

 function listaJazz(){
    fetch("music.json")
    .then(res => res.json())
    .then(data=>filtrarEstilo(data,"psychedelic","Jazz"))
        
    };

