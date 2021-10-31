import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Prompts = ({items}) => {
    const [prompt, setPrompt] = useState(2);
    // const renderedItems = items.map(item => {
    //     return (
    //         <div key={item.id}>
    //             <Button variant="outlined">
    //                 {item.question}
    //             </Button>
    //         </div>
    //     )
    // })
    return (
        <Grid container direction="column" alignItems="center">
            <Typography variant="h2">News Simulation</Typography>
            <Button variant="outlined">{items[prompt].question}</Button>
            <div className="image-container">
                <img src={items[prompt].image} alt={items[prompt].id} />
            </div>
            <div className="options">
                <button>{items[prompt].option[0]}</button>
                <button>{items[prompt].option[1]}</button>
                <button>{items[prompt].option[2]}</button>
            </div>
        </Grid>
    )
}

export default Prompts
