export class FeatureGrid extends HTMLElement {
    constructor() {
        super();
        const features = JSON.parse(this.getAttribute('features') || '[]');
        this.innerHTML = `
            <div class="features-grid">
                ${features.map(f => `
                    <div class="feature">
                        [+] ${f.title}<br>${f.description}
                    </div>
                `).join('')}
            </div>
        `;
    }
}
