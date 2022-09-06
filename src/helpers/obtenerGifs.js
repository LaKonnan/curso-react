export const obtenerGifsAPI = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=cR4RPlhbe0np0yXCaGlbjt24QirA7Q2n&q=${ categoria }&limit=20`;
    const resultado = await fetch(url);
    const { data } = await resultado.json();
    const gifs = data.map(gif => ({
        id: gif.id,
        titulo: gif.title,
        enlace: gif.images.downsized_medium.url
    })
    )

    console.log(gifs);
    return gifs;
}
