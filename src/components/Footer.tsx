import React from 'react';

import * as colors from 'constants/colors';

const style: React.CSSProperties = {
	backgroundColor: colors.TERTIARY,
	color: 'rgba(0, 0, 0, .6)',
	fontSize: '2.4rem',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	minHeight: '180px'
}

const Footer = () => <div style={style}>Footer</div>;

export default Footer;