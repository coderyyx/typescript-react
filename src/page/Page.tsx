import * as React from 'react';

import { Button } from 'antd';

import {Tool} from '../config/tool';

interface page_props {
	name : string
}

export class Page extends React.Component<page_props, any>{
	constructor(props) {
		super(props);
		this.click=this.click.bind(this);
	}
	click(){
		Tool.alert('hello world!');
		// alert('alert');
	}
	render() {
		let menu_props={
			type : 'yyx',
			descp : true
		}
		let {name} = this.props;
		return (
			<div>
				<Button type="primary" onClick={this.click}>{name}</Button>
			</div>
		)
	}
}

