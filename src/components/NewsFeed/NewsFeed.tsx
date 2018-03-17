import * as React from 'react';
import { Card, CardHeader, CardText, CardActions, FlatButton } from 'material-ui';
import { INewsFeedProps, INewsFeed } from './newsFeedInterfaces';

const NewsFeed: React.StatelessComponent<INewsFeedProps> = (props) => {
    return (
        <div>
            {props.newsFeedList.map((newsItem: INewsFeed) => (
                <Card style={{
                    marginTop: '10px',
                }} >
                    <CardHeader
                        title={newsItem.headline}
                        subtitle={newsItem.author}
                    // avatar="images/jsa-128.jpg"
                    />
                    {/* <CardMedia
                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                    >
                        <img src="images/nature-600-337.jpg" alt="" />
                    </CardMedia> */}
                    {/* <CardTitle title="Card title" subtitle="Card subtitle" /> */}
                    <CardText >
                        {newsItem.story}
                    </CardText>
                    <CardActions>
                        <FlatButton label="View" />
                    </CardActions>
                </Card>
            ))}
        </div>
    );
};

export default NewsFeed;
