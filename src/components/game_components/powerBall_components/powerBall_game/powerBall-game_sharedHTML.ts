'use strict';

import type { IPowerBallGameSharedHTML } from '../powerBall_resources/powerBall_types/IPowerBallGame.js';

const powerballGame_sharedHTML: IPowerBallGameSharedHTML = {
    global: '',
    shell: '',
    container: ''
};

powerballGame_sharedHTML.global = /*html*/ `


`;

powerballGame_sharedHTML.shell = /*html*/ `

    <powerball-game id="powerballGame" class="powerball-game"></powerball-game>

`;

powerballGame_sharedHTML.container = /*html*/ `

    <div class="container">
    <div class="row">
        <div class="col-md-12">
        <h1 class="pb-h1">Powerball®️</h1>
        <p class="pb-paragraph">Choose 5 numbers between 1 and 69 and 1 Powerball number between 1 and 26.</p>
        <form id="powerball-form">
            <div class="form-group">
            <label for="powerball-numbers">Numbers</label>
            <input type="text" class="form-control" id="powerball-numbers" placeholder="Enter 5 numbers">
            </div>
            <div class="form-group">
            <label for="powerball-powerball">Powerball</label>
            <input type="text" class="form-control" id="powerball-powerball" placeholder="Enter 1 Powerball number">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <div id="powerball-results"></div>
        </div>
    </div>

`;

export { powerballGame_sharedHTML };
