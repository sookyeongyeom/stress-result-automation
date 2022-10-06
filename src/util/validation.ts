import ValidExcelData from '../model/ValidExcelData';
import RawExcelData from '../model/RawExcelData';

export default function validation(parsedData: RawExcelData) {
	let validData = new ValidExcelData(parsedData);
	const idx = Array(7)
		.fill(0)
		.map((v, i) => i + 1);
	// 걸음수 빈데이터이거나 0이면서 고강도 빈데이터거나 0일 시
	// 측정 안한 것이므로 고강도 X (-1)
	// 걸음수 데이터가 있는데 고강도 빈데이터거나 0일 시
	// 운동을 안한 것이므로 고강도 0 (0)
	for (const i of idx) {
		if (validData[`walk${i}`] === 0 && validData[`exercise${i}`] === 0)
			validData[`exercise${i}`] = -1;
	}
	for (const key in validData) {
		console.log(`${key} : ${validData[key]}`);
	}
	return validData;
}
