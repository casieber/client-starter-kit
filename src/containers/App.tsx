import React from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';

const App = () => (
	<>
		<Header />
		<div
			style={{
				flex: 1,
				fontSize: '1.4rem',
				padding: '28px',
				textAlign: 'center',
			}}
		>
			Edit src/containers/App.tsx to get started
		</div>
		<Footer />
	</>
);

export default App;
