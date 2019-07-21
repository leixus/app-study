import React, { Component } from 'react';
import logo from '../../images/logo.png';
import '../../config/index';
import {Link} from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox, Divider } from 'antd';
import './sign-in-up.css';

const borderColor = {
    color: '#ea6f5a',
    borderBottom: '2px solid #ea6f5a',
    fontSize: '22px'
};

const isHidden = {
    display: 'none'
};

// 登录
class FormLoginClass extends React.Component{
    handleSubmitLogin = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmitLogin} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入手机号或者邮箱!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="手机号或者邮箱"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input.Password
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item style={{marginBottom: 0}}>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: false,
                    })(<Checkbox>记住我</Checkbox>)}
                    <span className="login-form-forgot">
                                    登录遇到问题？
                                </span>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

// 注册
class FormRegisterClass extends React.Component {
    handleSubmitRegister = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmitRegister} className="login-form">
                <Form.Item>
                    {getFieldDecorator('register_username', {
                        rules: [{ required: true, message: '请输入昵称!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)', verticalAlign: '-0.125em'}} />}
                            placeholder="你的昵称"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('register_phone', {
                        rules: [{ required: true, message: '请输入手机号!' }],
                    })(
                        <Input
                            prefix={<i className='iconfont icon-shouji' style={{ color: 'rgba(0,0,0,.25)', verticalAlign: '-0.09em' }}></i>}
                            placeholder="手机号"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('register_password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input.Password
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item style={{marginBottom: 0}}>
                    <Button type="primary" htmlType="submit" style={{border: 0, background: '#42c02e'}} className="login-form-button">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const FormLogin = Form.create({ name: 'login' })(FormLoginClass);
const FormRegister = Form.create({ name: 'register' })(FormRegisterClass);

class SignInUp extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            signType: this.props.match.params.id
        };
        sessionStorage.setItem('isShow', this.state.signType);
    }

    componentWillMount() {
        if (this.state.signType === '1') {
            document.title = "登录 - 简书";
        } else if (this.state.signType === '2') {
            document.title = "注册 - 简书";
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const signType = nextProps.match.params.id;
        this.setState({
            signType
        },()=>{
            // 回调方法
            if (this.state.signType === '1') {
                document.title = "登录 - 简书";
            } else if (this.state.signType === '2') {
                document.title = "注册 - 简书";
            }
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

                    <div className="formCenter">
                        {/*登录*/}
                        <div style={Number(this.state.signType) === 1 ? null : isHidden}>
                            <FormLogin></FormLogin>
                        </div>



                        {/*注册*/}
                        <div style={Number(this.state.signType) === 2 ? null : isHidden}>
                            <FormRegister></FormRegister>
                        </div>
                    </div>
                    <div style={{textAlign: 'center', fontSize: '12px', color: '#969696', 'marginTop': '10px'}}>
                        <span style={{display: this.state.signType === '1' ? 'none' : 'inline'}}>
                            点击 “注册” 即表示您同意并愿意遵守简书
                            <br/>
                            <span style={{color: '#3194d0'}}>
                                用户协议
                            </span>
                            <span> 和 </span>
                            <span style={{color: '#3194d0'}}>
                                隐私政策
                            </span>
                            。
                        </span>
                    </div>
                    <div className="width300">
                        <Divider style={{display: Number(this.state.signType) === 1 ? 'table' : 'none'}}>社交帐号登录</Divider>
                        <Divider style={{display: Number(this.state.signType) === 2 ? 'table' : 'none'}}>社交帐号直接注册</Divider>
                    </div>
                    <div className="formCenter">
                        <i className='iconfont icon-weibo1' style={{color: '#e05244', margin: '0 20px', fontSize: '28px', display: Number(this.state.signType) === 1 ? 'inline' : 'none'}}></i>
                        <i className='iconfont icon-weixin' style={{color: '#00bb29', margin: '0 20px', fontSize: '28px'}}></i>
                        <i className='iconfont icon-qq' style={{color: '#498ad5', margin: '0 20px', fontSize: '25px'}}></i>
                        {/*<i className='iconfont icon-douban' style={{color: '#00820f', margin: '7px 20px 0', fontSize: '24px', display: Number(this.state.signType) === 1 ? 'inline' : 'none'}}></i>*/}
                        <span style={{margin: '0 20px', fontSize: '19px', display: Number(this.state.signType) === 1 ? 'inline' : 'none'}}>其他</span>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {

    }

}

export default SignInUp;
