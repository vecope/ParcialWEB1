/* Created by Camilo on 21/09/17. */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class History extends Component {

    constructor(props) {
        super(props);
    }

    renderHistory() {

        var res = "Names typed: ";
        this.props.history.map((h, i) => {
            res += (h + ", ");
        })
        return <div className="history">{res}</div>;
    }

    render() {
        if (true) {
            return (<div>
                {this.renderHistory()}
            </div>)
        }
    }
}


// Follower.propTypes = {
//     follower: PropTypes.object.isRequired
// };

export default History;/**
 * Created by Camilo on 22/09/17.
 */
