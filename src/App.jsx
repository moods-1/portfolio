import './App.scss';
import { Home, About, Projects, Header } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { Mixpanel } from './components/Mixpanel';

function App() {
	Mixpanel.track('Portfolio app accessed.', {
		action: 'Portfolio app accessed.',
	});
	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<div className='App-content'>
					<Router>
						<Header />
						<Switch>
							<Route path={['/', '/home']} exact component={Home} />
							<Route path='/about' component={About} />
							<Route path='/projects' component={Projects} />
						</Switch>
						{/* <Footer /> */}
					</Router>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
