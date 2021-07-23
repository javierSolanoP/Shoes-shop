var container = document.getElementById('carousel'),
    imagenes = ['img/Limited.jpg', 'img/Limited2.jpg', 'img/Limited3.jpg', 'img/Limited4.jpg'],
    cont = 0;

function carousel(container)
{
    container.addEventListener('click', (e) => {
        e.preventDefault();
        let left = document.querySelector('.Left-Button'),
            right = document.querySelector('.Right-Button'),
            imagen = document.querySelector('#imagen'),
            tgt = e.target,
            index;

        if(tgt == left){
            if(cont > 0){
                index = cont-1;
                imagen.src = imagenes[index];
                cont--;
            }else{
                index = imagenes.length-1;
                imagen.src = imagenes[index];
                cont = index;
            }
        } else if(tgt == right){
            index = imagenes.length-1;
            if(cont < index){
                index = cont+1;
                imagen.src = imagenes[index];
                cont ++;
            }else{
                imagen.src = imagenes[0];
                cont = 0;
            }
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    let contenedor = document.getElementById('carousel');
    carousel(contenedor);
})