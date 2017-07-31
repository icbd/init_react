import React from "react";
import LocalStore from "../util/localStore";
import {USER_INFO} from "../constants/localStoreKey";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as userInfoActionsBindToReact from '../actions/userinfo.js';
import Greeting from "../components/Greeting";


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false,
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone
                        ? this.props.children
                        : <Greeting/>
                }
            </div>
        );
    }

    componentDidMount() {
        let userInfo = LocalStore.getItem(USER_INFO);

        this.props.userInfoActions.update({
            userInfo,
        });


        setTimeout(() => {
            this.setState({
                initDone: true,
            });
        }, 2990);
    }
}

/* ---------- Redux bind React ---------- */
function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsBindToReact, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;