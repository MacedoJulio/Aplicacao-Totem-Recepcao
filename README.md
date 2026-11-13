# Totem de Recepção – Portal de Documentos

Aplicação web estática (HTML, CSS e JavaScript) para rodar em um **totem touch-screen** na recepção de uma empresa. Ela exibe documentos regulatórios, uma pesquisa de satisfação, um QR Code para avaliação no Google e o Código de Defesa do Consumidor.

> **Aviso:** todos os nomes, documentos, endereços, CNPJs e logotipos deste repositório são **fictícios** (empresa "Farma Modelo") e não têm valor legal.

## Funcionalidades

- Tela inicial com os documentos principais em destaque
- Navegação por unidade (Aurora e Horizonte) com a lista de documentos regulatórios
- Visualizador de PDF com tela de carregamento
- Pesquisa de satisfação incorporada (Google Forms)
- Modal com QR Code para avaliação
- Retorno automático à tela inicial por inatividade (2 minutos)
- Cursor oculto após 3 segundos parado e atalhos de desenvolvedor/menu de contexto bloqueados (modo quiosque)

## Estrutura

```
projeto_totem/
├── index.html              # tela inicial
├── documentos.html         # escolha da unidade
├── aurora.html             # documentos da Unidade Aurora
├── horizonte.html          # documentos da Unidade Horizonte
├── pesquisa.html           # pesquisa de satisfação (iframe)
├── visualizar-pdf.html     # visualizador de PDF
├── index-anterior.html     # versão antiga da tela inicial (legado)
├── css/style.css
├── js/                     # script, inatividade, cursor, pdf, splash
├── fontes/                 # fonte Inter (licença OFL)
├── imagens/                # logo, QR Code, miniaturas
├── pdfs/                   # PDFs fictícios de exemplo
├── Totem.bat               # atualiza e abre o Chrome em modo quiosque (Windows)
├── Atualizar.bat           # apenas sincroniza os arquivos
└── web.config              # opcional, para hospedar no IIS
```

## Como executar

Basta abrir `projeto_totem/index.html` no navegador. Para simular o totem no Windows, use o `Totem.bat` (ajuste antes os caminhos, veja abaixo).

## Como adaptar para o seu uso

1. **Logo:** troque `imagens/logo.png` (e `logomarca.png`).
2. **QR Code:** gere um QR com o link da sua página de avaliação e salve como `imagens/qrcode.png`.
3. **Pesquisa:** em `pesquisa.html`, troque `SEU_ID_DO_FORMULARIO` pelo ID do seu Google Forms.
4. **Documentos:** substitua os PDFs em `pdfs/` mantendo os nomes (ou ajuste os links em `aurora.html` e `horizonte.html`).
5. **Miniaturas e validades:** atualize as imagens de `imagens/miniaturas/` e as datas em `index.html`.
6. **Scripts `.bat`:** em `Totem.bat` e `Atualizar.bat`, ajuste o caminho de origem (pasta de rede) e o destino local.

## Licenças

- Fonte **Inter**: SIL Open Font License 1.1 (ver `projeto_totem/fontes/OFL.txt`).
- `pdfs/cdc.pdf`: publicação oficial do Ministério da Justiça (Código de Proteção e Defesa do Consumidor), de acesso público.
- Defina a licença do código antes de publicar, se desejar (por exemplo MIT).
