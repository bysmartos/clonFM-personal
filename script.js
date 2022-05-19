

//Esto es para ver el array en la consola y comprobar que llamamos correctamente al json

    fetch("music.json")
    .then(res => res.json())
    .then(data=>console.log(data));

//FUNCIONES GENERALES:

    //FUNCION PARA FILTRAR ESTILOS MUSICALES
    function filtrarEstilo(array,estilo,titulo){
        let musicArray= array.filter(song => song.genres.includes(estilo) )
        subirASongs(musicArray);
        cambiarNombreLista(titulo)
        }

    //FUNCION PARA SUBIR LAS CANCIONES FILTRADAS CON EL DOM
    function subirASongs(array){
        let html="";
        array.forEach(song => {
            html += `<li><img src="logoMusica.png" atr=""/ ><span class="songArtist" > <a href=${song.artist.url}> ${song.artist.name} </a> </span> <span class="songBold"> <a href=${song.url}> ${song.name} </a> </span><span class="listEnd"> ${song.listeners} listeners</span></li>`
        });
        document.querySelector(".songs").innerHTML=html;
    }

    //FUNCION PARA CAMBIAR EL NOMBRE DE LAS LISTAS
    function cambiarNombreLista(nombre){
        document.querySelector("#titleSongsContainer").innerHTML=nombre;
    }

    //DEFINICION VARIABLES
    let rock = document.querySelector(".rock")
    let hiphop = document.querySelector(".hip-hop")
    let indie = document.querySelector(".indie")
    let biggest = document.querySelector("#biggest") 
    let jazz = document.querySelector(".jazz")
    let reggae = document.querySelector(".reggae")
    let overviewMenu=document.querySelector("#overview");
   let top10Listened=document.querySelector("#top10");
   let theBiggest=document.querySelector("#biggest");
   
   
    

    
    
    //ADDEVENTLISTENERS
    window.addEventListener("load", cargarJSON);
    rock.addEventListener("click", listaRock);
    hiphop.addEventListener("click", listaHiphop);
    indie.addEventListener("click", listaIndie); 
    biggest.addEventListener("click", listaBiggest);
    jazz.addEventListener("click", listaJazz);
    reggae.addEventListener("click", listaReggae);
    overviewMenu.addEventListener("click",clickorder1);
    top10Listened.addEventListener("click", clickorder2);
    theBiggest.addEventListener("click", clickorder3);

 //USER STORY 1: se carga el listado JSON  con todas las canciones al cargar la pagina  
function cargarJSON(){
    fetch("music.json")
     .then(res => res.json())
     .then(function(data){
         subirASongs(data);
         cambiarNombreLista("Overview")
     });
}

//USER STORY 2: Cuando clico la opción "Overview" de la barra superior Entonces vuelvo a la página principal y puedo ver un listado de todas las canciones más escuchadas

const overview=document.querySelector("#overview")
overview.addEventListener('click', cargarJSON);
////USER STORY 3: Cuando clico en la opción "Top 10 listened" de la barra superior Entonces puedo ver un listado con las 10 canciones más escuchadas

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
        subirASongs(top10Array);
        cambiarNombreLista("Top 10 listened")
        
    })}

 //USER STORY 4: Cuando clico en la opción "Rock" de la barra superior Entonces puedo ver un listado con las canciones más escuchadas del género rock

 function listaRock(){
    fetch("music.json")
    .then(res => res.json())
    .then(data=>filtrarEstilo(data,"rock","Rock") )     
 }

//USER STORY: 5 al hacer click en hip-hop nav bar, aparece songs list de ése género

 function listaHiphop(){
    fetch("music.json")
    .then(res => res.json())
    .then(data=>filtrarEstilo(data,"Hip-Hop","Hip-Hop"))   
    };

 //USER STORY 6: Cuando clico en la opción "Rock" de la barra superior Entonces puedo ver un listado con las canciones más escuchadas del género rock
 
 function listaIndie(){
    fetch("music.json")
    .then(res => res.json())
    .then(data=>filtrarEstilo(data,"indie","Indie"))
        
    };

    //USER STORY:7 al hacer click en Jazz nav bar aparece songs list de ése género. Como no hay jazz songs he filtrado por psychedelic genero.

 function listaJazz(){
    fetch("music.json")
    .then(res => res.json())
    .then(data=>filtrarEstilo(data,"psychedelic","Jazz"))
        
    };

    
    //USER STORY:8 Cuando clico en la opción "Reggae", puedo ver un listado con las canciones más escuchadas del género reggae*/

  function listaReggae(){
   fetch("music.json")
   .then(res => res.json())
   .then(data=>filtrarEstilo(data,"alternative","Reggae"))
   }

   /*User story 9*/ 

 
  function clickorder1(){
      overviewMenu.classList=("sombra");
      top10Listened.classList=("sombranormal");
      theBiggest.classList=("sombranormal");
   } 
   function clickorder2(){
       overviewMenu.classList=("sombranormal");
       top10Listened.classList=("sombra");
       theBiggest.classList=("sombranormal");
   }
  
   function clickorder3(){
       overviewMenu.classList=("sombranomal");
       top10Listened.classList=("sombranormal");
       theBiggest.classList=("sombra");

   }

    //USER STORY 12
 
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
               subirASongs(biggestArray);
               cambiarNombreLista("The Biggest")
                })

    }