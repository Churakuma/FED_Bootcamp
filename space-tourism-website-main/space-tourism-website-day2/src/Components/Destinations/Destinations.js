import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Destination from './Destination';
import Subtitle from '../Subtitle/Subtitle';

class Destinations extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            activeDestination: this.props.children[0].props.label,
        };
    };

    onClickDestinationItem = (destination) => {
        this.setState({ activeDestination: destination});
    };

    render() {
        const {
            onClickDestinationItem,
            props: {
                children,
            },
            state: {
                activeDestination,
            }
        } = this;

        return (
            <Subtitle pageNumber={'01'} subtitleText={'PICK YOUR DESTINATION'}></Subtitle>
            // TODO: https://www.digitalocean.com/community/tutorials/react-tabs-component
        )
    }

}