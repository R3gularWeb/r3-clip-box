import { css } from 'lit';

export default css`
  :host {
    font-family: 'Blinker', sans-serif, monospace;
    --main-size-with: #70px;
    --main-size-height: #70px;
    --font-size: 45px;
    --main-radius: 50%;
  }

  #clip {
    background: #25282f;
    border-radius: var(--main-radius);
    width: var(--main-size-with);
    height: var(--main-size-height);
    color: white;
    display: flex;
    justify-content: center;
  }

  #clip label {
    margin: auto;
    font-size: var(--font-size);
  }

  #clip.supersmall {
    --main-size-with: 30px;
    --main-size-height: 30px;
    --font-size: 15px;
  }

  #clip.small {
    --main-size-with: 50px;
    --main-size-height: 50px;
    --font-size: 25px;
  }

  #clip.medium {
    --main-size-with: 70px;
    --main-size-height: 70px;
    --font-size: 45px;
  }

  #clip.big {
    --main-size-with: 100px;
    --main-size-height: 100px;
    --font-size: 60px;
  }

  #clip.superbig {
    --main-size-with: 150px;
    --main-size-height: 150px;
    --font-size: 90px;
  }

  #clip.occupy-all {
    --main-size-with: 100%;
    --main-size-height: 100%;
    --font-size: 90px;
  }

  #clip.square {
    --main-radius: 10px;
  }
`;
