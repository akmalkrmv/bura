
var app = new Vue({
    el: '.app',
    data: {
        players: [{
                backside: true,
                name: 'Bob',
                cards: [{
                        backside: true,
                        suit: 'spades',
                        text: 'A'
                    },
                    {
                        backside: true,
                        suit: 'hearts',
                        text: '10'
                    },
                    {
                        backside: true,
                        suit: 'clubs',
                        text: 'K'
                    },
                    {
                        backside: true,
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
                        backside: false,
                        suit: 'spades',
                        text: '9'
                    },
                    {
                        backside: false,
                        suit: 'hearts',
                        text: 'A'
                    },
                    {
                        backside: false,
                        suit: 'clubs',
                        text: 'Q'
                    },
                    {
                        backside: false,
                        suit: 'diamonds',
                        text: '8'
                    }
                ],
                points: 20
            }
        ]
    }
});