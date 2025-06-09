# SensorClean Mobile

## Integrantes

- **Lucas Bastos** - 553771  
- **Erick Lopes** - 553927  
- **Marcelo Galli** - 55365  

---

## Sobre o App

O **SensorClean Mobile** é um aplicativo desenvolvido em React Native (Expo) para gerenciamento de sensores inteligentes. O app permite autenticação, cadastro, visualização, edição e remoção de sensores, além de interface moderna e usabilidade otimizada para dispositivos móveis. Toda a comunicação de dados é realizada com uma API RESTful (simulada via `json-server` para testes locais).

---

## Funcionalidades

- **Login Simples:** Acesso protegido por tela de login.
- **Dashboard:** Tela de boas-vindas ao usuário logado.
- **CRUD Completo:** Cadastro, consulta, edição e exclusão de sensores via integração com API.
- **Navegação Moderna:** 5 telas distintas e navegação fluida com React Navigation.
- **Estilização Personalizada:** Utilização de Tailwind CSS para identidade visual própria.
- **Feedback Visual:** Mensagens de sucesso/erro e loaders em operações.

---

## Estrutura de Telas

1. **Login:** Acesso ao app
2. **Home:** Tela inicial com boas-vindas e navegação
3. **Lista de Sensores:** Visualização de todos os sensores cadastrados
4. **Formulário de Sensor:** Cadastro e edição de sensores
5. **Detalhes do Sensor:** Exibição, edição e exclusão de um sensor

---

## Tecnologias Utilizadas

- React Native (Expo)
- React Navigation
- Axios
- Tailwind CSS (NativeWind)
- json-server (API simulada)

---

## Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/sensorclean-mobile.git
   cd sensorclean-mobile
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o json-server em outra aba do terminal:**
   ```bash
   npx json-server --watch db.json --port 3001
   ```

4. **Inicie o app:**
   ```bash
   npx expo start
   ```

---

## Exemplo de Requisições à API

**GET - Listar Sensores**
```http
GET http://localhost:3001/sensores
```

**POST - Criar Sensor**
```http
POST http://localhost:3001/sensores
Content-Type: application/json

{
  "nome": "Sensor Teste",
  "status": "Ativo",
  "localizacao": "Sala 5"
}
```

**PUT - Atualizar Sensor**
```http
PUT http://localhost:3001/sensores/1
Content-Type: application/json

{
  "nome": "Sensor Editado",
  "status": "Inativo",
  "localizacao": "Sala 2"
}
```

**DELETE - Remover Sensor**
```http
DELETE http://localhost:3001/sensores/1
```

---

## Observações

- Para testes em dispositivos reais, altere o `baseURL` da API (`src/services/api.js`) para o IP local do seu computador.
- O projeto pode ser facilmente adaptado para consumir APIs reais (.NET, Java, etc).
- O login é simulado para fins didáticos, sem autenticação real.

---

## Vídeo de Demonstração

> (Insira aqui o link do vídeo de demonstração do app após gravar)

---
