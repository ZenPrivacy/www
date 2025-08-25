+++
date = '2025-08-26T01:00:00+05:00'
draft = false
author = 'Ansar Smagul'
authorURL = 'https://bsky.app/profile/anfragment.net'
title = 'How ad business broke tech'
description = 'How advertising reshaped the internet into a system of manipulation, surveillance, and broken promises — and what we can do in response.'
image = '/blog/how-ad-business-broke-tech/og-regatta.jpg'
+++

<figure>
  <img src="regatta.jpg" alt="Regatta in Venedig, Gustav Schönleber (1876). Oil painting of a crowded Venetian regatta. Dozens of sailboats and gondolas fill the canal, their bright white and red sails catching the light. People cluster on the boats and along the water, creating a lively, bustling scene beneath a blue sky.">
  <figcaption>
    Regatta in Venedig, Gustav Schönleber (1876)
  </figcaption>
</figure>

Techno-optimism is dead.

I'm somewhat young, but I remember the promises made by the early 2010s era of TED talks and glossy keynotes, preaching that technology and innovation would bring prosperity across the globe. I remember genuine excitement for progress, logging into old forums and early social media, unboxing a new phone, getting a new app. Not so long ago, we were all promised a better future — one driven by information and deeper connection.

It didn't quite pan out. The benefits came with costs. Social media platforms have become unbearable, shaped by algorithms boosting the angriest and most fringe voices. Privacy is gone; big tech knows more about us than our closest friends and family. Instead of connection, we get endless notifications calling for attention. Instead of broad prosperity, the tech industry helped create some of the starkest concentrations of wealth and power in modern history.

It wasn't an accident. In business, profit incentives always win out. And the overwhelming source of profit in tech, the strongest undercurrent shaping it all, is advertising.

## A broken system of incentives

The issue with ads is how irresistible they are as a business model. Building a great product is hard, and convincing people to pay is even harder. But when a service is "free", it usually means you're not the customer — your attention is the product being sold to advertisers. Most social networks, news sites, even email and search engines run on this logic. Slapping ads on top must feel like a cheat code, and for a while, it looks harmless.

The trouble starts after this decision. For companies with ads as the business model, **time spent on the platform becomes the product**. Instead of enriching the lives of users, "engagement" becomes the core metric, and we all know what it feels like to use an app designed to maximize that. Mind-numbing. Dehumanizing.

