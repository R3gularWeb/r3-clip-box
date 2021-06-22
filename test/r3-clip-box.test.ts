import { html, fixture, expect, assert } from '@open-wc/testing';

import { R3ClipBox } from '../src/R3ClipBox.js';
import { colors } from '../src/Constants.js';
import '../r3-clip-box.js';

let el: R3ClipBox;

const cleanComponent = async () => {
  el = await fixture<R3ClipBox>(html`<r3-clip-box></r3-clip-box>`);
  await el.updateComplete;
}

const getAttribute = (attribute: string, selector: String = '#clip') =>
  el.shadowRoot?.querySelector(`${selector}`)?.getAttribute(attribute);

const getText = (selector: String) =>
  el.shadowRoot?.querySelector(`${selector}`)?.textContent;

describe('R3ClipBox', () => {
  describe('Default value', () => {
    cleanComponent();

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
        const background = getAttribute('style');
        const color = background?.split(" ")[1];
        
        expect(colors.indexOf(
            color ? color.substring(0, color.length - 1) : ''
          ))
        .to.not.equal(-1);
      });

      it('Size and Variant', () => {
        const size = getAttribute('class');
        expect('medium solid').to.equal(size);
      });

      it('View Text and Image not displayed', () => {
        const text  = getText('#clip label');
        const image = getText('#clip img');

        expect(text).to.equal('NA');
        assert.isUndefined(image);
      });
    });
  });

  describe('Change Properties', () => {
    
    cleanComponent();
    it('View Image and Text not displayed', async () => {
      el.image = 'https://avatars.githubusercontent.com/u/86213026?s=200&v=4';
      await el.updateComplete;
      const text  = getText('#clip label');
      const src = getAttribute('src', '#clip img');

      expect(el.image).to.equal(src);
      assert.isUndefined(text);
    });

    it('View large Text in label', async () => {
      el.text = 'Asuna';
      el.image = '';
      await el.updateComplete;
      const text  = getText('#clip label');

      expect(text).to.equal('AS');
    });

    it('View Text with space in label', async () => {
      el.text = 'Asuna X';
      await el.updateComplete;
      const text  = getText('#clip label');

      expect(text).to.equal('AX');
    });
  });
});
