# Node.js Streams - convertendo CSV em JSON
<p align="center"><a href="#">
    <img align="center" src="https://user-images.githubusercontent.com/64763336/208279366-5d676750-d743-4456-81ab-2fd2aa43fa14.png" />
  </a>

## 📄 Sobre
Projeto para estudo de Streams no Node.js, que trabalha recebendo, transformando e enviando fluxo de dados sem a necessidade de colocá-los em sua totalidade na memória, dessa forma conseguindo trabalhar com grandes quantidades de dados de forma eficiente, utilizando pedaços (chunks) dele e armazenando em buffer somente a quantidade de dados possível para a memória disponível.
Nesse projeto utilizei o Docker para limitar a memória em 80Mb, e mesmo assim é possível receber links de CSV muito acima desse limite.
Foi utilizado a biblioteca CSV-parse para fazer o parte de CSV para JSON já que a própria implementa Stream para fazer essa conversão, recebendo dados da response do Axios que também é uma Stream.  

Atualmente existem 4 tipos de Streams:
- Readable: operação de leitura de uma fonte especifica.
- Writable: operação de gravação em um destino especifico.
- Duplex: funciona tanto para leitura como para gravação.
- Transform: é um tipo de Duplex onde os dados podem ser modificados.  

Para a criação de um fluxo de 2 ou mais streams, são utlizados métodos e eventos, sendo o readable.pipe o responsável pela comunicação entre elas.  

<p align="center"><a href="#">
    <img align="center" src="https://user-images.githubusercontent.com/64763336/208279374-fe6ae1ff-acbf-4e4d-961c-dafd63342f49.png" />
  </a>


## ⚙️ Rodando o projeto  
  
Desenvolvimento
```bash
npm run dev
```
  
Compilado
```bash
npm start
```
  
Docker
```bash
docker-compose up -d
```
  
## 🚀 Utilizando
Os endpoints para execução estão no arquivo requests.http e caso tenha a extensão do VSCode chamada "REST Client" pode enviar a request diretamente por ele.
  
```bash
// 100 rows
POST http://localhost:3000 
Content-Type: application/json

{
    "data": {
        "link": "https://github.com/datablist/sample-csv-files/raw/main/files/organizations/organizations-100.csv",
        "delimiter": ","
    }
}

###

// Error
POST http://localhost:3000 
Content-Type: application/json

{
    "data": {
        "link": "https://www.google.com",
        "delimiter": ","
    }

}
```
