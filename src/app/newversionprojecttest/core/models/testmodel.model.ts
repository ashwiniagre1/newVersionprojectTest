/**
 * 
 * Date: 21/09/2018	
 */
export class Testmodel
{
	
	private _text: string;
	private _num: number;
	
	constructor() { 
	}
	
	set text(value: string) {
		this._text = value;
	}
	get text() : string {
		return this._text;
	}
	set num(value: number) {
		this._num = value;
	}
	get num() : number {
		return this._num;
	}
	
}
