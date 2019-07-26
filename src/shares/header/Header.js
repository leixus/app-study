import React, { Component } from 'react';
import './header.css';
import '../../font/iconfont.css';
import logo from '../../images/logo.png';
import beta from '../../images/beta.png';
import 'antd/dist/antd.css';
import { Icon } from 'antd';
import { Link } from 'react-router-dom'

const flex = {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

const flex2 = {
    display: 'flex',
    alignItems: 'center'
};

const header100 = {
    width: '150px'
};

const imgSize = {
    width: '57px',
    height: '25px'
};

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchAnimate: true,
        };
        this.onFocusWidth = this.onFocusWidth.bind(this);
        this.onBlurWidth = this.onBlurWidth.bind(this);
    }

    render() {
        return (
            <div className={'header_width'}>
                <div className='header_layout'>
                    <div className='logoHover'>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                    <div style={header100}></div>
                    <div style={flex}>
                        <div style={flex2}>
                            <div className='inlineBlock fontSize16' style={{'fontSize': '18px', 'fontWeight': 'bold'}}>
                                <i className='icon iconfont icon-zhinanzhenfaxiandaohangdizhiweizhi'></i>
                                <span style={{'marginLeft': '5px'}}>首页</span>
                            </div>
                            <div className='inlineBlock fontWidth'>
                                <i className='icon iconfont icon-phone' style={{'fontSize': '18px', 'fontWeight': 'bold'}}></i>
                                <span style={{'marginLeft': '5px'}}>下载APP</span>
                            </div>
                            <div className='inlineBlock marginLeft30'>
                                <input
                                    placeholder="搜索"
                                    className={this.state.searchAnimate ? 'header-search' : 'header-search-animate'}
                                    onFocus={this.onFocusWidth}
                                    onBlur={this.onBlurWidth}
                                />
                                <Icon className='search-icon' type="search" />
                            </div>
                        </div>
                        <div style={flex2}>
                            <div className='font18'>
                                Aa
                            </div>
                            <div className='width60'>
                                <img src={beta} alt="beta" style={imgSize}/>
                            </div>
                            <div className='login'>
                                <Link to="/signInUp/1" style={{color: '#969696'}}>登录</Link>
                            </div>
                            <div className='registered'>
                                <Link style={{color: '#ea6f5a'}} to="/signInUp/2 ">注册</Link>
                            </div>
                            <div className='write-essay '>
                                <span className='iconfont icon-yumaobi'></span>
                                <span> </span>
                                <span>写文章</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    onFocusWidth() {
        this.setState({
            searchAnimate: true
        })
    }

    onBlurWidth() {
        this.setState({
            searchAnimate: false
        })
    }
}

export default Header;
