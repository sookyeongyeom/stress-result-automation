export default function formatHours(fullHours: number): string {
	const hours = Number(parseInt(fullHours + ''));
	const mins = Number(((fullHours - hours) * 60).toFixed(0));
	let result = '';
	if (!hours) result = `${mins}분`;
	if (hours && !mins) result = `${hours}시간`;
	if (hours && mins) result = `${hours}시간 ${mins}분`;
	console.log(`${fullHours} → ${result}`);
	return result;
}
