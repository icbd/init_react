import React from 'react';
import ReactDOM from 'react-dom';

import './static/css/common.less';

class Hello extends React.Component {
    render() {
        return (
            <h1>Init React template with Webpack 3.3.0</h1>
        );
    }
}

ReactDOM.render(
    <Hello/>,
    document.getElementById('root')
);