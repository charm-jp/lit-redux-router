import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module';

class AppDocs extends LitElement {
  render() {
    return html`<div class="app"></div>`;
  }
}

customElements.define('app-docs', AppDocs);
