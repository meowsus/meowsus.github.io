---
layout: post
title: Wednesday
---

I got a late start today despite getting the kids to school on time. On a good drop-off day, I get back to my house around 8:30 in the morning, which leaves me a scant 30 minutes to journal, stretch, and meditate.

Today, while journaling, I made an interesting observation: working for Ampwall is a distraction. When I was brought into the fold, it was at a time when my prospects had all but dried up. I might have mentioned this, but prolonged unemployment is very depressing. After about two months of rejections, I found that I was seriously doubting myself and my abilities. Heck, I didn't think that I could write code anymore. That all changed when I met Chris & Charles, and they welcomed me enthusiastically.

When I started, I was fully dedicated to the project. I spent 8 hours a day tackling anything and everything that needed attention. Eventually, my finances caught up with me, and a long-overdue decision needed to be made. I needed to stop spending $750/month on childcare. So my bandwidth became halved, and I could only work from about 9 AM to 1 PM, on a good day.

Now I'm finding that four hours a day is barely enough time to do anything impactful, especially in a zero-to-one, pre-seed startup. Finding any kind of flow state in that amount of time is near impossible, and getting any consistent dopamine release from my daily work definitely is impossible. The dopamine thing is mostly how I measure my own success in a remote environment. The more dopamine my brain releases during my workday, the better I'm doing. It gets released when I'm shipping shit.

Those four-hour days, however, are now fragmented by interviews. I will work for an hour or two before getting a notification on my phone that I have to prepare for an interview. I start to refresh myself on who I'm about to talk to and what the conversation will likely entail. I then sit on the phone or in a video call with a complete stranger and really, truly try to sell myself without coming off as a complete ass. Frankly, it's exhausting as hell to do, especially knowing that my chances of actually progressing to the next round are outrageously low and the chances of just being outright ghosted after the first call are outrageously high. Often after these interviews, I need to lay down. Sometimes I have to cry. They just take a lot out of me.

Days with an interview mean that even my four-hour commitment is hard to maintain. I've scheduled interviews for the entire week. Oddly, however, I have none scheduled for next week, which makes me both happy and nervous, and here's where I get to the point: working for Ampwall is a distraction.

Before the new year, Ampwall provided me with something to do to keep my skills sharp, make me feel less alone, and give me something to do besides screaming into the void. Now that it's 2025, however, I need to find a paying job. I'm sure you've heard that "finding a job is a full-time job." I don't even have the time to work a part-time job right now, so I need to focus all my available time, now that companies seem interested in hiring again, on finding a full-time job. And this makes me sad because I do so love my team and this product. "It's the exact thing I should be doing," I once told my therapist. Anyway, we'll see how this plays out. I'm definitely not leaving the team, but I think I will have to fade into the background a bit more so that I can focus on myself and my needs for a while.

Having said all that, I did manage to log an hour or two at the `datetime-local` bug mentioned in [the previous post]({% post_url 2025-01-14-Tuesday %}). Despite not fixing a damn thing, I did find out a few things:

1. Testing locally from an external, physical device (my daughter's iPad, in this case) won't be possible without significant code change.
2. My daughter has installed a third-party keyboard on her iPad which _meows_ as you use it and is a usability nightmare (not just because of the meows).
3. The [Prettier ESLint VSCode plugin](https://github.com/idahogurl/vs-code-prettier-eslint) we use at Ampwall has completely stopped working for the "Code Insiders" version of VSCode.
4. I can't remember why I'm using the "Code Insiders" version of VSCode in the first place.
5. Decomposing a file that contains more than three React components is always the right thing to do.

I eventually punted this ticket, which is affecting one person on only one of his devices. I would have done this way sooner but, remember, I'm the front person this week, and my job is to clear the queue. By hook or by crook, that queue will be cleared. Hopefully, one of my more sane, Apple-loving teammates can use their fancy iOS simulators and solve the problem if/when they feel like it and/or have the time.

Tomorrow I'll be focusing on a caching bug which, again, is impossible to reproduce locally and has only been reproduced by our team once in production. It's not a mission-critical bug, so I'll try to be kind to myself when I fail to solve that problem in the two to four hours I can focus between interviews.

Oh, speaking of interviews, after receiving an immediate rejection after what I thought was a pretty good intro call with a "GenAI" company whose name neither I nor you will ever need to recall now or forevermore (I'm not crying, _you're crying_), I had a very excellent video chat with an old acquaintance and former systems implementer from my days working on [Workarea](https://github.com/workarea-commerce/workarea). He and his organization seem very interested in bringing me on board, in a contract-on-the-spot capacity, if we can agree on compensation. I haven't been a contractor for many moons, but I sat down and came up with a number and will give that number to that man immediately after this is published. My honest-to-god reality right now is that I need to stop the bleed from my savings account _at all costs_ because it is the number one contributor to my depression.
