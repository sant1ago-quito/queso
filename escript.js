class PremiosOscar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                section {
                    font-family: Arial, sans-serif;
                    background: #f8f9fa;
                    padding: 10px;
                    border-radius: 5px;
                    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                }
                h2 {
                    color: #007bff;
                }
                p {
                    margin: 5px 0;
                }
            </style>
            <section>
                <h1>Ganadores de los Premios Óscar 2025</h1>
                <h2>Mejor Película</h2>
                <p><strong>Ganadora:</strong> "Anora"</p>

                <h2>Mejor Dirección</h2>
                <p><strong>Ganador:</strong> Sean Baker por "Anora"</p>

                <h2>Mejor Actor Protagonista</h2>
                <p><strong>Ganador:</strong> Adrien Brody por "The Brutalist"</p>

                <h2>Mejor Actriz Protagonista</h2>
                <p><strong>Ganadora:</strong> Mikey Madison por "Anora"</p>

                <h2>Mejor Película de Animación</h2>
                <p><strong>Ganadora:</strong> "Flow"</p>
            </section>
        `;
    }
}

customElements.define("premios-oscar", PremiosOscar);
