import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { useEffect, useState } from 'react';

interface IParsedData {
	[keys: string]: string | number;
}

interface IProps {
	excelData: string;
	pressReady: () => void;
}

function Report({ excelData, pressReady }: IProps) {
	const [parsedData, setParsedData] = useState<IParsedData>();
	useEffect(() => {
		if (excelData.length !== 0) setParsedData(JSON.parse(excelData));
	}, [excelData]);

	return (
		<>
			{parsedData ? (
				<>
					<Page1 parsedData={parsedData} />
					<Page2 parsedData={parsedData} />
					<Page3 parsedData={parsedData} pressReady={pressReady} />
					{/* <Page4 /> */}
				</>
			) : null}
		</>
	);
}

export default Report;
