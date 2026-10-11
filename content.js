/*
 * ✏️  EVERYTHING PERSONAL LIVES HERE.
 * Edit the text below, drop your photos into /public/photos and your video into /public/video,
 * and the whole site updates. No other file needs to change.
 */

export const content = {
    // Her name, as you want it written on the page
    herName: 'My Love',

    // How you sign off
    yourName: 'Yours, always',

    // ── 1. Opening section ──────────────────────────────────────────────
    hero: {
        eyebrow: 'Today is all about you',
        message:
            'Happy birthday to the person who makes every ordinary day feel like a celebration. I made this little page just for you — scroll down slowly, there is something waiting.'
    },

    // ── 2. The vintage letter ───────────────────────────────────────────
    letter: {
        date: 'October 2026',
        greeting: 'My dearest,',
        // Each string is its own paragraph
        paragraphs: [
            'I have started this letter more times than I would like to admit, because no matter how I write it, the words always feel smaller than what I actually feel for you.',
            'Since you came into my life, everything has a little more colour in it. The quiet mornings, the late-night talks, the way you laugh at my terrible jokes — I keep all of it tucked away like pressed flowers.',
            'On your birthday I just want you to know how deeply you are loved, how proud I am of you, and how lucky I feel that I get to stand beside you for another year of your story.',
            'Here is to you, today and every day after.'
        ],
        closing: 'With all my heart,'
    },

    // ── 3. Photos of the two of you ─────────────────────────────────────
    // Put your images in /public/photos and update the `src` paths.
    // Any image that is missing shows a soft placeholder until you add it.
    photos: [
        {
            src: '/photos/photo-1.jpg',
            caption: 'The day it all started',
            message: 'I still remember exactly how nervous I was. Best nerves of my life.'
        },
        {
            src: '/photos/photo-2.jpg',
            caption: 'Our favourite adventure',
            message: 'Getting lost with you is better than finding my way with anyone else.'
        },
        {
            src: '/photos/photo-3.jpg',
            caption: 'That smile',
            message: 'This is the smile I would cross any distance to see.'
        },
        {
            src: '/photos/photo-4.jpg',
            caption: 'Just us',
            message: 'My favourite place in the whole world is right next to you.'
        }
    ],

    // ── 4. Reasons I love you ───────────────────────────────────────────
    reasons: [
        'The way your laugh fills up an entire room.',
        'How you care for everyone around you without ever being asked.',
        'You make even the most boring errands feel like a date.',
        'Your kindness, especially when you think no one is watching.',
        'The way you look at me when you think I am not looking.',
        'You believe in me, even on the days I do not.',
        'Your terrible, wonderful, completely unique dance moves.',
        'Because you are you — and that is more than enough.'
    ],

    // ── 5. The video message ────────────────────────────────────────────
    // Put your video file in /public/video (MP4 works everywhere).
    // Optional: a still image shown before it plays.
    video: {
        src: '/video/birthday-message.mp4',
        poster: '',
        intro: 'I wanted to say this one out loud. Press play, and turn the sound up.'
    },

    // The very last line on the page
    finale: 'Happy birthday. I love you, endlessly.'
};
