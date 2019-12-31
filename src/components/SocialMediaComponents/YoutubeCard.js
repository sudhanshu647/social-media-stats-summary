import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import YoutubeUserForm from '../SocialMediaForms/YoutubeUserForm';
import '../../styles/cards.css';
import YTlogo from '../../assets/images/YTlogo.jpg';



const InstagramCard = (props) => {
    // console.log("YTcard props", props);
    return (
        <Card className="cardContainer">
            {props.YTchannel && <Card.Img variant="top" src={YTlogo} />}
            <Card.Body>
                <Card.Title className="cardTitle">Youtube Info:</Card.Title>
                <YoutubeUserForm getYoutubeChannel={props.getYoutubeChannel} />
                {props.YTchannel &&
                    <ListGroup>
                        <ListGroup.Item>
                            <b>Channel ID:</b> {props.YTchannel}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b>Total Views:</b> {props.YTtotalViews}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b>Subscribers:</b> {props.YTsubscribers}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b>Videos:</b> {props.YTtotalVideos}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a href={`https://youtube.com/channel/${props.YTchannel}`} target="_blank" rel="noopener noreferrer">Go to Channel</a>
                        </ListGroup.Item>
                    </ListGroup>
                }
            </Card.Body>
        </Card>
    );
}

export default InstagramCard;
