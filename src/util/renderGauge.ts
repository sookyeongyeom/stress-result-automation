import { MutableRefObject } from 'react';
import formatHours from './formatHours';

type Unit = {
	[key: string]: string;
};

type Digit = {
	[key: string]: number;
};

type Standard = {
	[key: string]: any;
};

export default function renderGuage(
	reportData: number[],
	targetAverage: MutableRefObject<HTMLTableCellElement>,
	targetGauge: MutableRefObject<HTMLImageElement>,
	targetState: MutableRefObject<HTMLTableCellElement>,
	reportType: string,
	gender?: string,
) {
	// 모든 데이터를 숫자로 변환
	console.log('####### ' + reportType + ' #######');
	console.log(reportData);

	// 분자
	let numerator = 0;
	if (reportType === 'exercise') numerator = reportData.filter((v) => v !== -1).length;
	if (reportType === 'sleep') numerator = reportData.filter((v) => v !== 0).length;
	if (reportType === 'walk') numerator = reportData.filter((v) => v !== 0).length;

	// 평균
	reportData = reportData.map((v) => Math.max(Number(v), 0));
	let total = reportData.reduce((acc, cur) => (acc += cur), 0);
	if (reportType === 'sleep' || reportType === 'exercise') total /= 60;
	let average = total / numerator;
	console.log(average);

	console.log('기존 : ' + total / 7);
	console.log('필터 : ' + average);

	// 7일 평균 렌더링
	if (isNaN(average)) targetAverage.current.innerHTML = 'X';
	else {
		if (reportType === 'sleep' || reportType === 'exercise')
			targetAverage.current.innerHTML = `${formatHours(Number(average.toFixed(2)))}`;
		else
			targetAverage.current.innerHTML = `${Number(average.toFixed(0)).toLocaleString('ko-KR')}걸음`;
	}
	if (isNaN(average)) average = 0;

	let state: string = '';

	if (reportType === 'exercise') {
		if (average >= 1) state = 'exact';
		else state = 'less';
	}
	if (reportType === 'sleep') {
		if (average >= 9) state = 'exact';
		else state = 'less';
	}
	if (reportType === 'walk') {
		// 성별에 따라 기준 상이
		if (gender === '남')
			if (average >= 12000) state = 'exact';
			else state = 'less';
		if (gender === '여')
			if (average >= 10000) state = 'exact';
			else state = 'less';
	}

	// 게이지 렌더링
	const max: Standard = {
		exercise: 2,
		sleep: 18,
		walk: {
			남: 24000,
			여: 20000,
		},
	};
	let deg;
	// 성별에 따라 기준 상이
	if (gender && reportType === 'walk') deg = (average / max[reportType][gender]) * 180 - 90;
	else deg = (average / max[reportType]) * 180 - 90;
	// 게이지 하한선/상한선
	if (deg < -90) deg = -90;
	if (deg > 90) deg = 90;
	targetGauge.current.style.transform = `rotate(${deg}deg)`;

	// 충족 여부 렌더링
	const status: { [key: string]: string } = {
		less: '미충족',
		exact: '충족',
	};
	if (state) targetState.current.innerHTML = status[state];

	console.log(average + ' ' + state);
}
