\c runitback_app

INSERT INTO users (username, email, region, controller)
    VALUES
        ('jdangerous97', 'jdanger@fg.com', 'NA', 'Razer Panthera'),
        ('huggles45', 'bighuggs@fg.com', 'EU', 'Quanba Obsidian'),
        ('musashi', 'mushimushi@fg.com', 'JP', 'Victrix Pro'),
        ('nelsoncortez', 'ncortez@fg.com', 'SA', 'Hitbox');

INSERT INTO events (title, info, bannerUrl, location)
    VALUES  
        ('Heat Wave 2022', 'The premiere summer fighting game event where the greatest competitors come to clash at the highest level! Register now to compete in DragonBall FighterZ, DNF Duel, King of Fighters: XV, Guilty Gear: Strive, and SkullGirls. Come join us on July 8-10th at OSNY', 'https://pbs.twimg.com/card_img/1526023999062515712/35VVfjZ0?format=png&name=medium', 'Manhattan, NY'),
        ('Combo Breaker 2022', 'COMBO BREAKER returns May 27-29, 2022 in its brand new venue, the Renaissance Schaumburg Convention Center and Hotel! Our new venue is located in Schaumburg, Illinois, USA and is 12 miles from OHare International Airport.', 'https://images.smash.gg/images/tournament/420679/image-3a8bafeea330c3a22db3706a9acfb20b.jpg?format=auto&fit=cover', 'Schaumburg, Illinois'),
        ('Evo 2022', 'The Evolution Championship Series (Evo for short) represents the largest and longest-running fighting game tournaments in the world. For 20 years, Evo has brought together the best of the best in an electric exhibition of skill and fun. During Evos flagship event each year, players and fans gather to compete in open format tournaments that crowns World Champions.', 'https://images.smash.gg/images/tournament/426276/image-f2eb5c20160090bc21f7a83299815385.png?format=auto&fit=cover', 'Las Vegas, NV');

INSERT INTO tournaments (eventId, gameTitle, prizePool, attendees)
    VALUES
        (1, 'DragonBall FighterZ', '6000', '256'),
        (1, 'King of Fighters: XV', '2500', '96'),
        (1, 'DNF Duel', '2500', '256'),
        (1, 'SkullGirls: 2nd Encore', '2000', '128'),
        (1, 'Guilty Gear: Strive', '4000', '256'),

        (2, 'Street Fighter V: Champion Edition', '10000', '500'),
        (2, 'Tekken 7', '5000', '400'),
        (2, 'Mortal Kombat 11', '2500', '128'),
        (2, 'Granblue Fantasy: Versus', '2500', '256'),

        (3, 'Street Fighter V: Champion Edition', '25000', '900'),
        (3, 'DragonBall FighterZ', '8000', '400'),
        (3, 'Tekken 7', '10000', '612'),
        (3, 'Melty Blood: Type Lumina', '2500', '256');







