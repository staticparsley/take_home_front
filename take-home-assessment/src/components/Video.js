import React from 'react';
import { Label, Card, Grid } from 'semantic-ui-react';
import Moment from 'react-moment';


const VideoInfo = (data) => {
    return (
        <Card>
            {console.log(data.data)}
            <Card.Content>
                <Card.Header>{data.data.videoName}</Card.Header>
                <Card.Meta>{data.data.brand}</Card.Meta>
                <Card.Description>
                    <Grid columns={2}>
                        <Grid.Column>
                            Published: <Moment>{data.data.publishDate}</Moment>
                        </Grid.Column>
                        <Grid.Column>
                            <Label>
                                Views
                                <Label.Detail>{data.data.viewCount}</Label.Detail>
                            </Label>
                        </Grid.Column>
                    </Grid>    
                </Card.Description>
            </Card.Content>
        </Card>
    );
}

export default VideoInfo;