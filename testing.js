//Funcion test suma

export const sumar = (a,b) => {

    if(a===0 || b===0){
        return 0;
    } else{
  return  a+b
}
};

export function filtrarEstilo(array,estilo,titulo){
  let html="";
  let rockArray= array.filter(song => song.genres.includes(estilo) )
  rockArray.forEach(song => {
      html += `<li><img src="logoMusica.png" atr=""/ ><span class="songArtist" > <a href=${song.artist.url}> ${song.artist.name} </a> </span> <span class="songBold"> <a href=${song.url}> ${song.name} </a> </span><span class="listEnd"> ${song.listeners} listeners</span></li>`
  });
  document.querySelector(".songs").innerHTML=html;
  document.querySelector("#titleSongsContainer").innerHTML=titulo;
  }