import React, { Component } from 'react';
import './sign-in.css';
import { Link } from 'react-router-dom'

const borderColor = {
    color: '#ea6f5a',
    borderBottom: '2px solid #ea6f5a',
    fontSize: '22px'
};

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signType: this.props.signType
        };
    }

    render() {
        return (
            <div className='sign_header'>
                <Link to="/signInUp/1" className='font16' style={Number(this.state.signType) === 1 ? borderColor : null}>登录</Link>
                <div className='font27'>&middot;</div>
                <Link to="/signInUp/2" className='font16' style={Number(this.state.signType) === 2 ? borderColor : null}>注册</Link>
            </div>
        )
    }
}

export default SignIn;