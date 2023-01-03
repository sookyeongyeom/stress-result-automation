export default function subtractOneDay(date: string) {
	try {
		const splited = date.split('-');
		splited[2] = (Number(date.split('-')[2]) - 1).toString().padStart(2, '0');
		return splited.join('-');
	} catch {
		return 'Invalid Date';
	}
}
