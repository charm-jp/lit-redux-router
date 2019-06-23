import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class AppCode extends LitElement {
  static get styles() {
    return css`
      code {
        display: inline-block;
        background-color: #333;
        color: #ddd;
        padding: 20px;
      }

      pre {
        display: block;
        margin: 1.5em 0;
      }
    `;
  }

  updated() {
    const slot = this.shadowRoot.querySelector('slot');
    const children = slot.assignedNodes();

    children.forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        // eslint-disable-next-line no-param-reassign
        child.nodeValue = child.nodeValue.trim();
      }
    });
  }

  render() {
    return html`
      <style>
        @import url(https://unpkg.com/@material/typography/dist/mdc.typography.min.css);
      </style>
      <pre><code><slot></slot></code></pre>
    `;
  }
}

customElements.define('app-code', AppCode);
