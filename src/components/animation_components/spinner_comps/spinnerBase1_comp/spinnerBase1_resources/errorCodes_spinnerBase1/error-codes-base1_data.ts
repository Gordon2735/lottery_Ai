'use strict';

import { ErrorCodesBase1Template } from './error-codes-base1_template.js';
import { RegisterComponent } from '../../../../../componentTools/general_helpers.js';

class ErrorCodesBase1Data extends ErrorCodesBase1Template {
	public codeData: { [key: string]: string }[] = [
		{
			code_001:
				'Method "ProgressSpinner" failed! Component <spinner-base001>'
		},
		{
			code_002:
				'Method "ProgressSpinner" failed! Component <spinner-base002>'
		},
		{
			code_003:
				'Method "ProgressSpinner" failed! Component <spinner-base003>'
		},
		{
			code_004:
				'Method "ProgressSpinner" failed! Component <spinner-base004>'
		},
		{
			code_005:
				'Method "ProgressSpinner" failed! Component <spinner-base005>'
		},
		{
			code_006:
				'Method "ProgressSpinner" failed! Component <spinner-base006>'
		},
		{
			code_007:
				'Method "ProgressSpinner" failed! Component <spinner-base007>'
		},
		{
			code_008:
				'Method "ProgressSpinner" failed! Component <spinner-base008>'
		},
		{
			code_009:
				'Method "ProgressSpinner" failed! Component <spinner-base009>'
		},
		{
			code_010:
				'Method "ProgressSpinner" failed! Component <spinner-base010>'
		},
		{
			code_011:
				'Method "ProgressSpinner" failed! Component <spinner-base011>'
		},
		{
			code_012:
				'Method "ProgressSpinner" failed! Component <spinner-base012>'
		},
		{
			code_013:
				'Method "ProgressSpinner" failed! Component <spinner-base013>'
		},
		{
			code_014:
				'Method "ProgressSpinner" failed! Component <spinner-base014>'
		},
		{
			code_015:
				'Method "ProgressSpinner" failed! Component <spinner-base015>'
		},
		{
			code_016:
				'Method "ProgressSpinner" failed! Component <spinner-base016>'
		},
		{
			code_017:
				'Method "ProgressSpinner" failed! Component <spinner-base017>'
		},
		{
			code_018:
				'Method "ProgressSpinner" failed! Component <spinner-base018>'
		},
		{
			code_019:
				'Method "ProgressSpinner" failed! Component <spinner-base019>'
		},
		{
			code_020:
				'Method "ProgressSpinner" failed! Component <spinner-base020>'
		},
		{
			code_021:
				'Method "ProgressBar" failed! Component <progressbar-base001>'
		},
		{
			code_022:
				'Method "ProgressBar" failed! Component <progressbar-base002>'
		},
		{
			code_023:
				'Method "ProgressBar" failed! Component <progressbar-base003>'
		},
		{
			code_024:
				'Method "ProgressBar" failed! Component <progressbar-base004>'
		},
		{
			code_025:
				'Method "ProgressBar" failed! Component <progressbar-base005>'
		},
		{
			code_026:
				'Method "ProgressBar" failed! Component <progressbar-base006>'
		},
		{
			code_027:
				'Method "ProgressBar" failed! Component <progressbar-base007>'
		},
		{
			code_028:
				'Method "ProgressBar" failed! Component <progressbar-base008>'
		},
		{
			code_029:
				'Method "ProgressBar" failed! Component <progressbar-base009>'
		},
		{
			code_030:
				'Method "ProgressBar" failed! Component <progressbar-base010>'
		},
		{
			code_031:
				'Method "ProgressBar" failed! Component <progressbar-base011>'
		},
		{
			code_032:
				'Method "ProgressBar" failed! Component <progressbar-base012>'
		},
		{
			code_033:
				'Method "ProgressBar" failed! Component <progressbar-base013>'
		},
		{
			code_034:
				'Method "ProgressBar" failed! Component <progressbar-base014>'
		},
		{
			code_035:
				'Method "ProgressBar" failed! Component <progressbar-base015>'
		}
	];

	constructor() {
		super();

		this.activateShadowDOM = false;
	}

	override connectedCallback(): void {
		super.connectedCallback();

		console.info(
			`
                The <error-code-base1_data> Component's data object is ready 
                 for iterating and is sending the query's response containing 
                  the requested error code!            
            `
		);
	}
}
RegisterComponent('error-codes-base1_data', ErrorCodesBase1Data);

export { ErrorCodesBase1Data };
