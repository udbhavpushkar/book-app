import React, {useState} from 'react';
import {Container, Grid, IconButton, Paper, List} from "@material-ui/core";
import useStyles from "./style";
import Book from "./Book";
import {Apps} from "@material-ui/icons";
import ListIcon from "@material-ui/icons/List"
const Books = ({data}) => {
    const [isGrid, setIsGrid] = useState(true)
    const classes = useStyles()
    return(
        <Container>
            <IconButton color="primary" onClick={e=>setIsGrid(!isGrid)}>
                {isGrid?<ListIcon/>:<Apps/>}
            </IconButton>
            {isGrid?(
                    <Grid container className={classes.root} spacing={4}>
                        {data.map((b, i)=>(
                            <Book isGrid={isGrid} data={b} key={i}/>
                        ))}
                    </Grid>
                ):
                (
                    <Container>
                        <List>
                            {data.map((b, i)=>(
                                <Book isGrid={isGrid} data={b} key={i}/>
                            ))}
                        </List>
                    </Container>

                )}

        </Container>
    )
}

export default Books;