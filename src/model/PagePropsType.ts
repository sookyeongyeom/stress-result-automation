import ValidExcelData from './ValidExcelData';

export default interface PagePropsType {
	parsedData: ValidExcelData;
}

export interface Page3PropsType extends PagePropsType {
	pressReady: () => void;
}
