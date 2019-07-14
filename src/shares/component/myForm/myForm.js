import React, { Component } from 'react';
import './myForm.css';

class MyForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form action="">
                    <div>
                        <input type="text" placeholder={'UserName'}/>
                    </div>
                    <div>
                        <input type="text" placeholder={'PassWord'}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default MyForm;