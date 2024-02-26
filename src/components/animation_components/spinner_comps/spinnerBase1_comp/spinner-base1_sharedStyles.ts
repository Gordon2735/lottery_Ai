'use strict';

import { IspinnerBase1SharedStyles } from './Ispinner-base1.js';

const spinnerBase1_SharedStyles: IspinnerBase1SharedStyles = {
	global: '',
	root: '',
	construct: '',
	logic: '',
	queries: ''
};

spinnerBase1_SharedStyles.global = /*css*/ `

`;

spinnerBase1_SharedStyles.root = /*css*/ `

`;

spinnerBase1_SharedStyles.construct = /*css*/ `

    .spinner-base1-label {
        margin-top: -3.5em;
        margin-left: -3.5em;
        box-sizing: border-box;
        position: absolute;  
        top: 50%;
        left: 50%;
        width: 3.5em;
        height: 3.5em;
    }

    progress:indeterminate {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 4vw; height: 4vw;
        border: 0;
        background: none;
    }

    progress:indeterminate::-moz-progress-bar {
        background: none; /* display:none doesn’t work, don’t ask me why */
    }

    progress:indeterminate::-webkit-progress-bar {
        display: none;
    }

    progress:indeterminate::-ms-fill {
        animation-name: none; /* Explicitly must be animation-name: none */
    }

    progress:indeterminate {
        border-radius: 50%;
        border-top: 3px solid #3498db;
        border-right: 3px solid transparent;
        animation: loading 0.7s linear infinite;
    }
    /*
    progress:indeterminate {
        border: 1em double;
        border-color: gray darkgray;
        border-radius: 50%;
        animation: spin 1s infinite;
    }
    */

`;

spinnerBase1_SharedStyles.logic = /*css*/ `

    .span-error-code {
        display: none;
    }

`;

spinnerBase1_SharedStyles.queries = /*css*/ `

    @keyframes spin {
        to { transform: rotate(1turn) }
    }

    @keyframes loading {
        to {
            transform: rotate(360deg);
        }
    }

`;

export { spinnerBase1_SharedStyles };
