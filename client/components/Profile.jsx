import React from 'react'
import request from 'superagent'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }
  }
 
  componentDidMount () {
    const userId = this.props.match.params.id
    request
    // needed to set the URL to have the variable
      .get(`/users/${userId}`)
      .then(res => {
        this.setState({
          name: res.body.user.name,
          email: res.body.user.email
        })
      })
  }

  render () {
    // const userId = Number(this.props.match.params.id)
    // let user = this.props.users.find(user => {
    //   return user.id === userId
    // })
    // user = user || {}
    return (
      <div>
        <h1> {this.state.name} </h1>
        <h3> {this.state.email} </h3>
      </div>
    )
  }
}

export default Profile
