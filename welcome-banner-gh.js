class WelcomeBanner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        /* All of your CSS from the <style> tag goes here */
        .background-shapes-container {
            display: none;
            position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; overflow: hidden;
        }
        .shape { position: absolute; border-radius: 50%; filter: blur(87.55px); }
        .shape-2 { width: 437.75px; height: 437.75px; background: rgba(94, 112, 106, 0.3); bottom: -70.04px; right: -131.325px; animation: drift 30s infinite alternate-reverse ease-in-out; }
        @keyframes drift { from { transform: translate(0, 0) rotate(0deg); } to { transform: translate(70.04px, 105.06px) rotate(90deg); } }

        :host {
            font-family: 'Montserrat', sans-serif;
            margin: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .page-frame {
            position: absolute;
            top: 17.51px;
            left: 17.51px;
            right: 17.51px;
            bottom: 17.51px;
            border: 0.8755px solid rgba(84, 80, 74, 0.2);
            pointer-events: none;
            z-index: 10;
        }

        .split-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            width: 63.47375%;
            max-width: 763.436px;
            padding: 4.3775vw;
            box-sizing: border-box;
            position: relative;
            background-color: rgba(237, 234, 229, 0.6);
            backdrop-filter: blur(13.1325px);
            -webkit-backdrop-filter: blur(13.1325px);
        }

        .title-pane { grid-column: 1 / 2; padding-right: 4.3775%; }
        .main-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(1.97rem, 7.88vw, 4.33rem);
            line-height: 1.1;
            color: #5E706A;
            margin: 0;
            text-align: right;
        }
        .text-pane {
            grid-column: 2 / 3;
            padding-left: 8.755%;
        }
        .about-text {
            font-size: 0.7854rem;
            line-height: 1.89;
            color: #54504A;
            font-weight: 300;
            margin-bottom: 30.64px;
        }
        .award-highlight {
            border-left: 1.751px solid #5E706A;
            padding: 8.755px 17.51px;
            margin-bottom: 35.02px;
        }
        .award-highlight p {
            font-family: 'Playfair Display', serif;
            font-style: italic;
            font-weight: 400;
            font-size: 0.91035rem;
            color: #54504A;
            margin: 0;
            line-height: 1.575;
        }
        .cta-button {
            display: block;
            padding: 10.5px 0;
            border: 0.8755px solid #54504A;
            background-color: transparent;
            color: #54504A;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.6195rem;
            font-weight: 400;
            text-transform: uppercase;
            letter-spacing: 1.83855px;
            text-decoration: none;
            text-align: center;
            transition: all 0.4s ease-in-out;
        }
        .cta-button:hover {
            background-color: #54504A;
            color: #fff;
            cursor: pointer;
        }
        @media (max-width: 788px) {
            .page-frame {
                top: 13.13px; left: 13.13px; right: 13.13px; bottom: 13.13px;
            }
            .split-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 43.775px;
                padding: 52.53px 21.88px;
                width: 78.8%;
            }
            .title-pane { padding: 0; }
            .main-title {
                text-align: center;
                font-size: clamp(1.73rem, 9.45vw, 3.15rem);
            }
            .text-pane {
                padding: 0;
                width: 78.8%;
                max-width: 481.5px;
                text-align: center;
            }
            .award-highlight {
                margin-left: auto;
                margin-right: auto;
                text-align: left;
            }
        }
      </style>

      <!-- All of your HTML from the <body> tag goes here -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400&display=swap" rel="stylesheet">
      <div class="background-shapes-container">
          <div class="shape shape-2" aria-hidden="true"></div>
      </div>

      <main class="split-container">
          <div class="page-frame"></div>
          <div class="title-pane">
              <h1 class="main-title">The Alchemy of Beauty</h1>
          </div>
          <div class="text-pane">
              <p class="about-text">
                  Alchemy Aesthetics is a sanctuary where relaxation meets transformation. We blend artistry with natural, results-driven treatments, offering personalized care that enhances confidence and awakens your inner radiance.
              </p>
              <div class="award-highlight">
                  <p>Founded by Sasha, voted Best Esthetician in SWLA for three consecutive years.</p>
              </div>
              <a href="https://book.squareup.com/appointments/odmq2zuhgt6x2y/location/LBBDR603BJZ3X/services?buttonTextColor=000000&color=f3dbb2&locale=en&referrer=so" class="cta-button" target="_blank" rel="noopener noreferrer">Explore Our Services</a>
          </div>
      </main>
    `;
  }
}

customElements.define('welcome-banner', WelcomeBanner);