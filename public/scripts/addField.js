// Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener("click", cloneField) 
//Executar uma ação
function cloneField() { // criar uma função
    //Duplicar os campos. Que campos?
     const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //boolean: true or false //o document.querySelector acessa a div e o cloneNode a duplica, true, é para
    //todo o conteudo da div, se nao tivesse o true, o js so iria criar uma div com o nome schedule-item
    //no javascript usa-se Node para se referir a elementos HTMl, a tags HTML

    //pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll("input")

    //para cada campo, limpar
    fields.forEach(function(field){ //para cada, é o loop do js
        //pegar o field do momento e limpa ele
        field.value = ""

    })

    //Colocar na página. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
    