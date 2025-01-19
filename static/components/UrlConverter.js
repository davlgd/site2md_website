export class UrlConverter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="url-form">
                <div class="input-row">
                    <input
                        type="text"
                        class="url-input"
                        placeholder="https://example.com"
                        aria-label="Enter URL to convert"
                    >
                    <button class="url-button">Convert to Markdown</button>
                </div>
                <div class="format-option">
                    <input type="checkbox" class="json-checkbox">
                    <label>JSON output with metadata</label>
                </div>
            </div>
        `;
        this._setupListeners();
    }

    _setupListeners() {
        const input = this.querySelector('.url-input');
        const button = this.querySelector('.url-button');

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this._convert();
        });

        button.addEventListener('click', () => this._convert());
    }

    _convert() {
        const url = this.querySelector('.url-input').value.trim();
        const jsonOutput = this.querySelector('.json-checkbox').checked;
        if (url) {
            try {
                const encodedUrl = encodeURIComponent(url);
                window.open(`/${encodedUrl}${jsonOutput ? '?format=json' : ''}`, '_blank');
            } catch (e) {
                alert('Invalid URL format');
            }
        }
    }
}
