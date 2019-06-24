import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module';
import './code.js';

class AppRenderContent extends LitElement {
  render() {
    return html`
      <style>
        @import url(https://unpkg.com/@material/typography/dist/mdc.typography.min.css);
      </style>
      <h2 class="mdc-typography--headline3">Render content for a route</h2>

      <p>The <code>lit-route</code> component renders when the <code>path</code> attribute matches with the current browser url. If the route path does not match <b>nothing</b> gets rendered. For rendering content there are two options: with children elements appended to the <code>lit-route</code> element or with the component name in a <code>component</code> attribute.</p>

      <h3 id="with-children-elements" class="mdc-typography--headline4">With children elements</h3>

      <p>Just insert children elements inside the <code>lit-route</code> element and that's what will be rendered when matching the route path.</p>

      <app-code>
class MyApp extends LitElement {
  render() {
    return html\`
      &lt;div class="app-content"&gt;
        &lt;lit-route path="/"&gt;
          &lt;h1&gt;Home&lt;/h1&gt;
        &lt;/lit-route&gt;
        &lt;lit-route path="/about"&gt;
          &lt;h1&gt;About&lt;/h1&gt;
        &lt;/lit-route&gt;
      &lt;/div&gt;
    \`;
  }
}
customElements.define('my-app', MyApp);
      </app-code>

      <h3 id="with-a-component" class="mdc-typography--headline4">With a component</h3>

      <p>Add a <code>component</code> attribute with the name of the element that holds the content that you want to render in the matching route path. (If needed import first the component file)</p>

      <app-code>
class AppHome extends LitElement {
  render() {
    return html\`&lt;h1&gt;Home&lt;/h1&gt;\`;
  }
}
customElements.define('app-home', AppHome);

class AppAbout extends LitElement {
  render() {
    return html\`&lt;h1&gt;About&lt;/h1&gt;\`;
  }
}
customElements.define('app-about', AppAbout);

class MyApp extends LitElement {
  render() {
    return html\`
      &lt;div class="app-content"&gt;
        &lt;lit-route path="/" component="app-home"&gt;&lt;/lit-route&gt;
        &lt;lit-route path="/about" component="app-about"&gt;&lt;/lit-route&gt;
      &lt;/div&gt;
    \`;
  }
}
customElements.define('my-app', MyApp);
      </app-code>
    `;
  }
}

customElements.define('app-render-content', AppRenderContent);
