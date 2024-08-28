// Pick Four Header

'use strict';

import { Pick4HeaderTemplate } from './pick4-header_template.js';
import {
    //    appendChildren,
    RegisterComponent
    //   setAttributes
} from '../../../componentTools/general_helpers.js';
// import { pick4_header_sharedStyles } from './pick4-header_sharedStyles.js';
// import { pick4_header_sharedHTML } from './pick4-header_sharedHTML.js';

class Pick4Header extends Pick4HeaderTemplate {}

RegisterComponent('pick4-header', Pick4Header);
