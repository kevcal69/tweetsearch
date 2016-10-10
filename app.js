let request = require('request')
let qs = require('querystring')

let consumerKey = '4jVnen4Q5M22JbOPZvDyqzikG'
let consumerSecret = 'WJ2KwSgLmKY1yNOd2ROb32TsSuOYx9QhyNxYzZIiUDQNfLUMzb'
let queryString = '#devfestcebu'

let oauthCreds = consumerKey+':'+consumerSecret;

let oauth2Endpoint = 'https://api.twitter.com/oauth2/token'
let searchEndpoint = 'https://api.twitter.com/1.1/search/tweets.json'

let _opts = {
        url: oauth2Endpoint,
        headers: {
            'Authorization':
                'Basic ' + new Buffer(oauthCreds).toString('base64'),
            'Content-Type':
                'application/x-www-form-urlencoded;charset=UTF-8'
            },
        body: 'grant_type=client_credentials'
}
var req = new Promise((res, rej) => {
    request(_opts, (e, r, body) => {
        if(e) {
            rej()
        }
        console.log(body);
        res(qs.parse(body))
    })
})

req.then(token => {
    console.log(token);
});
