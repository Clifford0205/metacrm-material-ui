import React, { useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Box from '@mui/material/Box';
import Button from '@/components/Button';

import { styled } from '@mui/material/styles';

import ColorModeContext from '@/contexts/ColorMode.context';
import isStyledPropsValid from '@/utils/isStyledPropsValid';
import { tokens } from '@/theme/basicColors';
import { ToastContainer, toast } from 'react-toastify';

const StyledSection = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})({
	borderBottom: '1px solid #e9e9e9',
});

const StyledColorArea = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})({
	display: 'flex',
	flexDirection: 'column',
	width: '10%',
	alignItems: 'center',
	margin: '0 1rem 1rem 0',

	'&:hover': {
		cursor: 'pointer',
	},

	'& .colorKey': {
		fontWeight: 'Bold',
	},

	'& .colorCode': {
		fontSize: '12px',
	},
});

const StyledColorBox = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme, backgroundColor }) => ({
	backgroundColor,
	width: '100px',
	height: '100px',
	borderRadius: '4px',
	marginBottom: '5px',
	boxShadow: '0 8px 16px 0 rgb(0 0 0 / 10%)',

	'&:hover': {
		boxShadow: '0 8px 16px 0 rgb(0 0 0 / 40%)',
	},
}));

const StyledExampleContainer = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})({
	display: 'flex',
	flexDirection: 'column',
});

const oneLevelColorList = ['black', 'white'];

function ColorsTemplate() {
	const { mode } = useContext(ColorModeContext);
	const colorGuide = tokens(mode);

	const handleCopied = (text, result) => {
		if (result) {
			toast.info(`Copied ${text}`);
		}
	};

	// keyName 是為了讓顏色前面有名字
	const renderObject = (targetObj) =>
		Object.entries(targetObj).map(([key, value]) => {
			if (typeof value === 'object') {
				return (
					<StyledSection key={key}>
						<h2>{key}</h2>
						<Box display={typeof Object.values(value)[0] === 'object' ? 'block' : 'flex'}>
							{renderObject(value)}
						</Box>
					</StyledSection>
				);
			}
			if (oneLevelColorList.includes(key)) {
				return (
					<StyledSection key={key}>
						<h2>{key}</h2>
						<CopyToClipboard text={value} onCopy={handleCopied}>
							<StyledColorArea>
								<StyledColorBox backgroundColor={value} />
								<div className='colorCode'>{value}</div>
							</StyledColorArea>
						</CopyToClipboard>
					</StyledSection>
				);
			}
			return (
				<CopyToClipboard key={key} text={value} onCopy={handleCopied}>
					<StyledColorArea>
						<StyledColorBox backgroundColor={value} />
						<div className='colorKey'>{key}</div>
						<div className='colorCode'>{value}</div>
					</StyledColorArea>
				</CopyToClipboard>
			);
		});

	return (
		<div>
			<h2>Colors</h2>
			<p>Click palette to copy the color code.</p>
			{renderObject(colorGuide)}
			<StyledExampleContainer>
				<h2>使用範例</h2>

				<Box
					width='500px'
					p={5}
					mb={3}
					bgcolor={(theme) => theme.customColors.pink[500]}
					color={(theme) => theme.customColors.white}
				>
					bgcolor={`{theme => theme.customColors.pink[500]}`}
					<br />
					color={`{theme => theme.customColors.white}`}
					<br />
					建議寫法
				</Box>

				<Box
					width='500px'
					p={5}
					mb={3}
					bgcolor={(theme) => theme.palette.primary.main}
					color={(theme) => theme.palette.neutral.main}
				>
					bgcolor={`{theme => theme.palette.primary.main}`}
					<br />
					color={`{theme => theme.palette.neutral.main}`}
				</Box>

				<Box width='500px' p={5} mb={3} sx={{ bgcolor: 'secondary.main', color: 'neutral.main' }}>
					sx={`{bgcolor: 'secondary.main, color: 'neutral.main''}`}
				</Box>

				<Box>
					<Button variant='contained' color='primary'>
						test
					</Button>
				</Box>
			</StyledExampleContainer>

			<ToastContainer
				position='top-center'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
}

export const colors = ColorsTemplate.bind({});

export default {
	title: 'Example/Colors/Colors',
};
