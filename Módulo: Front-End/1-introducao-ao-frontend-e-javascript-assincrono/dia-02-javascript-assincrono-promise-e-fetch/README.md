Códigos assíncronos: Instruções executadas fora do fluxo principal de aplicação. 

Por que usar códigos assíncronos? A principal vantagem de se trabalhar com um código assíncrono é poder executar outras
funções sem travar a execução do programa principal enquanto
o resultado da função assíncrona não é finalizado.
Existem várias situações onde você irá precisar trabalhar com
códigos assíncronos,como, por exemplo:

Leitura e escrita de arquivos: como operações em disco tendem
a ser demoradas,geralmente elas são realizadas de forma
assíncrona.

Acesso a alguns recursos do navegador: recursos que dependem de
hardware, como lidar com a câmera, por exemplo.

Fazer requisações externas: esse provavelmente é o cenário onde
a assincronicidade é mais utilizada. É necessário aguardar uma
resposta do servidor após fazer uma requisição sem travar a
execução do resto do sistema.

Promise é um objeto usado para processamento assíncrono. Um
Promisse(de "promessa") representa uma valor que pode estar
disponível agora, no futuro ou nunca.

Estado da promise:

pending (pendente)
fulfilled (realizada)
rejected (rejeitada)

Método fetch: solicitação/requisição de dados à API.
dados retornados em formato JSON.
