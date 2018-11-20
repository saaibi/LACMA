import React, { Component } from 'react'
import { connect } from 'react-redux'

class HomePage extends Component {

    componentDidMount() {
		$('.sidenav').sidenav({
			edge: 'left',
        });
    }
    
    render() {
        return (
            <div>
                <h1>Logged in</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const connectedHome = connect(mapStateToProps)(HomePage);
export { connectedHome as HomePage };