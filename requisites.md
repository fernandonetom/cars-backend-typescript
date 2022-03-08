# Cadastro de carro

**RF** => Requisitos funcionais

- [x] Deve ser possível cadastrar um novo carro


**RNF** => Requisitos não funcionais

**RN** => Regra de negócio

- [x] Não deve cadastrar um carro com uma placa existente
- * Não deve ser possível alterar a placa de um carro
- [x] `available` como `true`
- * Apenas admin pode cadastrar



# Listagem de carros

**RF** => Requisitos funcionais

- Deve ser possível listar todos os carros disponíveis
- Deve ser possível listar todos os carros disponíveis por categoria
- Deve ser possível listar todos os carros disponíveis por marca
- Deve ser possível listar todos os carros disponíveis por carro

**RNF** => Requisitos não funcionais

**RN** => Regra de negócio

- O usuário não precisa estar logado 


# Cadastro de especificação do carro

**RF** => Requisitos funcionais

- Deve ser possível cadastrar uma especificação para um carro

**RNF** => Requisitos não funcionais

**RN** => Regra de negócio

- Não deve ser possível cadatrar uma especificação para um carro não cadastrado
- Não deve ser possível cadatrar repetir especificação para o mesmo carro
- Apenas admin poderá cadastrar

# Cadastro de imagens do carro

**RF** => Requisitos funcionais

- Deve ser possível cadastrar uma imagem para o carro
- Deve ser possível listar todos os carros cadastrados

**RNF** => Requisitos não funcionais
- Utilizar o multer para upload dos arquivos

**RN** => Regra de negócio

- Pode cadastrar mais de uma imagem para o mesmo carro
- Não deve ser possível cadatrar uma imagem para um carro não cadastrado
- Apenas admin poderá cadastrar imagens


# Cadastro de aluguel de carro

**RF** => Requisitos funcionais

- Deve ser possível cadastrar um aluguel

**RNF** => Requisitos não funcionais
- 

**RN** => Regra de negócio

- O aluguel deve ter duração mínima de 24h
- Não deve ser possível cadastrar um novo aluguel caso exista um aluguel em aberto para o mesmo usuário
- Não deve ser possível cadastrar um novo aluguel para o mesmo carro