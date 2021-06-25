import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import { colors } from './Constants';
import style from './R3ClipBoxStyle';

export class R3ClipBox extends LitElement {
  static styles = [style];

  @property({ type: Array, attribute: 'bg-color' }) 
  bgColor = {};

  @property({ type: String }) 
  image = '';

  @property({ type: String })
  size = 'medium';

  @property({ type: String })
  text = 'NA';

  @property({ type: String })
  variant = 'solid';

  _getColorRandom() {
    return colors[Math.floor(Math.random() * (colors.length - 0)) + 0];
  }

  get _getBgColor() {
    let style: String = '';

    switch(this.variant) {
      case 'solid': style = `background: ${this._getColorRandom()};`; break;
      default: style = `background: ${this._getColorRandom()};`;
    }

    return style;
  }

  get _getImage() {
    return html`
      <img src="${this.image}" />
    `;
  }

  get _getText() {
    const initials: String =
      this.text.indexOf(' ') !== -1 
        ? `${this.text.split(' ')[0][0]}${this.text.split(' ')[1][0]}`
        : `${this.text[0]}${this.text[1]}`;

    return html`
      <label>${initials.toUpperCase()}</label>
    `;
  }

  render() {
    return html`
      <div 
        id="clip" 
        class="${this.size} ${this.variant}" 
        style="${!this.image ? this._getBgColor : ''}"
      >
        ${!this.image ? this._getText : this._getImage}
      </div>
    `;
  }
}
