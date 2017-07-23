import React from 'react';
import ReactDOM from 'react-dom';

import './static/css/common.scss';

class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>React(15.6.1) with Webpack(3.3.0)</h1>
                <h3>2017-07</h3>
            </div>
        );
    }
}

ReactDOM.render(
    <Hello/>,
    document.getElementById('root')
);