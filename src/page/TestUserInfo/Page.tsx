import * as React from 'react';

import { Button } from 'antd';
import 'antd/dist/antd.css';
import { TopMenu } from '../../common/component/TopMenu'
interface page_props {
	name : string
}

export class Page extends React.Component<page_props, any>{
	constructor(props) {
		super(props);
		this.click=this.click.bind(this);
	}
	click(){
		alert('alert');
	}
	render() {
		let menu_props={
			type : 'yyx',
			descp : true
		}
		return (
			<div>
				<TopMenu {...menu_props}/>
				<Button type="primary" onClick={this.click}>{this.props.name}</Button>
			</div>
		)
	}
}

