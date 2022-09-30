import ValidExcelData from '../model/ValidExcelData';
import RawExcelData from '../model/RawExcelData';

export default function validation(parsedData: RawExcelData) {
	let validData = new ValidExcelData(parsedData);
	for (const key in validData) {
		console.log(`${key} : ${validData[key]}`);
	}
	return validData;
}
