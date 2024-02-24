class Multimedia {
    constructor (url){
        this._url = url;
    }
    get url(){
        return this._url
    }
    setInicio(){
        return 'Este método es para realizar un cambio en la URL del video'
    }
}
class Reproductor extends Multimedia {
    constructor (url, id){
        super(url)
        this._id = id
    }
    get id(){
        return this._id
    }
    playMultimedia(){
        modulo.agregarVideoPublico(this._url, this._id)
    }
    setInicio (tiempo){
        this.id.setAttribute('src', `${this.url}?start=${tiempo}`);
    }
}

let modulo = (() => {
    let agregarVideoPrivado = (url,id) => {
    let element = document.getElementById(id)
    element.setAttribute('src', url);
}
return {
    agregarVideoPublico: (url, id)=> {
        agregarVideoPrivado(url, id)
    },
};
})();

let peliculas = new Reproductor ('https://www.youtube.com/embed/gdE--uAySvs?si=DPl7qeAwUHNDKA37', 'peliculas');

let series = new Reproductor ('https://www.youtube.com/embed/8TO7BW9LSb8?si=Pa1ouysn8_Gu5YBf', 'series');

let musica = new Reproductor ('https://www.youtube.com/embed/JN24wVxae_M?si=rTNzUGrH7rH-ZHfA', 'musica');

peliculas.playMultimedia();
series.playMultimedia();
musica.playMultimedia();

//Llamar al setinicio

peliculas.setInicio(10);
series.setInicio(15);
musica.setInicio(10);