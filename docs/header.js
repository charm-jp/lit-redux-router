import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';
import './github.js';

class AppHeader extends LitElement {
  static get styles() {
    return css`
      .mdc-top-app-bar {
        top: 0;
      }

      .mdc-top-app-bar__title {
        color: inherit;
      }
    `;
  }

  render() {
    return html`
        <style>
          @import url(https://unpkg.com/@material/top-app-bar/dist/mdc.top-app-bar.min.css);
        </style>
        <header class="mdc-top-app-bar">
          <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <a href="/" class="mdc-top-app-bar__title">Lit Redux Router</a>
            </section>
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
              <a href="https://github.com/fernandopasik/lit-redux-router" class="mdc-top-app-bar__action-item" aria-label="Github Repo">
                <icon-github></icon-github>
              </a>
            </section>
          </div>
        </header>
    `;
  }
}

customElements.define('app-header', AppHeader);
