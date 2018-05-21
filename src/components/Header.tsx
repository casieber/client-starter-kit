import * as React from 'react';

import { PRIMARY } from 'constants/colors';

const style: React.CSSProperties = {
	backgroundColor: PRIMARY,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontSize: '3rem',
	minHeight: '120px'
};

const Header = () => <div style={style}>Header</div>;

export default Header;