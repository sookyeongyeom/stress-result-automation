import styled from 'styled-components';
import React from 'react';

interface Iprops {
	onPrint: () => void;
}

function UserInterface({ onPrint }: Iprops) {
	return (
		<InterfaceWrapper>
			<FileWrapper>
				<input type='file' />
			</FileWrapper>
			<Table>
				<tr>
					<th>이름</th>
					<th>성별</th>
					<th>학교</th>
					<th>실시기간</th>
					<th>프린트</th>
				</tr>
				<tr>
					<td>염파이</td>
					<td>여</td>
					<td>연세초등</td>
					<td>뉸누냔나</td>
					<td>
						<button onClick={onPrint}>PRINT</button>
					</td>
				</tr>
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
