# HabitPRO

**HabitPRO** é um aplicativo mobile desenvolvido com React Native e backend em Django, focado em ajudar os usuários a criarem e manterem hábitos saudáveis por meio de acompanhamento diário, metas e notificações personalizadas.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
---

## Sobre o Projeto

HabitPRO surgiu da necessidade de resolver um problema comum: a dificuldade em criar e manter hábitos saudáveis de forma contínua e organizada. Pensando nisso, desenvolvemos uma solução prática, intuitiva e acessível para todos.

Nosso foco é oferecer uma experiência personalizada para o usuário, permitindo registrar seus hábitos, acompanhar a evolução diária, visualizar o progresso e receber lembretes que o motivem a continuar.

---

## Funcionalidades

- Cadastro e login de usuários
- Criação de hábitos personalizados
- Visualização e acompanhamento diário dos hábitos
- Marcação de tarefas concluídas
- Notificações para lembrar o usuário de suas metas
- Design moderno e leve, adaptado para diferentes dispositivos

---

## Tecnologias Utilizadas

### Frontend
- **React Native** (com Expo)
- **JavaScript**
- **Styled Components**

### Backend
- **Python**
- **Django Rest Framework**
- **SQLite3** (banco de dados local)

---

## Instalação

### Requisitos
- Node.js e npm
- Expo CLI
- Python 3.x
- Django

### Frontend
```bash
git clone https://github.com/vantecc/projetosenac.git
cd projetosenac
npm install
npx expo start

### Backend
```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver