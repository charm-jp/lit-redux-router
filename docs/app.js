import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class AppDocs extends LitElement {
  static get styles() {
    return css`
      :host {
        font-size: 16px;
        line-height: 1.5;
        color: #111;
        background-color: #ECEFF1;
        --mdc-theme-primary: #2196f3;
      }
    `;
  }

  render() {
    return html`
      <style>
        @import url(https://unpkg.com/@material/typography/dist/mdc.typography.min.css);
      </style>
      <div class="app mdc-typography">
      </div>
    `;
  }
}

customElements.define('app-docs', AppDocs);
