<div align="center">

# 🍀 Bilhete Premiado

### *Seu bilhete tem os números da sorte?*

[![Tests](https://github.com/zclt/bilhete-premiado-app/actions/workflows/test.yml/badge.svg)](https://github.com/zclt/bilhete-premiado-app/actions/workflows/test.yml)
[![Deploy](https://github.com/zclt/bilhete-premiado-app/actions/workflows/deploy.yml/badge.svg)](https://github.com/zclt/bilhete-premiado-app/actions/workflows/deploy.yml)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/licença-MIT-green)

**[🎰 Acessar o app](https://zclt.github.io/bilhete-premiado-app)**

</div>

---

## 🎯 O que é?

Você acabou de assistir ao sorteio da **Mega-Sena** e está com o bilhete na mão... mas conferir número por número é chato demais, né?

O **Bilhete Premiado** faz isso por você! Digite seus palpites, e o app busca automaticamente os resultados mais recentes direto da API oficial da **Caixa Econômica Federal** — destacando em verde cada número que você acertou.

> Se todos baterem: **"Ganhou!"** 🎉

---

## ✨ Funcionalidades

| Recurso | Descrição |
|---|---|
| 🔢 **Entrada de números** | 9 campos numéricos com avanço automático entre eles |
| 🟢 **Conferência automática** | Números acertados ficam destacados em verde escuro |
| 🏆 **Resultado visual** | Exibe "Ganhou!" quando todos os números batem |
| 📡 **Dados em tempo real** | Busca o último sorteio da Mega-Sena e da Quina na hora |
| 💾 **Salva seu bilhete** | Seus palpites ficam salvos no navegador via `localStorage` |
| 📱 **Responsivo** | Funciona bem no celular e no desktop |

---

## 🖥️ Como funciona

```
1. Abra o app
2. Digite os 9 números do seu bilhete
3. O app busca o último resultado da Caixa automaticamente
4. Números certos ficam destacados em verde 🟢
5. Se acertou tudo... GANHOU! 🎊
```

---

## 🚀 Rodando localmente

### Pré-requisitos

- Node.js 20+
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/zclt/bilhete-premiado-app.git
cd bilhete-premiado-app

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse: `http://localhost:5173`

### Scripts disponíveis

```bash
npm run dev          # Servidor de desenvolvimento com HMR
npm run build        # Build de produção
npm run preview      # Pré-visualiza o build de produção
npm run lint         # Verifica qualidade do código com ESLint
npm run test         # Executa os testes em modo watch
npm run test:run     # Executa os testes uma vez
npm run deploy       # Faz deploy para o GitHub Pages
```

---

## 🧪 Testes

O projeto possui **27 casos de teste** cobrindo os principais componentes:

```bash
npm run test:run
```

| Arquivo | Componente | Testes |
|---|---|---|
| `App.test.jsx` | App principal | 4 testes |
| `Aposta.test.jsx` | Campos de entrada | 11 testes |
| `Dezenas.test.jsx` | Exibição de resultados | 6 testes |

Para visualizar a cobertura de código:

```bash
npm run test:run -- --coverage
```

---

## 🏗️ Stack utilizada

- **[React 19](https://react.dev/)** — Interface reativa e componentes reutilizáveis
- **[Vite 7](https://vitejs.dev/)** — Build ultrarrápido com Hot Module Replacement
- **[Axios](https://axios-http.com/)** — Requisições HTTP para a API da Caixa
- **[Vitest](https://vitest.dev/)** + **[Testing Library](https://testing-library.com/)** — Testes unitários e de integração
- **[GitHub Actions](https://github.com/features/actions)** — CI/CD: testes automáticos e deploy no Pages

---

## 📁 Estrutura do projeto

```
bilhete-premiado-app/
├── src/
│   ├── App.jsx              # Componente raiz: estado, API, localStorage
│   ├── index.css            # Estilos globais e tema verde
│   ├── components/
│   │   ├── Aposta.jsx       # Campos de entrada dos números
│   │   └── Dezenas.jsx      # Exibição dos resultados e destaques
│   └── services/
│       └── api.js           # Cliente Axios configurado para a API da Caixa
├── public/
│   ├── trevo.svg            # Ícone do trevo da sorte 🍀
│   └── background.svg       # Imagem de fundo
├── .github/
│   └── workflows/
│       ├── test.yml         # CI: executa testes em PRs
│       └── deploy.yml       # CD: deploy automático na main
└── vite.config.js           # Configuração do Vite e Vitest
```

---

## 🌐 API

Os resultados são buscados diretamente da **API oficial da Caixa Econômica Federal**:

```
https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados
```

Jogos suportados: **Mega-Sena** e **Quina**.

---

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas!

1. Faça um fork do repositório
2. Crie uma branch: `git checkout -b feature/minha-melhoria`
3. Faça commit das mudanças: `git commit -m 'feat: minha melhoria'`
4. Envie a branch: `git push origin feature/minha-melhoria`
5. Abra um Pull Request

---

<div align="center">

Feito com ☕ e muita esperança de ganhar na Mega-Sena

**[⭐ Deixa uma estrela se curtiu!](https://github.com/zclt/bilhete-premiado-app)**

</div>