Decades of research show where engagement-based algorithms take us, and the pattern is depressingly consistent. What rises to the top of our feeds is rarely joy or curiosity, but anger, fear, and envy — the emotions most likely to keep us hooked. In [one study of Twitter](https://knightcolumbia.org/content/engagement-user-satisfaction-and-the-amplification-of-divisive-content-on-social-media), 62% of algorithmically boosted political posts expressed outright anger, and nearly half targeted hostility at an out-group. The result: civil discourse reduced to a shouting match.

The damage is sharpest for young people. Facebook allegedly [detected and exploited moments of emotional vulnerability in teenage girls](https://futurism.com/facebook-beauty-targeted-ads). TikTok's recommendation system has been caught [funneling vulnerable users toward eating disorder and self-harm content](https://apnews.com/article/technology-health-eating-disorders-center-government-and-politics-0c8ae73f44926fa3daf66bd7caf3ad43) within minutes. And despite [years of criticism](https://en.wikipedia.org/wiki/Elsagate), YouTube keeps serving disturbing videos to children, now joined with [AI-generated shorts centered around death and abuse](https://www.youtube.com/shorts/sGOds6cQBfI). Think about that.

Platforms have [known all this for years](https://en.wikipedia.org/wiki/2021_Facebook_leak), but usually take no action until public outrage. This is not an accident. It's the predictable outcome of a system where profit and shareholder value are worth more than our dignity.

In 2013, Nir Eyal published _Hooked_, Silicon Valley's seminal playbook for creating addictive products, with lines like: _"Habit-forming companies link their services to the users' daily routines and emotions"_ and _"If it can't be used for evil, it's not a superpower."_ By 2019, Eyal, now among many repentant tech workers, wrote _Indistractable_, which argues for digital minimalism and reclaiming our attention. All too little, all too late.

The result is a world that feels fractured, unstable, anxious. Populist leaders thrive by weaponizing fear and misinformation through social media. Our corroded trust in one another makes me worry about how we'll be able to handle rising global conflict.

Clinicians warn that constant digital stimulation may be reshaping how attention works, even in adults. Imagine how much worse it will be for the next generation exposed to these digital casinos every day.

There might be multiple factors feeding this instability — but it's impossible to argue that the design incentives of the platforms we all use haven't played a central role.

Oh, and by the way, this isn't even the half of the story yet.

## Privacy

The mechanism behind most online ads is called real-time bidding, or RTB. The way it works is like an automated stock market, where publishers — like websites and ads — auction off ad space on exchange platforms, where the highest bidder wins the placement. To "help" with targeting, publishers attach extra data to each potential sale, possibly including user location, device data, sometimes much more. With algorithms on both sides of the exchange, the whole process takes milliseconds.

Apart from legitimate advertisers, these platforms host data brokers, whose primary goal is to collect the information from the bids and other sources, package it and sell to whoever is willing to buy. The exchanges claim that data in a single bid could never pinpoint a single person. However, when billions and trillions of individual data points get aggregated into massive datasets, it suddenly becomes viable to link data into distinct user profiles.

We don't have to speculate. Data brokers themselves advertise it publicly. Look at [this dataset](https://datarade.ai/data-products/factori-consumer-graph-data-usa-purchase-behavior-inten-factori) publicly for sale at $360,000:

![Screenshot of a data marketplace listing for "Factori Consumer Graph Data". The listing advertises over 300 million U.S. consumer profiles for sale and 97% data quality, with 100+ attributes such as name, address, email, income, household, and purchase behavior. The price is shown as $360,000 per year. A sample data dictionary includes fields like unique ID, first name, last name, address, city, state, zip, latitude, and longitude. Logos of major companies like P&G, JCDecaux, and IKEA are displayed under "Trusted by".](factori.jpg)

300+ million American profiles, with names, addresses, emails, phone numbers, household composition, workplaces, purchase histories, and more, including such fields like Infant_Apparel_Buyer, Donated_for_Liberal_Political_Cause and Donated_for_Conservative_Political_Cause.

Still not invasive enough? Another marketplace, Narrative, was caught selling data about whether someone [uses a period-tracking app](https://www.vice.com/en/article/data-marketplace-selling-clue-period-tracking-data/).

With data brokers, there's little to no customer vetting. Anyone with a credit card or a shell company can buy access — which means the information often ends up in the worst hands.

In 2022, Google's ad-tech system [leaked live device IDs and GPS data on Ukrainian users to RuTarget](https://www.propublica.org/article/google-russia-rutarget-sberbank-sanctions-ukraine), a broker owned by Russia's state bank Sberbank for months after the start of the war. Analysts warn this data could have been used to guide military or intelligence operations. It could still be happening — nothing prevents a third-party broker from unknowingly selling to a Russia-backed front today.

This isn't just about authoritarian regimes. In the U.S., immigration authorities sidestep warrant requirements by purchasing location data directly from brokers like [Venntel](https://www.eff.org/deeplinks/2022/06/how-federal-government-buys-our-cell-phone-location-data), conducting searches without consent and oversight.

Or take Rayzone Group, an Israeli company selling a product named Echo. Its marketing literally boasts that the service *"collects information from each internet user worldwide"* and that *"the target is not aware of the monitoring and can't avoid it"*. According to [Bloomberg](https://archive.is/nV7q6), dozens of law enforcement and intelligence agencies across Europe, the Middle East, Asia, and the Americas have purchased Echo, giving governments the ability to type in a journalist's name and watch their phone move in near real time.

And like everything else in tech, data brokers get [routinely](https://techcrunch.com/2025/05/28/data-broker-giant-lexisnexis-says-breach-exposed-personal-information-of-over-364000-people/) [breached](https://techcrunch.com/2025/01/13/gravy-analytics-data-broker-breach-trove-of-location-data-threatens-privacy-millions/), so malicious actors can simply steal sensitive datasets. It's an industry that is opaque, under-reported, and almost entirely unregulated. Transparency and accountability are effectively nonexistent.

This is surveillance without consent. This is a [threat to national security](https://interaktiv.br.de/ausspioniert-mit-standortdaten/en/index.html) to every nation across the world. This is a threat to our liberty and democracy.

## Making a difference

> _Freedom is a pure idea. It occurs spontaneously and without instruction._<br />
> — Nemik's manifesto, _Andor_ (2022)

There's a light at the end of this tunnel. The simplest, most direct move: **install a privacy-preserving ad-blocker**. [uBlock Origin](https://github.com/gorhill/uBlock/blob/master/README.md), [Zen](https://zenprivacy.net), [AdGuard](https://adguard.com/en/welcome.html), [NextDNS](https://nextdns.io). It's not illegal. It's not unethical. It's simply self-defense. If you already use one, help your loved ones set one up too. The power of any system lies in its scale — which means even the smallest actions, multiplied, can reshape it.

Choose alternative platforms not exclusively driven by profit: Mastodon, Bluesky, Proton, Signal. Read the privacy policies of services you normally skip. If you live in a democracy, push for regulation and broader privacy initiatives. Your vote has weight not just for you, but for billions of us who don't have the same privilege.

If you work in tech, help challenge the idea that "the ad model is fine". Learn how to build infrastructure — like telemetry and analytics — without spying.

Lastly, here's the truth: the system of extraction and surveillance we have in tech right now is unprecedented, but that's what makes it brittle. And brittle things don't bend; they shatter. What comes next will depend on us.

<div class="thankyou"><strong>Thank you</strong> [Zhanerke Beisetay](https://www.linkedin.com/in/itsnoterke/) and [Jutta Jerlich](https://www.linkedin.com/in/juttajerlich/) for reviewing early drafts of this.</div>
