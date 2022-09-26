import NavyTop from '../asset/page2_남색상단.png';
import GrayBottom from '../asset/page2_회색하단.png';

function Page4() {
	return (
		<div className='page_container page4'>
			{/* <!-- **************** 배경 **************** --> */}
			<div id='background'>
				<img className='width100 absolute page2_navy_bg' src={NavyTop} alt='남색상단' />
				<img className='width100 absolute page2_gray_bg' src={GrayBottom} alt='회색하단' />
			</div>
			{/* <!-- **************** 배경 **************** --> */}
			<div id='content' className='page4_content'>
				<h2>계산 기준</h2>
				<h3>일일 리포트</h3>
				<ol>
					<li>
						일일 중·고강도 신체활동시간 리포트
						<p>
							fitbit_export data&ensp;→&ensp;활동&ensp;→&ensp;'상당히 활동적인 시간(분) + 매우
							활동적인 시간(분)'
							<br />
							→&ensp;'시간' 단위로 환산하여 일별 제시
						</p>
					</li>
					<li>
						일일 수면시간 리포트
						<p>
							fitbit_export data&ensp;→&ensp;수면&ensp;→&ensp;'수면시간(분)'&ensp;→&ensp;'시간'
							단위로 환산하여 일별 제시
						</p>
					</li>
					<li>
						일일 걸음 수 리포트
						<p>fitbit_export data&ensp;→&ensp;활동&ensp;→&ensp;'걸음 수' 일별 제시</p>
					</li>
				</ol>
				<h3>
					7월 종합 리포트 (7일 평균<span style={{ color: 'rgb(244, 64, 64)' }}>*</span>)
				</h3>
				<ol>
					<li>
						중·고강도 신체활동시간 충족 여부
						<p>
							60분 이상&ensp;=&ensp;충족
							<br />
							60분 미만&ensp;=&ensp;미충족
						</p>
					</li>
					<li>
						수면시간 충족 여부
						<p>
							9시간 이상&ensp;=&ensp;충족
							<br />
							9시간 미만&ensp;=&ensp;미충족
						</p>
					</li>
					<li>
						걸음 수 충족 여부
						<p>
							<span className='underline bold500'>남아</span>
							<br />
							12,000 걸음 이상&ensp;=&ensp;충족
							<br />
							12,000 걸음 미만&ensp;=&ensp;미충족
							<br />
							<span className='underline bold500' style={{ display: 'block', marginTop: '0.5rem' }}>
								여아
								<br />
							</span>
							10,000 걸음 이상&ensp;=&ensp;충족
							<br />
							10,000 걸음 미만&ensp;=&ensp;미충족
							<br />
						</p>
					</li>
				</ol>
			</div>
		</div>
	);
}

export default Page4;
