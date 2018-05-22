import * as React from 'react';

import { PRIMARY } from 'constants/colors';

const style: React.CSSProperties = {
	alignItems: 'center',
	backgroundColor: PRIMARY,
	display: 'flex',
	fontSize: '3rem',
	justifyContent: 'center',
	minHeight: '120px',
};

const Header = () => <div style={style}>Header</div>;

export default Header;
