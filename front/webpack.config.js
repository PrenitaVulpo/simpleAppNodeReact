//Automatiza o processor de detecção do tipo de arquivo para carregamento
//do loader equivalente


//usado para definir caminho de forma que funcione em todos os SOs
const path = require('path');

module.exports = {
    //define o arquivo de entrada da aplicação
    entry: path.resolve(__dirname, 'src', 'index.js'),
    //define o arquivo de saída da aplicação, quando já transpilada
    output: {
        //diz o caminho do destino
        path: path.resolve(__dirname, 'public'),
        //diz o nome do arquivo
        filename: 'bundle.js'
    },
    devServer: {
        //indica onde estão os arquivos públicos da aplicação
        contentBase: path.resolve(__dirname, 'public')
    },
    //define os loaders para cada tipo de arquivo
    module: {
        //define as regras para conversão
        rules: [
            {
                //OBRIGATÒRIO: olha a extensão do arquivo
                test: /\.js$/,
                //indica alguma pasta a não ser testada
                exclude: /node_modules/,
                //OBRIGATÒRIO: indica o loader a ser utilisado para o tipo de arquivo definido
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}