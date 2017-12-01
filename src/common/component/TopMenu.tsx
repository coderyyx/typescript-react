import * as React from 'react';
// import { Menu,Row ,Col} from 'antd';

interface top_Props {
  type : string;
  descp ?: boolean;
}

export class TopMenu extends React.Component<top_Props, {}>{
  constructor(props) {
    super(props)
  }
  render() {
    let {type,descp} = this.props;
    return (
      <h1>{type + descp}</h1>

    );
  }
}
