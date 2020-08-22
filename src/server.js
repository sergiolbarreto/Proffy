//Servidor
const express = require("express")
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require("./pages")


//configurar nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCahce: true, //nocache como true é para quando voce esta alterando as coisas e quer ver as coisas mais recentes
    //e não a versão que esta dentro da memoria, dentro do cache

})

//Início e configuração do servidor
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)