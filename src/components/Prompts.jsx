import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Prompts = ({items}) => {
    const [prompt, setPrompt] = useState(0);
    const nextQuestion = () => {
        setPrompt(prompt + 1);
    }
    const seeResults = () => {
        console.log("teet");
    }
    return (
        <Grid container direction="column" alignItems="center">
            <Typography variant="h2">News Simulation</Typography>
            <Button variant="outlined">{items[prompt].question}</Button>
            <div className="image-container">
                <img src={items[prompt].image} alt={items[prompt].id} />
            </div>
            {prompt == items.length -1 ? (
                <button onClick={seeResults}>See results</button>
            ) : (
                <div className="options">
                <Button variant="outlined" sx={{ m: 1 }} onClick={() => nextQuestion()}>{items[prompt].option[0]}</Button>
                <Button variant="outlined" sx={{ m: 1 }} onClick={() => nextQuestion()}>{items[prompt].option[1]}</Button>
                <Button variant="outlined" sx={{ m: 1 }} onClick={() => nextQuestion()}>{items[prompt].option[2]}</Button>
            </div>
            )}
            
        </Grid>
    )
}

export default Prompts
