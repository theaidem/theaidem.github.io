import React, { Component } from 'react'

class Me extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="ui container">
				<div className="ui grid ">
					<div className="ten wide column">

						<div className="ui items">
						  <div className="item">
						    <div className="image">
						      <img src="https://avatars2.githubusercontent.com/u/3463974?v=3&s=460"/>
						    </div>
						    <div className="content">
						      <a className="header" href="/">Maxim Kokorin</a>
						      <div className="meta">
						        <span>Full-stack developer. Work experience – 8 years</span>
						      </div>
						      <div className="description">

										<h4>Skills / Instruments</h4>
										<div className="ui list">

										  <a className="item">
										    <i className="setting icon"></i>
										    <div className="content">
										      <div className="header">Backend</div>
										      <div className="description">
														Golang, JavaScript (ES6/7), Node.js, PHP, MySQL, Postgres, ElasticSearch, Apache Solr, Redis, RethinkDB, MongoDB,  Drupal 6/7,
													Yii/Laravel frameworks, Beego, Gin, Echo, Flask
													</div>
										    </div>
										  </a>

										  <a className="item">
										    <i className="puzzle icon"></i>
										    <div className="content">
										      <div className="header">Frontend</div>
										      <div className="description">React, Redux, Webpack, Browserify, Gulp, JQuery</div>
										    </div>
										  </a>

											<a className="item">
										    <i className="warning circle icon"></i>
										    <div className="content">
										      <div className="header">Other</div>
										      <div className="description">Linux (Debian based) administer, Nginx, Docker, Git
													Good knowledge REST/Realtime client-server communication, WebSockets, SSE, Rest API</div>
										    </div>
										  </a>

										</div>

										<h4>Project Experience</h4>
										<div className="ui list">

										  <a className="item">
										    <i className="asterisk icon"></i>
										    <div className="content">
										      <div className="header">BTCnano (NDA)</div>
										      <div className="description">
														<p>A cryptocurrency exchange service based in Japan.</p>
														<p>Developed trade terminal on WebSockets for bitcoin exchanger.
														Golang, Echo framework, WebSocket notifications flow
														MySQL, Redis, Docker</p>
													</div>
										    </div>
										  </a>

											<a className="item" href='https://github.com/theaidem/githubble'>
										    <i className="asterisk icon"></i>
										    <div className="content">
										      <div className="header">GitHubble.com</div>
										      <div className="description">
														<p>Like Hubble but for Github events. Open Source project.</p>
														<p>Golang, SSE Server,React, Redux, GitHub API.</p>
													</div>
										    </div>
										  </a>

											<a className="item">
										    <i className="asterisk icon"></i>
										    <div className="content">
										      <div className="header">Bizito (NDA)</div>
										      <div className="description">
														<p>
															Real estate portal with video review about almost properties. Provides post offers with attached video for real estate agencies and individuals.
														</p>
														<p>
															Fast search objects on multiple criteria, high performance.
														</p>
														<p>
															Full stack development. Golang, Beego framework, RethinkDB, ElasticSearch as search engine.
														</p>
													</div>
										    </div>
										  </a>

										</div>

						      </div>
						      <div className="extra">
						        Thank you!
						      </div>
						    </div>
						  </div>
						</div>

					</div>
				</div>
			</div>
		)
	}
}

export default Me
