import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/forms.css';

const InstaUserForm = (props) => {
    // console.log("InstaUserForm props", props);
    return (
        <div>
            <form onSubmit={props.getYoutubeChannel}>
                <input type="text" name="YTchannelId" placeholder="Enter YT channel ID" className="inputBox" />
                <Button variant="primary" type="submit" className="submitBtn">Submit</Button>
            </form>
        </div>
    );
}

export default InstaUserForm;
