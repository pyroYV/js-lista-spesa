const listaSpesa = ['aceto','mele','aglio','limonata','pringles'];
let i = 0;
const contenitoreSpesa = document.querySelector('.row .col-4 .lista-spesa');
while (i < listaSpesa.length){
    const elementoSpesa = document.createElement('li');
    elementoSpesa.innerText = listaSpesa[i];
    elementoSpesa.classList.add('fw-bolder')
    contenitoreSpesa.append(elementoSpesa);

    i++;
}