# DevTranslate - Frontend

**DevTranslate** é uma aplicação web que permite traduzir trechos de código de uma linguagem de programação para outra com auxílio de modelos de inteligência artificial.

Este repositório contém o frontend da aplicação, desenvolvido em **React + TypeScript**, com foco em acessibilidade, modularidade e design limpo.

---

## Estrutura do Projeto

```
src/
├── app/                    # Entrada principal da aplicação (App.tsx)
├── components/             # Componentes reutilizáveis
│   ├── CodeEditor/         # Área de edição de código com botão de copiar
│   ├── ConvertButton/      # Botão de conversão com loader
│   ├── Layout/             # Layout da aplicação (Header/Footer)
│   ├── Selector/           # Componente customizado de seleção
│   ├── TranslateForms/     # Formulário principal com selects e editores
│   └── ui/                 # Componentes UI externos reaproveitados
├── lib/                    # Funções utilitárias globais
├── pages/                  # Páginas da aplicação (ex: Home)
├── routes/                 # Definições de rotas com react-router
├── services/               # Serviços de integração (ex: API ou simulação)
├── types/                  # Tipagens compartilhadas (ex: linguagens, modelos)
```

---

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [Sonner](https://sonner.emilkowal.dev/) – Notificações toast
- [Lucide React](https://lucide.dev/) – Ícones
- [shadcn/ui](https://ui.shadcn.com/) – Componentes de interface acessíveis

---

## Instalação e Execução

1. **Clone o repositório:**

```bash
git clone https://github.com/MatheusNetto1/devtranslate-frontend
cd devtranslate
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Rode o projeto em modo de desenvolvimento:**

```bash
npm run dev
```
Acesse **http://localhost:5173** no navegador para visualizar a aplicação.

---

## Funcionalidades

- Tradução de código entre linguagens: JavaScript, Python, C#, Java
- Escolha do modelo de IA: GPT-4, Claude, Gemini
- Interface intuitiva e responsiva
- Editor com destaque e botão de cópia
- Toasts de feedback com Sonner

---

## Organização de Componentes

- **App.tsx**: Estrutura da aplicação com layout principal
- **TranslateForms.tsx**: Lógica e interface de tradução
- **Selector.tsx**: Componente customizado com shadcn/ui
- **CodeEditor.tsx**: Área para digitação e visualização de código
- **ConvertButton.tsx**: Botão estilizado com loading
- **translate.ts**: Serviço simulado de tradução de código

---

## Licença

Este projeto está sob a licença MIT.