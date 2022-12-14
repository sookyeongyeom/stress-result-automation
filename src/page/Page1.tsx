import NavyDeco from '../asset/page1_남색무늬.png';
import NavyBG from '../asset/page1_남색배경.png';
import NavyBottom from '../asset/page1_남색하단.png';
import Logo from '../asset/page1_로고.png';
import GrayBG from '../asset/page1_회색배경.png';
import Border from '../asset/page1_border.png';
import PagePropsType from '../model/PagePropsType';
import subtractOneDay from '../util/subtractOneDay';

export default function Page1({ parsedData }: PagePropsType) {
	const { name, gender, school, startDate, endDate } = parsedData;
	return (
		<div className='page_container page1'>
			{/* <!-- **************** 배경 **************** --> */}
			<div id='background'>
				<img className='width100 absolute page1_gray_bg' src={GrayBG} alt='회색배경' />
				<img className='width100 absolute page1_navy_bg' src={NavyBG} alt='남색배경' />
				<img className='width100 absolute page1_navy_deco' src={NavyDeco} alt='남색무늬' />
				<img className='absolute page1_logo' src={Logo} alt='남색무늬' />
				<img className='width100 absolute page1_navy_bottom' src={NavyBottom} alt='남색하단' />
			</div>
			{/* <!-- **************** 내용 **************** --> */}
			<div className='content'>
				<div className='page1_header'>
					<img src={Border} alt='border' />
					<h1>
						ADDS Yonsei
						<br />
						<span style={{ letterSpacing: '0.2rem' }}>스마트워치 리포트</span>
					</h1>
				</div>
				<table className='page1_profile absolute'>
					<tbody>
						<tr>
							<th>이&emsp;&ensp;&nbsp;름</th>
							<td id='profile_name'>{name}</td>
						</tr>
						<tr>
							<th>학&emsp;&ensp;&nbsp;교</th>
							<td id='profile_school'>{school}</td>
						</tr>
						<tr>
							<th>성&emsp;&ensp;&nbsp;별</th>
							<td id='profile_gender'>{gender}</td>
						</tr>
						<tr>
							<th style={{ letterSpacing: '0.03rem', paddingLeft: '0.2rem' }}>실시기간</th>
							<td id='profile_date'>{`${startDate} ~ ${subtractOneDay(endDate)}`}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
