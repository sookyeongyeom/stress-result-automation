import { MutableRefObject } from 'react';

export default function renderGraph(
	reportData: number[],
	targetY: MutableRefObject<HTMLDivElement>,
	targetGraph: MutableRefObject<HTMLDivElement>,
	isWalkReport: boolean,
) {
	// 제일 긴 시간 찾기
	let deepCopy = [...reportData];
	deepCopy.sort((a: number, b: number) => b - a);
	// 올림
	let largest = Math.ceil(deepCopy[0]);
	// 일일 걸음 수 리포트는 5000 단위로 계산
	if (isWalkReport) largest = Math.ceil(largest / 5000) * 5000;

	// graph_y innerHTML 생성
	let graphY = ['<div>0</div>'];
	// 일일 걸음 수 리포트
	if (isWalkReport) {
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
		const barHeight = (dayReport / largest) * 9.3;
		const valueHtml = ['<div id="graph_value">', `${dayReport}`, '</div>'];
		const barHtml = [`<div id="graph_bar" style="height:${barHeight}rem"></div>`];
		const xHtml = [`<div id="graph_x">${i + 1}일차</div>`];
		graphChart.push(['<div>', ...valueHtml, ...barHtml, ...xHtml, '</div>'].join(''));
	});
	console.log(graphChart);
	targetGraph.current.innerHTML = graphChart.join('');
}
