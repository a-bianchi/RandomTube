import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import * as CONSTANTS  from '../../constants/constants';

const propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};


class VideoCard extends Component {
    render() {
        const { title, image, description, id} = this.props;
        return (
            <div className='row'>
                <Card>
                    <CardBody className="text-center">
                        <CardTitle tag="h5">{title}</CardTitle>
                        <img width={image.width} height={image.height} src={image.url} alt={title} />
                        <CardText>{description}</CardText>
                        <a href={`${CONSTANTS.YOUTUBE_LINK}/${id}`} target="_blank">View</a>
                    </CardBody>
                </Card>
            </div>
        );
    }
}


VideoCard.propTypes = propTypes;


export default VideoCard;
