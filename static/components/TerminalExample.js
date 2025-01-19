export class TerminalExample extends HTMLElement {
    constructor() {
        super();
        const title = this.getAttribute('title') || 'Example';
        const commands = JSON.parse(this.getAttribute('commands') || '[]');

        this.innerHTML = `
            <div class="terminal">
                <div class="terminal-header">${title}</div>
                <pre>${commands.map(cmd => this._formatCommand(cmd)).join('\n')}</pre>
            </div>
        `;
    }

    _formatCommand({ cmd, args = '', root = false }) {
        const prompt = root ? '#' : '$';
        const fullArgs = args.startsWith('/') ? `https://${location.host}${args}` : args;
        return `<span class="prompt">${prompt} </span>${cmd}${fullArgs ? ' ' + fullArgs : ''}`;
    }
}
