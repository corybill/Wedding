/**
 * Created with IntelliJ IDEA.
 * User: Cory
 * Date: 3/2/14
 * Time: 6:44 PM
 * To change this template use File | Settings | File Templates.
 */

"use strict";

module.exports = function () {
    return {
        getPoemAtIndex: function (index) {
            return poem[index];
        },
        getLyricsAtIndex: function (index) {
            return chorus[index];
        },
        getInitialLyricsAtIndex: function (index) {
            return initialLyrics[index];
        },
        getEndingLyricsAtIndex: function (index) {
            return endingLyrics[index];
        }
    };
};

var initialLyrics = [
    "To the love of my life",
    "I will always love you",
    "Forever"
];

var endingLyrics = [
    "And now it is my turn",
    "To take her hand",
    "To love her",
    "Not till death shall we part"
];

var chorus = [
    "That's", "When", "You", "Need", "Some", "One",
    "Some", "One", "That", "You", "Can", "Call",
    "When all your faith is gone",
    "It Feels like you cant go on",
    "Let It Be Me",
    "If", "It's", "A", "Friend", "You", "Need",
    "Let It Be Me"
];

var poem = [
    {
        line1: "When I first set my sights I placed words upon her flesh",
        line2: "She did not comply",
        line3: "Complications of the fictitious man",
        line4: "But I knew she would soon hold my hand"
    },
    {
        line1: "Toys were us except for the hoops",
        line2: "They fell to her ground",
        line3: "Charming, beauty, hole in my stomach",
        line4: "She gently grazed my hand"
    },
    {
        line1: "Fireworks say phish",
        line2: "Other things on my mind",
        line3: "She complies in the grassy field, she is mine",
        line4: "She will hold my hand"
    },
    {
        line1: "Alone at last",
        line2: "In the battery we lay",
        line3: "Calming fears and excitement",
        line4: "Through a gentle touch on her hand"
    },
    {
        line1: "Without her weak",
        line2: "With her unstoppable",
        line3: "We are unstoppable as one",
        line4: "She squeezed my hand with the love of a thousand Juliets"
    },
    {
        line1: "And now it is my turn...."
    },
    {
        line1: "To take her hand...."
    },
    {
        line1: "To love her...."
    },
    {
        line1: "Not till death shall we part...."
    }
];