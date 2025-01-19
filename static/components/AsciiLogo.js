const ASCII_LOGO = `███████╗██╗████████╗███████╗    ████████╗ ██████╗     ███╗   ███╗██████╗
 ██╔════╝██║╚══██╔══╝██╔════╝    ╚══██╔══╝██╔═══██╗    ████╗ ████║██╔══██╗
 ███████╗██║   ██║   █████╗         ██║   ██║   ██║    ██╔████╔██║██║  ██║
 ╚════██║██║   ██║   ██╔══╝         ██║   ██║   ██║    ██║╚██╔╝██║██║  ██║
 ███████║██║   ██║   ███████╗       ██║   ╚██████╔╝    ██║ ╚═╝ ██║██████╔╝
 ╚══════╝╚═╝   ╚═╝   ╚══════╝       ╚═╝    ╚═════╝     ╚═╝     ╚═╝╚═════╝ `;

export class AsciiLogo extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<pre class="ascii-logo">${ASCII_LOGO}</pre>`;
    }
}
