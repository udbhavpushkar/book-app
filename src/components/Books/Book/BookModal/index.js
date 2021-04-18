import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    DialogActions,
    Button,
    CardMedia,
    Container, Link
} from "@material-ui/core";

import useStyles from "./style";

const BookModal = ({open, setOpen, data}) => {

    const classes = useStyles()

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {data.title}
                </DialogTitle>
                <DialogContent dividers>
                    <Container>
                        <CardMedia src={data.book_image} component="img" className={classes.image}/>
                        <Typography variant="subtitle2" gutterBottom color="textPrimary" component="span">
                            Author : &nbsp;
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom color="textSecondary" component="span">
                            {data.author}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{data.description}</Typography>
                    </Container>
                </DialogContent>
                <DialogActions>
                    <Typography>
                        <Link color="textSecondary" href={data.amazon_product_url} target="_blank">Buy Now</Link>
                    </Typography>
                    <Button autoFocus onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default BookModal;