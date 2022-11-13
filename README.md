# JournalTime
## Inspiration
I had actually planned on making a Journaling-type App for some time. After I finished learning a bit about blockchain development, I thought to myself, 'hey, this is an awesome opportunity'!
## What it does
This app allows users to create journal entries and store them privately, or share them anonymously with the world. If the user chooses to share them, then other users can click the button 'I've been there' to either show support or highlight a time when they felt or were in a situation as outlined by the shared entry. Only the writer will be able to see how many people click that button. I am hoping that by doing this the writer of that journal entry will feel strength knowing that they are not alone.
## How we built it
I used React for my frontend and Motoku for my backend. 
## Challenges we ran into
This was my first time working (without a tutorial) in Blockchain development/Internet Computer and Motoku. I learned that Motoku, probably because its designed to be more low-level than javaScript and I believe it is still under development, doesn't have much stack overflow or other internet question support yet. This made development much harder. Furthermore, the configuration of the actual project (with it's React Frontend and Motoku Backend) was quite the challenge and I think I spend over and hour just working through configuration bugs. 
## Accomplishments that we're proud of
I'm so proud I finally go to the level I'm developing in Blockchain. 
## What we learned
I think the four most important things I learned are as follows:
1. How to read documentation - as I mentioned before there is very little community discussion yet with Motoku, so I was forced to rely on the documentation, something I rarely have to do.
2. Motoku and JavaScript don't always play along when passing parameters or getting return values (this was also a source of major bugs). On the bright side, they do play along well with Text and String, so using those as much as possible helped quite a bit.
3. Its okay to take breaks during a hackathon.
4. You can call on specific objects by using their Principals.
## What's next for Journal Time
I want to make it so people can edit/delete posts and improve the UI. I also want to see if I can actual deploy it onto the Blockchain (this will take some money, but there are some IC grants I might be able to take advantage of) - as some features such as authentication can only be tested once it is deployed (to my knowledge). 
