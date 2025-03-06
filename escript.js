class PremiosOscar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                section {
                    font-family: Arial, sans-serif;
                    background: #f8f9fa;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                    max-width: 800px;
                    margin: auto;
                } 
                h1 {
                    text-align: center;
                    color: #007bff;
                }
                .award {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 15px;
                    background: #ffffff;
                    padding: 10px;
                    border-radius: 5px;
                    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                }
                .award img {
                    width: 100px;
                    height: auto;
                    border-radius: 5px;
                    object-fit: cover;
                    transition: transform 0.3s ease-in-out;
                }
                .award img:hover {
                    transform: scale(1.2);
                }
                .award-info {
                    flex: 1;
                }
                p {
                    margin: 5px 0;
                }
            </style>
            <section>
                <h1>Ganadores de los Premios Óscar 2025</h1>
                <div class="award">
                    <img src="https://m.media-amazon.com/images/M/MV5BNmE0NGQ5NmUtNWY3OS00MjRjLTgyZTYtNWY3Y2E3YTEzYzg0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg">
                    <div class="award-info">
                        <h2>Mejor Película</h2>
                        <p><strong>Ganadora:</strong> "Anora"</p>
                    </div>
                </div>
                <div class="award">
                    <img src="https://static.mujerhoy.com/www/multimedia/202503/03/media/cortadas/sean-baker-kKPI-U23010253415890oH-984x468@MujerHoy.jpg">
                    <div class="award-info">
                        <h2>Mejor Dirección</h2>
                        <p><strong>Ganador:</strong> Sean Baker por "Anora"</p>
                    </div>
                </div>
                <div class="award">
                    <img src="https://apicms.thestar.com.my/uploads/images/2025/03/04/3195861.webp">
                    <div class="award-info">
                        <h2>Mejor Actor Protagonista</h2>
                        <p><strong>Ganador:</strong> Adrien Brody por "The Brutalist"</p>
                    </div>
                </div>
                <div class="award">
                    <img src="https://www.reuters.com/resizer/v2/376QAKFNIJIX3JEBPBAKPN3ZGQ.jpg?auth=2a4de3360834af9adfdc804780bbfcbb7358d94d0e9038083ce8ffc8263a47f0&width=1080&quality=80">
                    <div class="award-info">
                        <h2>Mejor Actriz Protagonista</h2>
                        <p><strong>Ganadora:</strong> Mikey Madison por "Anora"</p>
                    </div>
                </div>
                <div class="award">
                    <img src="https://www.reuters.com/resizer/v2/6Q7Y3NHT4BJOJCCREUPESHNF4Q.jpg?auth=df7dce0fb90547e026adab7fd34b232a6a4f96cd91dcb9068e210285309b8b99&width=1080&quality=80">
                    <div class="award-info">
                        <h2>Mejor Actor de Reparto</h2>
                        <p><strong>Ganador:</strong> Kieran Culkin por "A Real Pain"</p>
                    </div>
                </div>
                <div class="award">
                    <img src="https://dims.apnews.com/dims4/default/e84cb26/2147483647/strip/true/crop/5178x3452+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F75%2F7d%2F399b0a93be3cfac6589f17f4cb1c%2Fe41569447c134894b14727a0289930ff">
                    <div class="award-info">
                        <h2>Mejor Actriz de Reparto</h2>
                        <p><strong>Ganadora:</strong> Zoe Saldaña por "Emilia Pérez"</p>
                    </div>
                </div>
                 <div class="award">
                    <img src="https://www.diariodecultura.com.ar/wp-content/uploads/2025/01/6-1.jpg">
                    <div class="award-info">
                         <h2>Mejor Película Internacional</h2>
                         <p><strong>Ganadora:</strong> "Aún estoy aquí" (Brasil)</p>
                    </div>
                </div>
                </div>
                 <div class="award">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVrgK3DuHn5Mxr2VgvvQxfPtFIXE0athu9A&s">
                    <div class="award-info">
                        <h2>Mejor Película de Animación</h2>
                        <p><strong>Ganadora:</strong> "Flow"</p>

                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define("premios-oscar", PremiosOscar);
