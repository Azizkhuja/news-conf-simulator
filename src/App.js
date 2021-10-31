import React, {useState} from 'react'
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Prompts from './components/Prompts';

let items = [
  {
      id: 1,
      question: "Everything is set, the speakers have arrived and ready. And, ta-da, the clock shows that it is 15:00. A few journalists are talking to each other at the entrance and haven‘t taken their seats yet. What would you do?",
      image: "./1.png",
      option: [
          "Wait until they finish", 
          "Call them and ask them to be respectful", 
          "Just start the conference without any comments to those who haven‘t joined yet"
      ],
      result: [
          "The journalists who were already sitting didn‘t understand what everybody was waiting for. They were sorry for their time waiting for their unethical colleagues. The bank‘s board members and your management was angry, because you were not handling the situations, or, to be precise, the journalists.",
          "Journalists hate when someone preaches them. Not only latecomers, but the audience in general didn‘t like your bossy attitude. Some instagrammed the stories about this moment with #bossisinthehouse. However, you were able to please your management who are on the same page with you regarding 'showing journalists‘ place'.",
          "As you open the event, everybody took seats and started listening to the speeches. Here you found the balance and won in all departments."  
      ]
  },
  {
      id: 2,
      question: "The speakers started well, but a member of the bank‘s board of governors, who you weren‘t able to rehearse with, started reading out a written speech from the paper... What would you do?" ,
      image: "./2.png",
      option: [
          "Interrupt and suggest him/her to cut the long story short", 
          "Do nothing and wait until s/he finishes", 
          "Let him or her finish and comment on why the board member had to have a longer and detailed speech, mentioning that XB makes sure that media understand the vectors of its development"
      ],
      result: [
          "Though the top banana you cut in gave you an angry look, you saved the event. Now journalists know that you called them to communicate with them openly and friendly and Xazina Bank is not one of the old school 'lecture-giving' organizations.",
          "Boring! The audience got bored, and couldn‘t wait when the speaker concludes. A blogger running a Telegram channel texted 'Boring lecture from a senior banker who grew up in Communist Party plenia",
          "There was a whole bunch of positive information announced by the board member, and the journalists were forced (rather than encouraged) to hear it. You tried to mitigate the situation, and this was well recognized by your management."   
      ]
  },
  {
      id: 3,
      question: "As the Q&A opens, a hack of a very critical news agency and a radio journalist raise their hands. What would you do?",
      image: "./3.png",
      option: [
          "Let the radio correspondent speak, ignoring the critical journalist", 
          "Let the critical journalist ask a question and let the board member answer it", 
          "Let the critical journalist ask a question and volunteer to answer it yourself"
      ],
      result: [
          "The radio journalist asked a question of your long-term goals for their futurist radio show. The speakers took the chance to show off with their ambitious goals for the long run.",
          "The critical journalist asked a question about why you didn‘t attract the investment from outside, from some other investors. 'Are you investing in the new services at the clients‘ cost?' he put the question. When the board member answered, he blamed the journalist for not knowing the financial market, and called everybody to be more ethical, professional, and help promote the bank, but not discredit it.",
          "The critical journalist asked a question about why you didn‘t attract the investment from outside, from some other investors. 'Are you investing in the new services at the clients‘ cost?' he put the question. Answering the question, you started with a comment 'It‘s a good question'. You mentioned that the public, the customers might be very concerned about this topic, and gave a couple of examples why the investment from inside is better than foreign debts.  " 
      ]
  },
  {
      id: 4,
      question: "A blogger from Namangan asks a question: 'Why are managers of XB‘s regional branches are lending money only if you bribe them with the 10 percent of the loan sum?' What would you do?",
      image: "./4.png",
      option: [
          "Say: 'I‘m sorry. We are here to discuss our new services, we do not comment on that'", 
          "Say: 'One of the reasons why we are launching the innovative services today is to make our work transparent and avoid corruption. Now anyone can get loans online without visting our branches or talking to loans officers. If you come up to me after the event and report the corruption cases at particular branches, we will investigate it. Thank you.'", 
          "Claim that it is impossible that XB‘s any branch is corrupt. You accuse the blogger to be a gossip medium that spreads the fake news and call them for being more ethical and professional"
      ],
      result: [
          "Journalists are disappointed, they are not happy that you are taking their time because of your promotions, not really answering their questions. In addition, when you say that, they think that you are avoiding the question, because the bribery is ubiqituous in the XB's system. The only people who liked your comment were your management who paid for the coffee break with the intention of getting positive media coverage about the new services only",
          "Well done! That was a good bridge. Not only that you showed the commitment of XB for more transparent and better quality service, but you also made journalists feel respected asking them to come up to you personally with the problem cases of their readers. The burden of your promise for the investigation is not comfortable for your management, but they liked the way you presented the new services as the solution for corruption!",
          "The journalists have been observing the situation in the country with all the commercial banks and know that corruption is not exceptional, especially in the regions. Direct denial made them frustrated, and increased the doubt about that you and the bank management that are present in the evet are part of the bribery system. Minus to the mood of media and the image of XB! 'All good, those journalists are paid to criticize us' cheered you up, the bank's vice president."
      ]
  },
  {
      id: 5,
      question: "Journalists started asking different questions: <i>'Why are the loan interest rates are so high? What are the eligibility requirements for mortgage? Why are the limits for cashing out money from the bank cards?'</i> What would you do?",
      image: "./4.png",
      option: [
          "Tell journalists not to ask general questions, but the ones that are relevant to today‘s presentation only", 
          "Announce that you will get a couple of last questions, telling them that they can ask additional questions during the coffee break", 
          "Tell the journalists that they can find answers to their questions on the company website, mentioning that this event is for discussions over the new services only"
      ],
      result: [
          "Despite this fully corresponds to the instructions of your leadership, the consultants you hired for public relations were right: journalists hate lectures and preaching. Some already started twitting that XB is avoiding uncomfortable questions because the bank is not doing well. Some started leaving your event, what is more, with negative impressions.",
          "Journalists are happy that you are keeping the time, and your readiness to continue the conversation with the speakers during the coffee break is worth appreciation. This made your colleagues and management uncomfortable, but generally all went right.",
          "Company website?! Is this the reason why you called journalists? To refer them to the website? You were lucky that journalists treated this request nuetrally. Meanwhile, the vice president of the bank who allocated thousands of dollars for the company website liked this 'shameless plug'."
      ]
  }
]



function App() {
  
  return (
    <div className="container">
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
          <Grid container direction="column" alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <Prompts items={items} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
