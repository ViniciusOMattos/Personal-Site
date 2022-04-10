class RecentWorks extends HTMLElement {
    constructor() {
        super();

        this.build();
    }

    build()  {
        const shadow = this.attachShadow({mode: 'open'});

        shadow.innerHTML = 
        `<div class="works-container">
            <div class="project-card">
                <h1 class="card-name">Project 1</h1>
                <img class="card-img" src="data/images/1.jpg">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, amet?</p>
                <div>
                    <button class="card-btn"><i class="fa-solid fa-caret-right"></i> Preview</button>
                    <button class="card-btn"><i class="fa-solid fa-code"></i> Code</button>
                </div>
            </div>
            <div class="project-card">
                <h1 class="card-name">Project 2</h1>
                <img class="card-img" src="data/images/1.jpg">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, amet?</p>
                <div>
                    <button class="card-btn"><i class="fa-solid fa-caret-right"></i> Preview</button>
                    <button class="card-btn"><i class="fa-solid fa-code"></i> Code</button>
                </div>
            </div>
            <div class="project-card">
                <h1 class="card-name">Project 3</h1>
                <img class="card-img" src="data/images/1.jpg">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, amet?</p>
                <div>
                    <button class="card-btn"><i class="fa-solid fa-caret-right"></i> Preview</button>
                    <button class="card-btn"><i class="fa-solid fa-code"></i> Code</button>
                </div>
            </div>
        </div>`;

        shadow.appendChild(this.styles());
    }

    styles(){
        const style = document.createElement('style');

        style.textContent = `
            .works-container {
                padding: 2rem 0rem;
                display: flex;
                justify-content:space-evenly;
            }
            .project-card {
                width: 200px;
                height: 350px;
                margin: 0.5rem;
                padding: 0.5rem;
                border: solid 1px rgb(24, 24, 24);
                border-radius: 5%;
                background-color: #a0a0a0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                box-shadow: 1rem 1rem 1rem rgb(92, 92, 92);
                position: relative;
                transition: 0.5s, box-shadow 0.5s;
            }
            .project-card:hover{
                background-color: #5e5e5e;
                transform: rotateY(20deg) skewX(-2deg) translateY(-1rem);
                box-shadow: 2rem 2rem 2rem rgb(63, 63, 63);
            }
            .card-name {
                font-size: 1rem;
                font-weight: 900;
                text-transform: uppercase;
                letter-spacing: 0.3rem;
                color: #111;
            }
            .card-img {
                border: solid 1px rgb(24, 24, 24);
                border-radius: 5%;
                width: 200px;
                height: 100%;
            }
            .card-btn {
                margin-top: 1vh;
                margin-right: 0.5vh;
                padding: 2px 4px;
                background: rgb(194, 192, 192);
                border: 1px solid rgb(51, 50, 50);
                cursor: pointer;
                transition: 0.2s;
            }
            .card-btn:hover {
                transform: translateY(-0.2rem);
            }
            /* End of Works */
        `;
        return style;
    }
}

customElements.define(`recent-works`, RecentWorks);