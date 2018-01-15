import * as React from 'react';
import { connect } from 'react-redux';
import {Button,Row,Col,Input} from 'antd';
import {Tool} from '../../config/tool';
import { MouseEvent } from 'react';
import * as indexActions from '../../redux/actions/index';

interface userInfo {
    name:string;
    password:string;
}
interface stateShape {
    submitData:userInfo
}

class Register extends React.Component<any,stateShape> {
    constructor(props, context) {
        super(props, context);
        this.state={
            submitData:{
                name:"",
                password:""
            }
        }
        Tool.bind(this,['submit','handleInputValue']);
    }
    submit(){
        let {data} = this.props.itemData;
        this.props.addItem(data);
    }
    handleInputValue(e:React.ChangeEvent<HTMLInputElement>,type:string){
        let value:string=e.target.value;
        let {submitData} = this.state;
        this.setState((prevState)=>{
            return {
                submitData:{
                    ...submitData,
                    [type]:value
                }
            }
        })
    }
    render() {
        console.log(this);
        let {name,password} = this.state.submitData;
        let {data} = this.props.itemData;
        return (
            <div>
                <Row>
                    <Col span={4}>用户名：</Col>
                    <Col span={7}>
                        <Input type="text" 
                                value={data}
                                onChange={(e)=>this.handleInputValue(e,'name')}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>密码：</Col>
                    <Col span={7}>
                        <Input 
                            type="password" 
                            value={password}
                            onChange={(e)=>this.handleInputValue(e,'password')}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={2}><Button type="primary">注册</Button></Col>
                    <Col span={2}><Button onClick={this.submit}>登录</Button></Col>
                </Row>
            </div>
        );
    }
}

// export default Register;
let actions = Tool.redux.filterAction(['addItem'],indexActions);

export default connect(state => { 
    let {itemData} = state;

    return {
        itemData
    }
},actions)(Register)
