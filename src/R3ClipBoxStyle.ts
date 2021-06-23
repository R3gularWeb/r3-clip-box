import { css } from 'lit';

export default css`
:host {
    font-family: 'VT323', monospace;
    --main-size-with: #70px;
    --main-size-height: #70px;
    --font-size: 50px;
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

    #clip.small {
        --main-size-with: 50px;
        --main-size-height: 50px;
        --font-size: 30px;
    }

    #clip.medium {
        --main-size-with: 70px;
        --main-size-height: 70px;
        --font-size: 50px;
    }

    #clip.big {
        --main-size-with: 100px;
        --main-size-height: 100px;
        --font-size: 80px;
    }

    #clip.square {
        --main-radius: 10px;
    }
`;