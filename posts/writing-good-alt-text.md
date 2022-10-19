---
title: 'How to write good alt-text'
date: '2022-08-08'
snippet: 'Alt text provides supporting context for imagery on the web. It is currently one of the most common accessibility issues across the internet, but there are ways to make it better. Always remember to write concise, descriptive alt text for non-decorative images to help users and browsers understand what an image is portraying!'
image: '/images/pictionary.jpg'
alt: 'Pieces set out on a Pictionary game board.'
sites: []
---
Do you remember [Pictionary](https://en.wikipedia.org/wiki/Pictionary)? What about [Win, Lose, or Draw](https://en.wikipedia.org/wiki/Win,_Lose_or_Draw)?
These games blew up in the late 80's, with people frenetically drawing abstract shapes on a piece of paper and having teammates bark answers as to what those zigs and zags could be. There were some fun, creative spinoffs in later years, like [Cranium](https://en.wikipedia.org/wiki/Cranium_(board_game)), but nothing really tapped the zeitgeist like the OG’s. Apparently Generation X’ers found solace in a fat Sharpie marker, a large rip of newsprint, and 60 seconds to draw an armadillo.

> “Is it a cow?”
>
> “A house!”
>
> “It’s a tank!”
>
>  “A car?!”
>
> 7 seconds of total silence
>
> “I’ve no idea what you are drawing”
>
> “Start over!!”
>
> “This is worse than your first drawing!”
>
> “Why did we let Dan draw?”
>
> Dan stabbing the paper numerous times with the Sharpie marker
>
> “aaaaaaaaaaaaaaaand time.”
>
> “ooooOOOOOooooo ARMADILLO!”
>
> “Yeah Jessica! It’s an armadillo!!! That’s why I drew the umbrella because remember we saw that armadillo cross the road when we were at that nice restaurant drinking the fruity drinks with the paper umbrellas in them.”
>
> “THAT WASN’T ME!”

[chef’s kiss](https://i.pinimg.com/originals/cc/cf/cb/cccfcb78da929aec998e98ca41d3f001.gif)

As an illustrator, I loved playing these games. I also loved the absolute chaos they caused on game nights watching those who knew exactly what they were drawing and their respective audience was at a total loss.
These games really gave you a long vacation into someone’s headspace, whether you wanted a tour there or not.

So what does this have to do with alt text you ask? 

Let’s first just quickly define alt text:

> Alt text, or alternative text, is an attribute applied to image elements in a HTML document.

It looks something like this:

  <img src="padma.gif" alt="Padma Lakshmi giving a chef's kiss emote" />

Image Alt text acts as is the description of an image. Just like the answers to Pictionary, they are fast and succinct, but unlike Pictionary, they are correct.
Also just like in Pictionary, good images make good alt-text. If you have trouble writing alt text for an image, you may want to re-evaluate your image. If it’s hard to describe then it’s probably not adding much to the user experience. If it’s a good image, the alt text should come naturally.
Just like a good Pictionary Pair, engaging imagery, paired with effective alt text is how you win at accessibility.
Sounds pretty simple right? Just write a little extra text when you add an image. Well, you may be shocked to learn that missing alt text is consistently in the top 3 offenses in accessibility audits.

Why would something simple be so easily ignored?
Well, there are a few reasons:
1: Awareness
Many designers and developers simply do not know they need to add it, or how it enriches the UX.
2: It’s easy to forget about it.
In the maelstrom of development, it’s easy to forget to add that bit of information. Without proper checks in the dev pipeline, things continue full steam ahead to production without any oversight and proofreading.
3: Lack of architecture to easily add alt text
The web today is written in components and CMS’s and data driven autonomy. When these systems were built, the option to easily and intuitively add alt text was not included. Many images added to the internet pool are uploaded by the user and not a full stack dev, so without a way to handle alt text outside of writing code directly, it falls by the wayside.
The most effective way to combat the above is by knowing how to write proper alt text and when to use it.
__________________________________
How to write effective alt text
First, keep it simple, clear, and succinct.
Good alt text describes EXACTLY what you see IN the image.
A good rule of thumb is to describe the image like you would to a stranger in an elevator.
Be precise, descriptive, and quick with your words.
Think more Hemingway, less Tolstoy
Do not make assumptions on what is happening out of frame.
Holly and myself recently had a date night with another couple that talked about playing Pictionary. One person drew a simple heart on the page and their teammate immediately answered “PARIS”, which was correct. The other team assumed some cheating was afoot, because how does a heart represent Paris?
Assumption works for teammates, but not for the larger populace. Don’t take mental leaps when writing alt text, assuming the user knows what you know about a subject. Keep it descriptive to the image itself. Nothing more. Nothing less.
Do not write about some deeper, underlying meaning in the image
Something like, “Nah man ya see its about the beats within the beats….the beat that exists and doesn’t exist at the same time. The beat superposition”.
Save that for your jazz sub Reddits.
Similar to assumptions, the user doesn’t need to know about some hidden meaning in the alt text. If that needs to be conveyed to the user, it should be done in the written page content, and not the alt text.
Describe any real emotion in the image
Adding descriptions of emotion, such as happiness, sadness, excitement, in the alt text helps convey to the user the feeling that should be derived from the image.
Use common contextual themes to your advantage
People understand contexts like “illustration, Chart, Cartoon, 3D Render, Headshot, Painting, etc”. Use these types of descriptions to help the user get a mental image.
Do not use this as an opportunity to pile on keywords, aka Keyword Stuffing
The earlier chef’s kiss gif came from Pinterest. Let’s take a look at their alt text. I mean, a large company like Pinterest probably does alt text right…..right? Wrong!
This is the alt text for that gif
<img alt="via GIPHY Netflix Time, Netflix Tv Shows, Netflix And Chill, Netflix Movies, Padma Lakshmi, Latest Smartphones, Best Mobile Phone, Netflix Original Series, Stranger Things Netflix" src="https://i.pinimg.com/originals/cc/cf/cb/cccfcb78da929aec998e98ca41d3f001.gif">
Shame on you Pinterest, but thanks for a great example of keyword stuffing. First off, Google picks up on this immediately so you are not getting a rank bump with these shady practices. Second, it makes for a poor experience for anyone relying on that alt text to tell them what the image is portraying.
There are a few technical practices to keep in mind, as well:
Stick to about 125 characters to make sure the read out doesn’t get cut off by browser limitations.
Don’t say “image of” or “picture depicting” or similar.
Include any text depicted in the image, unless it is already included in the supporting content.
Just like Bushcraft, you want to keep things as DRY as possible. In this scenario, it means Don’t Repeat Yourself. Ya know in Pictionary, when that one person just keeps saying the same thing even though the answer is wrong….don’t be that person. So for instance, if you are using a <figure> element with <figcaption> (my favorite), don’t just dupe what is written in the <figcaption>  element. In the same vein, if you are describing something in the surrounding text, do not just dupe that in the alt text. Both of these will just result in the screen reader reading the same thing multiple times.  Alt text is designed to enrich the UX, not create an echo chamber.
Once you have some alt text written out, it’s helpful to read the alt text aloud with the rest of your content in a top-down linear fashion. This is a good simulation for how the screen reader will read it to the user. This helps you determine if it makes sense in the context of the narrative.
It’s also sometimes helpful to think about the page without imagery. What text would you put in place of that image? Those words should be your image alt text.
Above ALL things mentioned :point_up:, the most important bit is to WRITE alt text. While there are a few rules and practices to remember, the most important rule is to not leave out alt text. It’s better to have imperfect alt text than none at all.
__________________________________
Examples
Image
Bad: We’re zoomed-in on the face of a brown bear – sometimes known as a grizzly – gazing majestically into the middle distance. Perhaps she’s hungry, or has spotted a threat?
— If you need to say this much, add it as part of the text on the page. Keep alt text short. And remember – do not make any assumptions.
Bad: bear, brown bear, grizzly, grizzly bear, mammal, carnivore
— Read this aloud. This is not helpful – and Google won’t like it.
Okay: Brown bear
— This is fine but you could describe the image more clearly.
Good: Close-up of a bear’s face
— This gives a clear understanding of what’s in the image within just a few words, and makes no assumptions.
Another good example is the alt text provided in the imagery from the James Webb Telescope on Twitter.
Image
This is the html that renders that image:
<img alt="A large galaxy on the right, with two much smaller companion galaxies to the left at 10 o'clock and 9 o'clock. The large galaxy resembles a speckled wheel, with an oval outer ring and a small, off-center inner ring. The outer ring contains pink plumes like wheel spokes, with dusty blue regions in between. The pink areas are silicate dust, while the blue areas are pockets of young stars and hydrocarbon dust. The inner ring is smoother, filled in with a more uniform pale pink. This smaller ring is interwoven with thin, orange-pink threads. On the galaxy's right edge, a bright white star with 8 diffraction spikes shines. The two companion galaxies to the left, one above the other, are about the same size and both spiral galaxies. The galaxy above is a reverse S shape but similar in coloring and texture as the large ring galaxy. The galaxy below is smoother and largely white, with a blue tinge. The background is black and full of more distant, orange-red colored galaxies of various sizes." draggable="true" src="https://pbs.twimg.com/media/FZKWBERXkAEva3w?format=jpg&amp;name=small">
While you may think this goes against the rule that the text needs to be short. The text doesn’t have to be short. It needs to give a proper, factual description. It can be lengthy, as long as the words used are enriching the document.
__________________________________
When to include alt text?
Simple answer is almost always. The only time the W3C recommends not adding alt text to imagery is when the images are purely decorative. Any imagery, like a divider or border, that doesn’t provide contextual significance does not need alt text.
___________________________________
How does alt text improve the UX?
It acts as a placeholder for an image that hasn’t loaded yet.
It can act as a textual compliment to the visual language for users with sensory processing or learning disabilities
It is read by screen readers to give the user insight into the content of the image
It provides semantics, which help the browser and bots understand what the HTML code is representing. This boosts SEO.
____________________________________
How are some companies handling the alt text problem?
Twitter just recently released a feature which prompts you to add alt text each time you upload an image. This is a great way to add some exposure to an issue that gets passed by many just because it’s so strictly tied to the code.
Many are leveraging Artificial Intelligence and Machine Learning to automatically create alt text, such as Azure and Sirv. Although it’s still not a bulletproof mechanic yet, as noted by Thomas Smith in this Medium article.
Adee is a Figma plugin that tries to help designers with alt-text and other a11y checks.
