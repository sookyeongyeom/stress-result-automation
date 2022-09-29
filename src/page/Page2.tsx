import NavyTop from '../asset/page2_남색상단.png';
import GrayBottom from '../asset/page2_회색하단.png';
import renderGraph from '../util/renderGraph';
import { useEffect, useRef } from 'react';

interface IProps {
	parsedData: IParsedData;
}

interface IParsedData {
	[keys: string]: string | number;
}

export default function Page2({ parsedData }: IProps) {
	const { name, gender, startDate, endDate } = parsedData;
	const exerciseY = useRef() as React.MutableRefObject<HTMLDivElement>;
	const exerciseGraph = useRef() as React.MutableRefObject<HTMLDivElement>;
	const sleepY = useRef() as React.MutableRefObject<HTMLDivElement>;
	const sleepGraph = useRef() as React.MutableRefObject<HTMLDivElement>;
	const walkY = useRef() as React.MutableRefObject<HTMLDivElement>;
	const walkGraph = useRef() as React.MutableRefObject<HTMLDivElement>;

	useEffect(() => {
		if (parsedData) {
			const exerciseData = [];
			const sleepData = [];
			const walkData = [];

			console.log(parsedData);

			for (const key in parsedData) {
				if (key.slice(0, 4) === 'exer') exerciseData.push(parsedData[key]);
				if (key.slice(0, 4) === 'slee') sleepData.push(parsedData[key]);
				if (key.slice(0, 4) === 'walk') walkData.push(parsedData[key]);
			}

			renderGraph(exerciseData as number[], exerciseY, exerciseGraph, false);
			renderGraph(sleepData as number[], sleepY, sleepGraph, false);
			renderGraph(walkData as number[], walkY, walkGraph, true);
			console.log('page2 완료');
		}
	}, [parsedData]);

	return (
		<div className='page_container page2'>
			<div id='background'>
				{/* <!-- **************** 배경 **************** --> */}
				<img className='width100 absolute page2_navy_bg' src={NavyTop} alt='남색상단' />
				<img className='width100 absolute page2_gray_bg' src={GrayBottom} alt='회색하단' />
			</div>
			{/* <!-- **************** 내용 **************** --> */}
			<div id='content' className='page2_content'>
				<table>
					<tr>
						<th>이름</th>
						<td id='profile_name'>{name}</td>
						<th>성별</th>
						<td id='profile_gender'>{gender}</td>
						<th>실시기간</th>
						<td id='profile_date'>{`${startDate} ~ ${endDate}`}</td>
					</tr>
				</table>
				{/* <!-- **************** 신체활동시간 리포트 **************** --> */}
				<div className='graph_caption'>
					• <span className='underline bold500'>중·고강도 신체활동 시간이란,</span> 하루 중 밤
					시간의 수면시간을 제외한 '상당히 활동적인 시간'과
					<br />
					&ensp;'매우 활동적인 시간'을 모두 합한 시간입니다.
				</div>
				<div id='graph' className='graph_exercise'>
					<div id='graph_header'>일일 중·고강도 신체활동시간 리포트</div>
					<div id='graph_main'>
						<div id='graph_y' ref={exerciseY}>
							<div>5</div>
						</div>
						<div id='graph_chart' ref={exerciseGraph}></div>
					</div>
				</div>
				{/* <!-- **************** 수면시간 리포트 **************** --> */}
				<div className='graph_caption'>
					• <span className='underline bold500'>수면시간</span>은 하루 중 밤 시간의 '전체
					수면시간'(얕은수면+깊은수면+렘수면)입니다.
				</div>
				<div id='graph' className='graph_sleep'>
					<div id='graph_header'>일일 수면시간 리포트</div>
					<div id='graph_main'>
						<div id='graph_y' ref={sleepY}>
							<div>5</div>
						</div>
						<div id='graph_chart' ref={sleepGraph}></div>
					</div>
				</div>
				{/* <!-- **************** 걸음수 리포트 **************** --> */}
				<div className='graph_caption'>
					• <span className='underline bold500'>걸음 수</span>는 하루 동안의 총 걸음 수(Step)를
					의미합니다.
				</div>
				<div id='graph' className='graph_walk'>
					<div id='graph_header'>일일 걸음 수 리포트</div>
					<div id='graph_main'>
						<div id='graph_y' ref={walkY}>
							<div>5</div>
						</div>
						<div id='graph_chart' ref={walkGraph}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
