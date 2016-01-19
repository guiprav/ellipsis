'use strict';

let app = $require('mod/app');

let templ = $require('templ');

app.get('/social', function(req, res) {
    res.send(templ.timeline({
        timelineEvents: [
            {
                actor: {
                    name: 'Guilherme Prá Vieira',
                    url: 'https://placeholder',
                    avatarUrl: 'img/profilePicture.png',
                },
                action: {
                    description: 'tweeted',
                },
                dateDescription: 'January 19th at 6:26 am',
                body: 'This is just a test.',
            }
        ],
    }));
});
