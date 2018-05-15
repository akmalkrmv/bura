
var app = new Vue({
    el: '.app',
    data: {
        players: [{
                backside: true,
                name: 'Bob',
                cards: [{
                        suit: 'spades',
                        text: 'A'
                    },
                    {
                        suit: 'hearts',
                        text: '10'
                    },
                    {
                        suit: 'clubs',
                        text: 'K'
                    },
                    {
                        suit: 'diamonds',
                        text: '6'
                    }
                ],
                points: 10
            },
            {
                backside: false,
                name: 'Jack',
                cards: [{
                        suit: 'spades',
                        text: '9'
                    },
                    {
                        suit: 'hearts',
                        text: 'A'
                    },
                    {
                        suit: 'clubs',
                        text: 'Q'
                    },
                    {
                        suit: 'diamonds',
                        text: '8'
                    }
                ],
                points: 20
            }
        ]
    }
});