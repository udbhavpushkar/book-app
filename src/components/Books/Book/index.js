import React from 'react';
import useStyles from "./style";
import {Grid, Card, CardActions, CardActionArea, CardMedia, CardContent, Typography, Button, ListItem, ListItemAvatar, Avatar, ListItemText, Divider} from "@material-ui/core";

const Book = ({data, isGrid}) => {
    const classes = useStyles();
    if (isGrid){
        return (
            <Grid item xs={12} sm={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={data.title}
                            height="190"
                            image={data.book_image}
                            title={data.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {data.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {data.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    }else{
        return(
            <>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={data.title} src={data.book_image} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={data.title}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                </Typography>
                                {data.description}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </>
            )
    }
};

export default Book;