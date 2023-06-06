import { Avatar, Grid, Paper,Box } from "@mui/material";



function Comment({comment}) {
    return(
        <Paper elevation={5} sx={{ width: '600px', display: 'flex', justifyContent: 'center', padding: '20px', mt:'100px' }}>
            <Grid container>
                <Grid xs={1}>
                      ++
                </Grid>
                <Grid xs={11}>
                    <Box sx={{mb: '3px'}}>
                        <Avatar/>
                    </Box>
                    <Box>
                 {comment} 
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Comment;