import './App.scss';
import { Home, About, Work, Header } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { Mixpanel } from './components/Mixpanel';

function App() {
	Mixpanel.track('Home page accessed', { action: 'Home page accessed.' });
	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<div className='App-content'>
					<Router>
						<Header />
						<Switch>
							<Route path={['/', '/home']} exact component={Home} />
							<Route path='/about' component={About} />
							<Route path='/work' component={Work} />
						</Switch>
						{/* <Footer /> */}
					</Router>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
