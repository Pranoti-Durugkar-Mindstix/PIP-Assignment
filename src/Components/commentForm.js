import { Box, FormControl, TextareaAutosize, Grid, Button, Paper, Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./header";
// import CommentList from './commentsList';

// import Comment from "./comment";

function Comments() {
    const [comment, setComment] = useState('');
    const [commentData, setCommentdata] = useState([]);
    // state = {
    //     comments:[],
    //     userName:"",
    //     userComment:"",
    //     time:""
    //   };

    // const handleChange = (e) => {
    //     setComment(e.target.value);
    //     // setCommentdata(...comment);
    // }

    const handleClick = (e) => {
        // const com = [...comment]
        setComment(e.target.value);
    }

    // useEffect(() => {
    //     setCommentdata(...comment, comment)
    // }, [comment])

    return(
        <><Header /><Paper elevation={6} sx={{ width: '600px', display: 'flex', justifyContent: 'center', mt: '600px', ml: '25%', padding: '30px' }}>
            <Grid container>
                <Grid xs={1}>
                    <Avatar sx={{ mr: '4px' }} />
                </Grid>
                <Grid xs={10}>
                    <FormControl>
                        <TextareaAutosize style={{ textAlign: 'left', borderColor: 'gray', width: '480px', display: 'flex', justifyContent: 'center' }}
                            hintText='Message Field'
                            maxLength={255}
                            // value={value}
                            placeholder='Add a comment'
                            // onChange={(e) => {
                            //     handleChange(e, 'comments', 'commentBox');
                            // } }
                            floatingLabelText='MultiLine and FloatingLabel'
                            minRows={5}
                            maxRows={7}>
                        </TextareaAutosize>
                    </FormControl>
                </Grid>
                <Grid xs={1}>
                    <Button
                        variant="contained" onClick={(e) => { handleClick(e); } }>
                        SEND
                    </Button>
                </Grid>
            </Grid>
        </Paper></>
    );
}

export default Comments;