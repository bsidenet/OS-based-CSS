# OS-based-CSS

## Descrição / Description

**🇵🇹 PT:** Aplica estilos CSS diferentes consoante o sistema operativo do utilizador (Windows, macOS ou Linux).  
**🇬🇧 EN:** Applies different CSS styles based on the user's operating system (Windows, macOS, or Linux).

---

## Instruções / Instructions

### 🇵🇹 PT:

1. Adiciona o script [`os-detect.js`](os-detect.js) ao teu site para definir classes no `<body>` conforme o sistema operativo.
2. Adiciona as regras CSS do ficheiro [`style-os-detect.css`](style-os-detect.css) para aplicar estilos diferentes para Windows e macOS/Linux.

Existe uma outra opção sem JavaScript, apenas com CSS puro.  
Podes tentar `@supports`, mas isto não é 100% garantido (ficheiro [`style-os-detect-alt.css`](style-os-detect-alt.css)).

### 🇬🇧 EN:

1. Add the [`os-detect.js`](os-detect.js) script to your site to set classes on the `<body>` according to the operating system.
2. Add the CSS rules from the [`style-os-detect.css`](style-os-detect.css) file for different styles on Windows and macOS/Linux.

There is another option without JavaScript, using only pure CSS.  
You can try `@supports`, but this is not 100% guaranteed (file [`style-os-detect-alt.css`](style-os-detect-alt.css)).

---

## 📂 Estrutura do Repositório / Repository Structure

```
OS-based-CSS/
├── os-detect.js           # Script para detetar o SO e adicionar classes ao <body>
├── style-os-detect.css    # Regras CSS para Windows, macOS e Linux
├── style-os-detect-alt.css # Alternativa apenas com CSS puro (@supports)
├── README.md              # Este ficheiro
```

---

## 📜 Licença / License

Este projeto está licenciado sob a MIT License - vê o ficheiro [LICENSE](LICENSE) para mais detalhes.  
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

