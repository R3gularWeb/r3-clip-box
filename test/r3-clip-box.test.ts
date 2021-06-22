import { html, fixture, expect } from '@open-wc/testing';

import { R3ClipBox } from '../src/R3ClipBox.js';
import '../r3-clip-box.js';

describe('R3ClipBox', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<R3ClipBox>(html`<r3-clip-box></r3-clip-box>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<R3ClipBox>(html`<r3-clip-box></r3-clip-box>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<R3ClipBox>(html`<r3-clip-box title="attribute title"></r3-clip-box>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<R3ClipBox>(html`<r3-clip-box></r3-clip-box>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
