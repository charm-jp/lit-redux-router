import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class AppHome extends LitElement {
  static get styles() {
    return css`
      .hero {
        text-align: center;
        padding: 64px 0;
      }

      .mdc-typography--headline2 {
      }

      .mdc-typography--headline5 {

      }
    `;
  }

  render() {
    return html`
      <style>
        @import url(https://unpkg.com/@material/typography/dist/mdc.typography.min.css);
      </style>
      <div class="hero">
        <h1 class="mdc-typography--headline2">Lit Redux Router</h1>
        <p class="mdc-typography--headline5">Declarative way of routing for <a href="https://github.com/Polymer/lit-html">lit-html</a> powered by <a href="https://github.com/Polymer/lit-element">lit-element</a>, <a href="https://github.com/Polymer/pwa-helpers">pwa-helpers</a> and <a href="https://redux.js.org/">redux</a>.</p>
        <p><a href="/getting-started">Get Started</a></p>
      </div>
    `;
  }
}

customElements.define('app-home', AppHome);
