import RawExcelData from './RawExcelData';

export default class ValidExcelData {
	name: string = '';
	gender: string = '';
	school: string = '';
	startDate: string = '';
	endDate: string = '';
	exercise1: number = 0;
	exercise2: number = 0;
	exercise3: number = 0;
	exercise4: number = 0;
	exercise5: number = 0;
	exercise6: number = 0;
	exercise7: number = 0;
	sleep1: number = 0;
	sleep2: number = 0;
	sleep3: number = 0;
	sleep4: number = 0;
	sleep5: number = 0;
	sleep6: number = 0;
	sleep7: number = 0;
	walk1: number = 0;
	walk2: number = 0;
	walk3: number = 0;
	walk4: number = 0;
	walk5: number = 0;
	walk6: number = 0;
	walk7: number = 0;
	[key: string]: string | number | Date;

	constructor(parsedData: RawExcelData) {
		for (const key in parsedData) {
			if (Object.keys(this).includes(key)) this[key] = parsedData[key];
		}
	}
}
