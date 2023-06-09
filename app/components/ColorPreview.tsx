import { FC } from 'react';
import { styled } from '../../src/stitches';
import { colord } from 'colord';
import { getCSSVarName } from '@/app/helpers';

interface Props {
	value: string;
	token: string;
}

const Root = styled('div', {
	display: 'flex',
	alignItems: 'center',
	gap: '16px',
});

export const ColorPreview: FC<Props> = ({ value, token }) => {
	return (
		<Root>
			<div
				style={{
					width: '32px',
					height: '32px',
					backgroundColor: value,
				}}
			/>
			<div>{token}</div>
			<div>{value}</div>
			<div>{colord(value).toHex()}</div>
			<div>{getCSSVarName(token, 'colors')}</div>
		</Root>
	);
};
