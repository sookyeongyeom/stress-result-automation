import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { useEffect, useState } from 'react';
import validation from '../util/validation';
import ValidExcelData from '../model/ValidExcelData';
import ReportPropsType from '../model/ReportPropsType';

function Report({ excelData, pressReady }: ReportPropsType) {
	const [parsedData, setParsedData] = useState<ValidExcelData>();
	useEffect(() => {
		if (excelData.length !== 0) setParsedData(validation(JSON.parse(excelData)));
	}, [excelData]);

	return (
		<>
			{parsedData ? (
				<>
					<Page1 parsedData={parsedData} />
					<Page2 parsedData={parsedData} />
					<Page3 parsedData={parsedData} pressReady={pressReady} />
				</>
			) : null}
		</>
	);
}

export default Report;
