import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    title: PropTypes.string,
};


class Footer extends Component {
    render() {
        return (
            <div>
                <h3>I am a footer</h3>
            </div>
        );
    }
}


Footer.propTypes = propTypes;


export default Footer;
