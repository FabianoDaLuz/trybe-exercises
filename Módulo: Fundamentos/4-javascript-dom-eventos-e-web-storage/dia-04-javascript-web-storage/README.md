Cookies são dados em pequenos arquivos de textom os quais ficam salvos no computador de uma pessoa quando ela utiliza a internet

document.cookie = 'email=isabella@email.com';
document.cookie = 'email=isabella@email.com; expiress=Thu, 17 Dec 2020 12:00:00 UTC'

const myCookie = document.cookie;

Session Storage
O HTML Web Storage é um conjunto de objetos de armazenamento de dados do lado do cliente (navegador da pessoa). Há dois tipos de objetos: localStorage e sessionStorage

Dados armazenados ao fechar uma janela/aba --> localStorage
Todas as janelas/abas abertas podem acessar os dados --> localStorage

localStorage salva os dados sem data de expiração. Os dados não serão removidos quando o browser fechado, ou seja, eles ficarão disponíveis enquanto não forem explicitamente removidos.

