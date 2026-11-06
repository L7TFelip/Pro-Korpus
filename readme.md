# Academia Prókorpus — Site Oficial

Site institucional da **Academia Prókorpus**, em Santa Tereza do Oeste – PR, desenvolvido em parceria com a própria academia.

O objetivo é apresentar a academia, os planos, os horários e as modalidades, e facilitar o contato pelo WhatsApp.

## Funcionalidades

- Tela de carregamento animada com a logo
- Modo claro e escuro, com a escolha salva no navegador
- Layout responsivo, com barra de navegação inferior no celular
- Planos e valores, modalidades e avaliações do Google
- Horários da academia e das aulas, com indicação de "Aberto agora"
- Carrossel de imagens da avaliação física
- Galeria de camisas com ampliação de foto (lightbox)
- Seção do Coffee Gym e do aplicativo de treino SCA Fit
- Botões de WhatsApp com mensagem pronta para cada assunto
- Dados estruturados (Schema.org) e tags Open Graph para buscadores e compartilhamento

## Tecnologias

HTML, CSS e JavaScript puros, sem frameworks e sem dependências. A única fonte externa é a Poppins, carregada do Google Fonts.

## Estrutura do projeto

```
├── index.html      # estrutura e conteúdo da página
├── style.css       # estilos, temas claro/escuro e responsividade
├── main.js         # configuração do conteúdo e comportamento do site
└── assets/
    ├── logos/        # logo, redes sociais e lojas de aplicativo
    ├── academia/     # fotos da estrutura e do aplicativo
    ├── modalidades/  # fotos das modalidades
    ├── avaliacao/    # imagens do carrossel da avaliação física
    ├── camisa/       # fotos das camisas
    └── hero.jpg      # foto principal do início
```

## Como rodar localmente

Não há instalação nem build. Basta baixar o projeto e abrir o `index.html` no navegador.

Se usar o VS Code, a extensão **Live Server** abre o site com atualização automática a cada alteração.

## Como editar o conteúdo

Quase tudo o que muda com frequência fica no início do `main.js`:

| Constante | O que controla |
| --- | --- |
| `WA` e `MSG` | Número do WhatsApp (DDI + DDD + número, só dígitos) e mensagem padrão |
| `IMAGENS` | Caminhos de logos, fotos e listas de imagens dos carrosséis |
| `MODALIDADES` | Cards de modalidades (nome, descrição, imagem e ícone) |
| `PLANOS` | Cards de planos (nome, preço, unidade, descrição, itens, selo e destaque) |
| `AVALIACOES` | Avaliações do Google exibidas no site |
| `DIAS`, `ABERTURA` e `faixas` | Horários de funcionamento e cálculo do "Aberto agora" |
| `AULAS` | Aulas, horários e dias da semana |
| `CARROSSEL_MS` | Tempo de troca do carrossel, em milissegundos |
| `LOADER` | Duração mínima da tela de carregamento |
| `FUNDACAO_ANO`, `FUNDACAO_MES` e `FUNDACAO_DIA` | Data de fundação, usada para calcular os anos de história |

Textos fixos, endereço, links e dados estruturados ficam no `index.html`. Cores e espaçamentos ficam nas variáveis do início do `style.css`.

## Sobre a academia

**Academia Prókorpus**  
Rua Major Hipólito, 622  
Centro — Santa Tereza do Oeste - PR  
CEP 85825-000

Fundada em 25 de agosto de 2015.

- Instagram: [@prokorpus_sto](https://www.instagram.com/prokorpus_sto/)
- TikTok: [@academiaprokorpus](https://www.tiktok.com/@academiaprokorpus)
- Facebook: [prokorpussto](https://www.facebook.com/prokorpussto/)

## Créditos

Site desenvolvido em parceria com a Academia Prókorpus.

O nome, a logo, as fotos e os textos pertencem à Academia Prókorpus e não devem ser reutilizados sem autorização.
