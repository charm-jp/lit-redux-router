import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';
import './github.js';

class AppFooter extends LitElement {
  static get styles() {
    return css`
      a {
        color: var(--mdc-theme-primary);
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      .mdc-icon-button {
        display: block;
      }

      footer {
        max-width: 1268px;
      }
    `;
  }

  render() {
    return html`
      <style>
        @import url(https://unpkg.com/@material/layout-grid/dist/mdc.layout-grid.min.css);
        @import url(https://unpkg.com/@material/icon-button/dist/mdc.icon-button.min.css);
      </style>
      <footer class="mdc-layout-grid">
        <div class="mdc-layout-grid__inner">
          <p class="mdc-layout-grid__cell mdc-layout-grid__cell--align-middle mdc-layout-grid__cell--span-8">
            &copy; 2018 <a href="https://github.com/fernandopasik">Fernando Pasik</a>. Code licensed under the
            <a href="https://github.com/fernandopasik/lit-redux-router/blob/master/LICENSE">MIT license</a>
          </p>
          <nav class="mdc-layout-grid__cell mdc-layout-grid__cell--align-middle mdc-layout-grid__cell--span-4 mdc-layout-grid--align-right">
            <a
              class="mdc-icon-button"
              href="https://github.com/fernandopasik/lit-redux-router"
              aria-label="Github Repo"
            >
              <icon-github></icon-github>
            </a>
          </nav>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
