import React, { Component } from 'react';
import './sign-in-up.css';
import logo from '../../images/logo.png';
import '../../config/index';
import {Link} from "react-router-dom";

const borderColor = {
    color: '#ea6f5a',
    borderBottom: '2px solid #ea6f5a',
    fontSize: '22px'
};

class SignInUp extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            signType: this.props.match.params.id
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const signType = nextProps.match.params.id;
        this.setState({
            signType
        },()=>{
            // this.fetchGoodsInfo();
        });
    }

    render() {
        return (
            <div className='sign_bg'>
                <div className='sign_logo'>
                    <Link to="/">
                        <img src={logo} alt="简书"/>
                    </Link>

                </div>
                <div className='sign_main'>
                    <div className='sign_header'>
                        <Link to="/signInUp/1" className='font16' style={Number(this.state.signType) === 1 ? borderColor : null}>登录</Link>
                        <div className='font27'>&middot;</div>
                        <Link to="/signInUp/2" className='font16' style={Number(this.state.signType) === 2 ? borderColor : null}>注册</Link>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount () {
        // this.setState({
        //     signType: this.props.match.params.id === 1 ? 2 : 1
        // })
        // console.log(this.props.match.url);
    }
}

export default SignInUp;