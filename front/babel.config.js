//Aqui ficam as configurações relacioadas ao babel, ou seja, 
//como será convertido o código react para um que o 
//navegador entenda

module.exports = {
    //conjuntos de configurações criados por terceiros
    presets: [
        //converte o código JS mais recente para um mais antigo, 
        //levando em consideração o navegador que está rodando a aplicação
        '@babel/preset-env',
        //adiciona as funcionalidades do react na conversão do JS
        //como por exemplo, adicionar HTML dentro do JS
        '@babel/preset-react'
    ],
    //pedaços de presets que ajudam o babel com funcionalidades necessárias
    plugins: [
        //faz com que alguns comandos executados no ambiente de desenvolvimento referenciem o runtime
        '@babel/plugin-transform-runtime'
    ]
}