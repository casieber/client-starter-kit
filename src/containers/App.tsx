import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

const App = () => (
	<>
		<Header />
		<div
			style={{
				flex: 1,
				textAlign: 'center',
				padding: '28px',
				fontSize: '1.4rem',
			}}
		>
			Edit src/containers/App.tsx to get started
		</div>
		<Footer />
	</>
);

export default App;
