// Lottery Ai Header Shared Styles

import { ILotteryAiHeaderSharedStyles } from './IlotteryAi_header.js';

const lotteryAiHeaderSharedStyles: ILotteryAiHeaderSharedStyles = {
	global: '',
	shell: '',
	container: ''
};

lotteryAiHeaderSharedStyles.global = /*css*/ `



`;

lotteryAiHeaderSharedStyles.shell = /*css*/ `
    

    
`;

lotteryAiHeaderSharedStyles.container = /*css*/ `

    .header {
        margin: 5em auto;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        width: 78.2%;
        height: auto;
        justify-content: space-between;
        align-items: center;
        border-radius: 12.3px;
        background-color: hsla(187, 52%, 80%, 0.993);
        border: 1.7px solid hsla(0, 0%, 0%, 0.993);
        box-shadow: 7px 5px 9px hsla(0, 0%, 0%, 0.69);
        filter: drop-Shadow(0.7rem 0.9rem 0.55rem hsla(0, 0%, 0%, 0.79));
        color: hsla(240, 64%, 27%, 0.993);
        text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.29);
    }

    .header .header-h1 {
        display: inline-flex;
        font-family: 'Black Ops One', sans-serif;
        font-size: 4em;
        font-weight: 500;
        text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.29);
    }

    .header .header-para-1 {
        display: inline-flex;
        font-family: 'Titillium Web', sans-serif;
        font-size: 3em;
        font-weight: 400;
    }

    .header .header-para-2 {
        display: inline-flex;
        font-family: 'Titillium Web', sans-serif;
        font-size: 1.25em;
        font-weight: 400;
    }

`;

export { lotteryAiHeaderSharedStyles };
