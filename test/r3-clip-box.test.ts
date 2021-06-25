import { html, fixture, expect, assert } from '@open-wc/testing';

import { R3ClipBox } from '../src/R3ClipBox.js';
import { colors } from '../src/Constants.js';
import '../r3-clip-box.js';

describe('R3ClipBox', () => {
  describe('Default value', async () => {
    const el = await fixture<R3ClipBox>(html`<r3-clip-box></r3-clip-box>`);

    it('Props value', () => {
      expect(el.bgColor).to.eql({});
      assert.typeOf(el.bgColor, 'Object');

      expect(el.image).to.equal('');
      assert.typeOf(el.image, 'String');

      expect(el.size).to.equal('medium');
      assert.typeOf(el.size, 'String');

      expect(el.text).to.equal('NA');
      assert.typeOf(el.text, 'String');

      expect(el.variant).to.equal('solid');
      assert.typeOf(el.variant, 'String')
    });

    describe('View component in DOM', () => {
      it('Background color', () => {
        const background = el.shadowRoot?.querySelector('#clip')?.getAttribute('style');
        const color = background?.split(" ")[1];
        
        expect(colors.indexOf(
            color ? color.substring(0, color.length - 1) : ''
          ))
        .to.not.equal(-1);
      });

      it('Size and Variant', () => {
        const size = el.shadowRoot?.querySelector('#clip')?.getAttribute('class');
        expect('medium solid').to.equal(size);
      });

      it('View Text and Image not displayed', () => {
        const text  = el.shadowRoot?.querySelector('#clip label')?.textContent;
        const image = el.shadowRoot?.querySelector('#clip img')?.textContent;

        expect(text).to.equal('NA');
        assert.isUndefined(image);
      });
    });
  });

  describe('Change Properties', () => {
    
    it('View Image and Text not displayed', async () => {
      const image = 'https://avatars.githubusercontent.com/u/86213026?s=200&v=4';
      const el = await fixture<R3ClipBox>(html`<r3-clip-box image="${image}"></r3-clip-box>`);
  
      const text = el.shadowRoot?.querySelector('#clip label')?.textContent;
      const src = el.shadowRoot?.querySelector('#clip img')?.getAttribute('src');

      expect(el.image).to.equal(src);
      assert.isUndefined(text);
    });

    it('View large Text in label', async () => {
      const el = await fixture<R3ClipBox>(html`<r3-clip-box text="Asuna"></r3-clip-box>`);
      const text = el.shadowRoot?.querySelector('#clip label')?.textContent;

      expect(text).to.equal('AS');
    });

    it('View Text with space in label', async () => {
      const el = await fixture<R3ClipBox>(html`<r3-clip-box text="Asuna X"></r3-clip-box>`);
      const text = el.shadowRoot?.querySelector('#clip label')?.textContent;

      expect(text).to.equal('AX');
    });
  });
});
