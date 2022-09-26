import NavyTop from '../asset/page2_남색상단.png';
import GrayBottom from '../asset/page2_회색하단.png';
import Pin from '../asset/page3_pin.svg';
import { useEffect, useRef } from 'react';
import renderGuage from '../util/renderGauge';

interface Props {
	profileData: { name: string; gender: string; school: string; date: string };
	exerciseReport: { day: number; size: number }[];
	sleepReport: { day: number; size: number }[];
	walkReport: { day: number; size: number }[];
}

function Page3({ profileData, exerciseReport, sleepReport, walkReport }: Props) {
	const { gender } = profileData;
	const exerciseGauge = useRef() as React.MutableRefObject<HTMLImageElement>;
	const exerciseState = useRef() as React.MutableRefObject<HTMLTableCellElement>;
	const sleepGauge = useRef() as React.MutableRefObject<HTMLImageElement>;
	const sleepState = useRef() as React.MutableRefObject<HTMLTableCellElement>;
	const walkGauge = useRef() as React.MutableRefObject<HTMLImageElement>;
	const walkState = useRef() as React.MutableRefObject<HTMLTableCellElement>;

	useEffect(() => {
		renderGuage(exerciseReport, exerciseGauge, exerciseState, 'exercise');
		renderGuage(sleepReport, sleepGauge, sleepState, 'sleep');
		renderGuage(walkReport, walkGauge, walkState, 'walk', gender);
	}, [exerciseReport, sleepReport, walkReport, gender]);
	return (
		<div className='page_container page3'>
			{/* <!-- **************** 배경 **************** --> */}
			<div id='background'>
				<img className='width100 absolute page2_navy_bg' src={NavyTop} alt='남색상단' />
				<img className='width100 absolute page2_gray_bg' src={GrayBottom} alt='회색하단' />
			</div>
			{/* <!-- **************** 내용 **************** --> */}
			<div id='content' className='page3_content'>
				<h2>7일 종합 리포트</h2>
				<table>
					<tr>
						<th>7일 평균</th>
						<td id='chart_exercise'>
							<div className='chart'>
								<div className='chart_bar'></div>
								<div className='chart_hidden'></div>
							</div>
							<div className='chart_pin'>
								<img src={Pin} alt='눈금' ref={exerciseGauge} />
							</div>
						</td>
						<td id='chart_sleep'>
							<div className='chart'>
								<div className='chart_bar'></div>
								<div className='chart_hidden'></div>
							</div>
							<div className='chart_pin'>
								<img src={Pin} alt='눈금' ref={sleepGauge} />
							</div>
						</td>
						<td id='chart_walk'>
							<div className='chart'>
								<div className='chart_bar'></div>
								<div className='chart_hidden'></div>
							</div>
							<div className='chart_pin'>
								<img src={Pin} alt='눈금' ref={walkGauge} />
							</div>
							<div className='state'>
								<div className='under'></div>
								<div>미충족</div>
								<div className='exact'></div>
								<div>충족</div>
							</div>
						</td>
					</tr>
					<tr>
						<th></th>
						<td>
							중·고강도
							<br />
							신체활동시간
						</td>
						<td>수면시간</td>
						<td>걸음 수</td>
					</tr>
					<tr>
						<th>
							충족
							<br />
							여부
						</th>
						<td id='state_exercise' ref={exerciseState}>
							%충족/미충족%
						</td>
						<td id='state_sleep' ref={sleepState}>
							%충족/미충족%
						</td>
						<td id='state_walk' ref={walkState}>
							%충족/미충족%
						</td>
					</tr>
					<tr>
						<th>기준</th>
						<td>
							<p>
								WHO 권장
								<br />
								중·고강도 신체활동시간:
								<br />
								1일 평균 60분
							</p>
							<p>
								2020 WHO
								<br />
								(Guidelines on physical activity)
							</p>
						</td>
						<td>
							<p>
								미국 국립수면재단 권장 취학아동 (6-13세)
								<br />
								적정 수면시간: 9-11시간
							</p>
							<p>미국 국립수면재단 (National Sleep Foundation)</p>
						</td>
						<td>
							<p>
								미국 페닝턴
								<br />
								바이오메디컬
								<br />
								리서치센터 제시
								<br />만 6-11세 걸음 기준:
								<br />
								남아 12,000걸음,
								<br />
								여아 10,000걸음
							</p>
							<p>Pennington Biomedical Research Center - Walking Behavior Laboratory</p>
						</td>
					</tr>
				</table>
				<div className='report_caution'>
					※
					<span
						className='underline bold500'
						style={{ display: 'inline-block', marginBottom: '0.3rem' }}>
						리포트 확인 시 주의사항
					</span>
					<br />
					&emsp;본 연구를 통해 제공되는 결과값은 Fitbit 기기를 통하여 수집된
					<br />
					&emsp;데이터를 기반으로 제공되며 Fitbit 서비스를 통하여 수집, 제시된 데이터의 정확도는
					의료장치
					<br />
					&emsp;또는 과학 측정 장치 수준의 정확도와 일치하도록 의도된 것은 아닙니다. 본 리포트에
					제시된
					<br />
					&emsp;결과는 의료목적의 진단 기준으로 활용될 수 없으며 보다 정확한 진단과 상담을 원하시면
					<br />
					&emsp;관련 전문기관을 방문하여 상담 받으시는 것을 추천 드립니다.
				</div>
			</div>
		</div>
	);
}

export default Page3;
