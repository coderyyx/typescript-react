import * as React from 'react';
import TopMenu from '../common/component/menu';

interface top_Props {
  type : string;
}

export default class Home extends React.Component<{}, {}>{
  constructor(props) {
    super(props)
  }
  render() {
    // let {type} = this.props;
    return (
      <div>
        <TopMenu/>
        {this.props.children}
      </div>

    );
  }
}
