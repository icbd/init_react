import React from "react";

//import "./style.scss";

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>Home</div>
        );
    }
}

// /* ---------- Redux bind React ---------- */
// function mapStateToProps(state) {return {}}
// function mapDispatchToProps(dispatch) {return {}}
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;