import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

function Report() {
	const profileData = {
		name: '김파이',
		school: '연세초등학교',
		gender: '여아',
		date: '2022.01.31 ~ 2022.09.20',
	};

	const exerciseReport = [
		{
			day: 1,
			size: 0,
		},
		{
			day: 2,
			size: 1.2,
		},
		{
			day: 3,
			size: 2,
		},
		{
			day: 4,
			size: 0.5,
		},
		{
			day: 5,
			size: 3.5,
		},
		{
			day: 6,
			size: 2,
		},
		{
			day: 7,
			size: 0.5,
		},
	];

	const sleepReport = [
		{
			day: 1,
			size: 9,
		},
		{
			day: 2,
			size: 6.75,
		},
		{
			day: 3,
			size: 7.35,
		},
		{
			day: 4,
			size: 6.65,
		},
		{
			day: 5,
			size: 7.7,
		},
		{
			day: 6,
			size: 6.53,
		},
		{
			day: 7,
			size: 6.51,
		},
	];

	const walkReport = [
		{
			day: 1,
			size: 10100,
		},
		{
			day: 2,
			size: 14700,
		},
		{
			day: 3,
			size: 6362,
		},
		{
			day: 4,
			size: 13043,
		},
		{
			day: 5,
			size: 12814,
		},
		{
			day: 6,
			size: 11394,
		},
		{
			day: 7,
			size: 7144,
		},
	];

	return (
		<>
			<Page1 profileData={profileData} />
			<Page2
				profileData={profileData}
				exerciseReport={exerciseReport}
				sleepReport={sleepReport}
				walkReport={walkReport}
			/>
			<Page3
				profileData={profileData}
				exerciseReport={exerciseReport}
				sleepReport={sleepReport}
				walkReport={walkReport}
			/>
			<Page4 />
		</>
	);
}

export default Report;
