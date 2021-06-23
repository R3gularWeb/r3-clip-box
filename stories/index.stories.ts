import { html, TemplateResult } from 'lit-html';
import '../r3-clip-box.js';

export default {
  title: 'R3ClipBox',
  component: 'r3-clip-box',
  argTypes: {
    image: { control: 'image' },
    size: { control: 'size' },
    text: { control: 'color' },
    variant: { control: 'variant' }
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  image?: string;
  size?: string;
  text?: string;
  variant?: string;
}

const Template: Story<ArgTypes> = ({
  image = '',
  size = 'medium',
  text = 'NA',
  variant = 'solid',
}: ArgTypes) => html`
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=VT323&display=swap" rel="stylesheet"> 
  <r3-clip-box
    image="${image}"
    size="${size}"
    text="${text}"
    variant="${variant}"
  >
  </r3-clip-box>
`;

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  text: 'Asuna X',
};

export const BigSize = Template.bind({});
BigSize.args = {
  text: 'Asuna X',
  size: 'big'
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  text: 'Asuna X',
  size: 'small'
};

export const Square = Template.bind({});
Square.args = {
  text: 'Asuna X',
  size: 'big',
  variant: 'square'
};

export const Image = Template.bind({});
Image.args = {
  text: 'Asuna X',
  size: 'big',
  variant: 'square',
  image: "https://avatars.githubusercontent.com/u/86213026?s=200&v=4"
};
