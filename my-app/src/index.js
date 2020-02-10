import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Button from '@material-ui/core/Button'
import Users from './components/Users'



class SubmitBtn extends Component{
	render(){
		return(
			<input type="button" value="Submit"/>
			)
	}
}

class App extends Component{
	render(){
		return(
			<div className="App">
				<Users>Ariel</Users>
				<h1>Hello React!</h1>
				<SubmitBtn/>
				<Button variant="contained" color="primary">
					Material UI Button
				</Button>
			</div>
			)
	}
}


ReactDOM.render(<App/>, document.getElementById('root'))
