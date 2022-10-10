---
title: 'The new face of accessible controllers'
date: '2022-08-29'
snippet: 'Accessibility is taking big strides in the gaming controller market, which is pushing boundaries in other tech spaces as well. Enabled Play gives gamers full control by using facial expressions, alongside voice and movement commands.'
image: '/images/enabled-play.jpg'
sites: [
  { 
    name: "Alex Dunn", 
    url: "https://www.linkedin.com/in/suavepirate/" 
  },
  { 
    name: "Esports Wiki", 
    url: "https://en.wikipedia.org/wiki/Esports" 
  },
  { 
    name: "Insider Intelligence", 
    url: "https://www.insiderintelligence.com/insights/esports-ecosystem-market-report" 
  },
  { 
    name: "Esport Statistics 2022", 
    url: "https://growfollowing.com/esports-statistics/" 
  },
  { 
    name: "Microsoft Xbox Adaptive Controller", 
    url: "https://www.microsoft.com/en-us/garurl/wall-of-fame/xbox-adaptive-controller/" 
  },
  { 
    name: "V&A", 
    url: "https://www.vam.ac.uk/collections/rapid-response-collecting" 
  },
  { 
    name: "Suave Keys", 
    url: "https://github.com/SuavePirate/SuaveKeys" 
  },
  { 
    name: "Snap Keys", 
    url: "https://github.com/SuavePirate/SuaveKeys.SnapReader" 
  },
]
---
My first gaming system was an Atari 2600, followed by a 5200, then a Nintendo, Super Nintendo, PS2, Xbox 360, and now a PS4 and Xbox: something...who knows what it is now with Xbox and their XSXXOX…whatever.

If you would have told me, when I was sitting back in my bean bag chair, having a [digital dog laugh at me miss digital ducks](https://www.youtube.com/watch?v=7fkgjgBJKzk), that gaming was going to become an international competitive sport, I honestly would have believed that. However, my dad would have scoffed. He was really good at shooting ducks. The dog never laughed at him.

Competitive gaming, or Electronic Sports dubbed [Esports](https://en.wikipedia.org/wiki/Esports), has grown exponentially since 2010. According to Insider Intelligence, 29.6 million people in the U.S. will tune in to an esport event to watch approximately 30,000 American gamers duke it out. And that's just the US stats. It gets much bigger when you go international.

Some of these gamers have disabilities, but that doesn't slow them down at all. [Zersiax](https://www.twitch.tv/zersiax) is a fully blind streamer that puts on an incredible show, playing a variety of game types. His Gear & Setup writeup is very tongue-in-cheek:

- Microphone: Aston Origin
- Interface: TC Helicon GoXLR
- Desktop: Lenovo Legion T5 26AMR5 90RC019VMH, 32 gigs, AMD Ryzen 7 5800, NVIDIA Geforce RTX 3070
- ***Monitor 1: Zilch.***
- ***Monitor 2: Nada.***
- Screen Reader: Generally NVDA, although I do have the ***occasional secret affair with JAWS.***
- Streamer Setup: OBS with a Captions plugin and Firebot for all sorts of automated fun & utility

Gaming is growing at a big rate and many of these gamers have vastly different accessibility needs. By that transitive property alone, more players means more interactive devices like controllers, keyboards, trackpads, mouses, key switches, and whatever else the kids are using these days. How do these stack up when it comes to accessibility?

Microsoft has the [Xbox Adaptive Controller](https://www.microsoft.com/en-us/garage/wall-of-fame/xbox-adaptive-controller/), which is designed for players with limited mobility. The Adaptive Controller acts like a massive switchboard, with jacks for assistive devices (not included) and usb ports for joysticks and other bus inputs. 

It is highly customizable, allowing the player to map nearly any input to a specific device, button, pedal, etc. It has made a big impact on Xbox players and the accessibility community. A big enough splash to be acquired by the [V&A](https://www.vam.ac.uk/) for its [Rapid Response Collecting](https://www.vam.ac.uk/collections/rapid-response-collecting) activity.

However, the latest device is thinking outside the *(X)*box, and addressing the caveats of devices that are still tied to **some** type of mobility. [Alex Dunn](https://www.linkedin.com/in/suavepirate/) has created [Enabled Play](https://enabledplay.com/), which leverages the players facial expressions and other non-tactile methods to clutch or kick.

> “Enabled Play is a device that learns to work with you — not a device you have to learn to work with,” – Alex Dunn

Alex is not new to the game (pun very much intended) when it comes to accessible controllers. He created a voice command system called [Suave Keys](https://github.com/SuavePirate/SuaveKeys) which works in parallel with the keyboard and mouse, matching the audible command to an assigned macro. He extended that system with [Snap Keys](https://github.com/SuavePirate/SuaveKeys.SnapReader), which creates a controller via the player's Snapchat lens.

Both Suave and Snap Keys won awards in 2020, however, Dunn was not yet satisfied, and wanted to take his next development to another level of accessibility.

The next proof of concept tried to utilize speech recognition patterns again to create voice commands as the source of input. However, this created too much lag for fast paced gaming action. So Dunn built a piece of hardware with a amped up processor and 8 GB of RAM to accommodate for the needs of the controller.

With the new hardware ready, Alex opened up connectivity for many different human actions. Enabled Play uses an AI/ML model of speech prediction which can take voice commands, but also non-verbal inputs like "ooh" and "aah". Think of it as a kind of Divination for language. Rather than be in a reactive state, taking in speech then trying to convert it to an action, it will predict the word, cutting down on response time.

Enabled Play can monitor facial expressions, as well, turning them into player actions like Jump, Slide, Shoot, or whatever a typical button or key would do. There are also tilt controls, which will send actions based on the angle of the device. There is even a Shake control, which I would immediately map to "Quit this game!", and then I would [shake it to the sky like Grampa Simpson yelling at a cloud](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIOVQYXFPnGfzmhvVC1QXspDnT-ZOAyMHbBQ&usqp=CAU).

Having opened up the input possibilities to more than just tactile inputs, Enabled Play gives players a highly customizable feature set which can accommodate many different needs of players. 

The level of entry for this device is not astronomical either. The AI-enabled controller is priced at $249.99, which is bargain compared to other Augmentative and Alternative Communication (AAC) systems which can reach nearly $12k and have a steep learning curve.

The possibilities for Enabled Play go well beyond gaming. Any piece of software with a complicated input structure can be directed by Enabled Play. With the right setup of key designations, a user could write code, give presentations, design layouts, and edit photographs and video. There are also avenues being taken in the R&D space for Enabled Play, allowing researchers to analyze facial muscle patterns. 

The future looks bright for Dunn and Enabled Play. Considering his motivation is altruistic in nature, I expect great things are in the next castle. Now I just need someone to build something so that digital dog stops laughing at me.

> “It’s a very personal mission of mine to solve these problems. That’s the difference that I’m after, which is to build devices that change the human-computer interaction paradigm to one that’s just more inclusive.” – Alex Dunn

\* if you didn't get any of the retro references in this article, don't feel bad. I'm just old.
