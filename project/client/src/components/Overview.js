//we're gonna send axios request to the server here
import React, { Component } from 'react'
import axios from 'axios'
import { Form, Card } from 'react-bootstrap'
import stockPic from '../media/twitter-no-profile.jpg'

export default class Overview extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
		data: '',
		result: '',
	  }
	}

	componentDidMount = async() => {
		const request = await axios.get('http://localhost:5000/users')
		this.setState({data: request.data.data})
	}

	searchByRegion = (e) => {
		e.preventDefault()
		let searched = e.target.value
		// eslint-disable-next-line
		let result = this.state.data.filter((obj) => {
			if(searched === ''){
				return obj
			}else if(obj.region.toLowerCase().startsWith(searched.toLowerCase())){
				return obj
			}
		})
		this.setState({result})
	}

	render() {
		return (
			<>
				<h3 style={{textAlign: 'center'}}>Lets see some card data</h3>
			<div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '2rem'}}>
				{this.state.data !== '' && this.state.data.map(obj=> <Card style={{ width: '18rem' }}>
				<Card.Img style={{height: '60px', width: '60px', marginLeft: '14rem'}} variant="top" src={stockPic} />
				<Card.Body>
					<Card.Title>{obj.userName}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{obj.email}<br/>{obj.region}</Card.Subtitle>
					<Card.Text>{obj.bio}</Card.Text>
				</Card.Body>
			</Card>)}
			</div>

			<div>
					<h3>Total Number of Users: {this.state.data.length}</h3> 
					<ul>
						{this.state.data !== '' && this.state.data.map(obj=>{return <li>{obj.email}</li>})}
					</ul>
				</div>
				<div>
					<Form>
						<Form.Group className="mb-3" controlId="searchByRegion">
							<Form.Label>Search by Region</Form.Label>
							<Form.Control onChange={this.searchByRegion} type="text" placeholder="Region..." />
						</Form.Group>
					</Form>
					<ul>
						{this.state.result !== '' && this.state.result.map((obj)=> {return <li>Username: {obj.userName} Region: {obj.region}</li>})}
					</ul>
				</div>
			</>
		)
	}
}

