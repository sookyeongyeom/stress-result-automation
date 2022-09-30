import styled from 'styled-components';
import React from 'react';
import * as XLSX from 'xlsx';
import { useState } from 'react';
import UserInterfacePropsType from '../model/UserInterfacePropsType';
import RawExcelData from '../model/RawExcelData';

function UserInterface({ onPrint }: UserInterfacePropsType) {
	const [excelData, setExcelData] = useState('');
	function readExcel(event: React.ChangeEvent<HTMLInputElement>) {
		let input = event.currentTarget as HTMLInputElement;
		let reader = new FileReader();

		reader.onload = function () {
			let data = reader.result;
			let workBook = XLSX.read(data, { type: 'binary' });
			workBook.SheetNames.forEach((sheetName) => {
				console.log('SheetName: ' + sheetName);
				let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
				console.log(JSON.stringify(rows));
				setExcelData(JSON.stringify(rows));
			});
		};
		if (input.files !== null) reader.readAsBinaryString(input.files[0]);
	}

	return (
		<InterfaceWrapper>
			<FileWrapper>
				<input type='file' onChange={(e) => readExcel(e)} />
			</FileWrapper>
			<Table>
				<tbody>
					<tr>
						<th>이름</th>
						<th>성별</th>
						<th>학교</th>
						<th>시작일</th>
						<th>종료일</th>
						<th>프린트</th>
					</tr>
					{excelData.length !== 0
						? JSON.parse(excelData).map((v: RawExcelData, i: number) => (
								<tr key={i}>
									<td>{v.name}</td>
									<td>{v.gender}</td>
									<td>{v.school}</td>
									<td>{v.startDate}</td>
									<td>{v.endDate}</td>
									<td>
										{excelData.length !== 0 ? (
											<button onClick={() => onPrint(JSON.stringify(JSON.parse(excelData)[i]))}>
												PRINT
											</button>
										) : null}
									</td>
								</tr>
						  ))
						: null}
				</tbody>
			</Table>
		</InterfaceWrapper>
	);
}

const InterfaceWrapper = styled.div`
	width: 50%;
	margin: 1rem auto;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	& {
		div,
		table {
			padding: 1rem;
			border-radius: 8px;
		}
	}
`;

const FileWrapper = styled.div`
	border: 1px solid gray;
`;

const Table = styled.table`
	border: 1px solid gray;
	text-align: center;
`;

export default UserInterface;
