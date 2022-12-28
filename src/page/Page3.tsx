import NavyTop from '../asset/page2_남색상단.png';
import GrayBottom from '../asset/page2_회색하단.png';
import Pin from '../asset/page3_pin.svg';
import { useEffect, useRef } from 'react';
import renderGuage from '../util/renderGauge';
import { Page3PropsType } from '../model/PagePropsType';
import styled from 'styled-components';

function Page3({ parsedData, pressReady }: Page3PropsType) {
	const { gender } = parsedData;
	const exerciseAverage = useRef() as React.MutableRefObject<HTMLTableCellElement>;
	const exerciseGauge = useRef() as React.MutableRefObject<HTMLImageElement>;
	const exerciseState = useRef() as React.MutableRefObject<HTMLTableCellElement>;
	const sleepAverage = useRef() as React.MutableRefObject<HTMLTableCellElement>;
	const sleepGauge = useRef() as React.MutableRefObject<HTMLImageElement>;
	const sleepState = useRef() as React.MutableRefObject<HTMLTableCellElement>;
	const walkAverage = useRef() as React.MutableRefObject<HTMLTableCellElement>;
	const walkGauge = useRef() as React.MutableRefObject<HTMLImageElement>;
	const walkState = useRef() as React.MutableRefObject<HTMLTableCellElement>;

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

			// prettier-ignore
			renderGuage(exerciseData as number[], exerciseAverage, exerciseGauge, exerciseState, 'exercise');
			// prettier-ignore
			renderGuage(sleepData as number[], sleepAverage, sleepGauge, sleepState, 'sleep');
			// prettier-ignore
			renderGuage(walkData as number[], walkAverage, walkGauge, walkState, 'walk', gender as string);
			console.log('page3 완료');
			pressReady();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [parsedData]);

	return (
		<div className='page_container page3'>
			{/* <!-- **************** 배경 **************** --> */}
			<div id='background'>
				<img className='width100 absolute page2_navy_bg' src={NavyTop} alt='남색상단' />
				<img className='width100 absolute page2_gray_bg' src={GrayBottom} alt='회색하단' />
			</div>
			{/* <!-- **************** 내용 **************** --> */}
			<div id='content' className='page3_content'>
				<h2>종합 리포트</h2>
				<Guide>
					※ 스마트워치 미착용 등으로 데이터가 존재하지 않는 일자를 제외한 '실 참여일' 기준으로 평균
					수치와 충족 여부가 제공됩니다.
				</Guide>
				<table>
					<tbody>
						<tr>
							<th>참여일 평균</th>
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
								참여일
								<br />
								평균
							</th>
							<td id='state_exercise' ref={exerciseAverage}>
								%7일 평균시간%
							</td>
							<td id='state_sleep' ref={sleepAverage}>
								%7일 평균시간%
							</td>
							<td id='state_walk' ref={walkAverage}>
								%7일 평균시간%
							</td>
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
									세계보건기구 권장
									<br />
									중·고강도 신체활동<span style={{ color: 'rgb(244, 64, 64)' }}>*</span>시간:
									<br />
									<BoldNavy>1일 60분</BoldNavy>
								</p>
								<p>
									<Small>
										2020 세계보건기구(WHO)
										<br />
										Guidelines on physical activity
									</Small>
								</p>
							</td>
							<td>
								<p>
									미국 국립수면재단 권장 취학아동 (6-13세)
									<br />
									적정 수면시간:
									<br />
									<BoldNavy>1일 9-11시간</BoldNavy>
								</p>
								<p>
									<Small>
										미국 국립수면재단
										<br />
										(National Sleep Foundation)
									</Small>
								</p>
							</td>
							<td>
								<p>
									미국 페닝턴
									<br />
									바이오메디컬
									<br />
									리서치센터 제시
									<br />만 6-11세 적정 걸음 수:
									<br />
									<BoldNavy>
										1일 남아 12,000걸음
										<br />
										1일 여아 10,000걸음
									</BoldNavy>
								</p>
								<p>
									<Small>Pennington Biomedical Research Center - Walking Behavior Laboratory</Small>
								</p>
							</td>
						</tr>
					</tbody>
				</table>
				<div className='comment'>
					<span style={{ color: 'rgb(244, 64, 64)' }}>*</span>{' '}
					<span className='bold500'>중강도 신체활동</span> : 10분 정도 운동 지속 시 땀이 나며 호흡이
					짧아지는 수준, 대화는 할 수 있지만 노래는 부를 수 없을 정도의 신체활동 (예: 빨리 걷기,
					자전거타기)
					<br />
					<span style={{ color: 'rgb(244, 64, 64)' }}>*</span>{' '}
					<span className='bold500'>고강도 신체활동</span> : 짧은 시간 운동을 해도 호흡이 깊고
					빨라지며 땀이 나는 수준, 대화를 나누기 힘든 정도의 신체활동 (예: 달리기, 축구, 농구,
					줄넘기 등)
				</div>
				<div className='report_caution'>
					※
					<span
						className='underline bold500'
						style={{ display: 'inline-block', marginBottom: '0.1rem' }}>
						리포트 확인 시 주의사항
					</span>
					<div>
						본 연구를 통해 제공되는 결과값은 Fitbit 기기를 통하여 수집된 데이터를 기반으로
						제공됩니다.{' '}
						<BoldNavy>
							Fitbit 서비스를 통하여 수집, 제시된 데이터의 정확도는 의료장치 또는 과학 측정 장치
							수준의 정확도와 항상 일치하지 않을 수 있습니다.
						</BoldNavy>{' '}
						본 리포트에 제시된 결과는 의료목적의 진단 기준으로 활용될 수 없으며 보다 정확한 진단과
						상담을 원하시면 관련 전문 기관을 방문하여 상담 받으시는 것을 추천 드립니다.
					</div>
				</div>
			</div>
		</div>
	);
}

const BoldNavy = styled.span`
	font-weight: 600;
	color: #2f488a;
`;

const Small = styled.span`
	font-size: 9pt;
`;

const Guide = styled.p`
	font-size: 10.3pt;
	margin: 1.5mm 0;
`;

export default Page3;
