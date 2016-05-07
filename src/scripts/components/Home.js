import React, { Component } from 'react'

class Home extends Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const url = 'https://github.com/theaidem'
		setTimeout( `location='${url}';`, 2000 );
	}

	render() {
		return (
			<div className="ui active inverted dimmer">
				<div className="middle">
					<h2 className="ui aligned icon header">
						<div>
							<img className="ui small rounded image" src="https://avatars2.githubusercontent.com/u/3463974?v=3&s=460"/>
						</div>
						Max Kokorin
						<div className="sub header">@theaidem</div>
					</h2>
				</div>
			</div>
		)
	}
}

export default Home
