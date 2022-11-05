import { MutableRefObject } from 'react';
import formatHours from './formatHours';

export default function renderGraph(
	reportData: number[],
	targetY: MutableRefObject<HTMLDivElement>,
	targetGraph: MutableRefObject<HTMLDivElement>,
	reportType: string,
) {
	// 모든 데이터를 숫자로 변환
	reportData = reportData.map((v) => Number(v));
	// 신체활동시간 및 수면시간은 분->시간
	if (reportType !== 'walk')
		reportData = reportData.map((v) => {
			if (v !== -1) return Number((v / 60).toFixed(2));
			else return v;
		});
	console.log(reportData);
	// 제일 긴 시간 찾기
	let deepCopy = [...reportData];
	deepCopy.sort((a: number, b: number) => b - a);
	// 올림
	let largest = deepCopy[0] > 0 ? Math.ceil(deepCopy[0]) : 1;
	// 일일 걸음 수 리포트는 5000 단위로 계산
	if (reportType === 'walk') largest = Math.ceil(largest / 5000) * 5000;

	// graph_y innerHTML 생성
	let graphY = ['<div>0</div>'];
	// 일일 걸음 수 리포트
	if (reportType === 'walk') {
		Array(largest / 5000)
			.fill(0)
			.map((v, i) => {
				graphY.push(['<div>', `${(i + 1) * 5000}`, '</div>'].join(''));
			});
	} else {
		Array(largest)
			.fill(0)
			.map((v, i) => {
				graphY.push(['<div>', `${i + 1}`, '</div>'].join(''));
			});
	}
	// 그래프 축약
	if (graphY.length > 10) {
		const shorten = [
			...graphY.slice(0, 1),
			'<div>≈</div>',
			`<div>${largest / 2}</div>`,
			'<div>≈</div>',
			...graphY.slice(-1),
		];
		graphY = [...shorten];
	}
	targetY.current.innerHTML = graphY.reverse().join('');

	// graph_chart innerHTML 생성
	let graphChart: string[] = [];
	reportData.map((dayReport, i) => {
		const barHeight = (Math.max(dayReport, 0) / largest) * 9.3;
		let value;
		if (reportType === 'exercise') value = dayReport === -1 ? 'X' : formatHours(dayReport);
		if (reportType === 'sleep') value = dayReport === 0 ? 'X' : formatHours(dayReport);
		if (reportType === 'walk') value = dayReport === 0 ? 'X' : dayReport;
		const valueHtml = ['<div id="graph_value">', `${value}`, '</div>'];
		const barHtml = [`<div id="graph_bar" style="height:${barHeight}rem"></div>`];
		const xHtml = [`<div id="graph_x">${i + 1}일차</div>`];
		graphChart.push(['<div>', ...valueHtml, ...barHtml, ...xHtml, '</div>'].join(''));
	});
	console.log(graphChart);
	targetGraph.current.innerHTML = graphChart.join('');
}
