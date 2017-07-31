import React from "react";

import "./style.scss";

class Greeting extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="first-greeting">
                <div className="first-greeting-logo">
                    <img src="/assets/favicon.ico"/>
                </div>
            </div>
        );
    }
}

// /* ---------- Redux bind React ---------- */
// function mapStateToProps(state) {return {}}
// function mapDispatchToProps(dispatch) {return {}}
// export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
export default Greeting;