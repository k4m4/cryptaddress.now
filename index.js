var addressDetect    = require('cryptocurrency-address-detector');
var express          = require('express');
var bodyParser       = require('body-parser');
var fs               = require('fs');
var cookieSession    = require('cookie-session')
var validator        = require('validator');
var sanitizer        = require('express-sanitizer');
var helmet           = require('helmet');
var dotenv           = require('dotenv')
var truncate         = require('truncate-html');
var app              = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(__dirname));
app.use(express.static("public"));

app.disable('x-powered-by')
app.use(sanitizer())
app.use(helmet());
dotenv.load();
app.use(cookieSession({
    secret: process.env.SECRET,
    cookie: {
        maxAge: 60000,
        httpOnly: true,
        secure: true
    }
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/detect', function(req, res, next) {
    var address = validator.escape(req.sanitize(req.body.address.replace(/\s/g, '')));
    var status = '<br/>';
    var length = address.length;

    addressDetect(address).then(cryptocurrency => {
        if (cryptocurrency != 'Cryptocurrency could not be detected') {
            const cryptocurrencies = {
                'BTC/BCH': 'a <b>Bitcoin</b> (<b>BTC</b>) or <b>Bitcoin Cash</b> (<b>BCH</b>)',
                'BCH': 'a <b>Bitcoin Cash</b> (<b>BCH</b> CashAddr)'
                'ETH': 'an <b>Ethereum</b> (<b>ETH</b>)',
                'LTC': 'a <b>Litecoin</b> (<b>LTC</b>)',
                'DOGE': 'a <b>Dogecoin</b> (<b>DOGE</b>)',
                'DASH': 'a <b>DASH</b>',
                'XMR': 'a <b>Monero</b> (<b>XMR</b>)',
                'XRP': 'a <b>Ripple</b> (<b>XRP</b>)',
                'NEO': 'a <b>NEO</b>'
            };
            if (cryptocurrency in cryptocurrencies) {
                status += 'is ' + cryptocurrencies[cryptocurrency] + ' address!';
            }
            else {
                status += '...Something went very wrong!';
            }
            var icon = '<img src="imgs/' + cryptocurrency.toLowerCase().replace('/', '-') + '.svg">'
        } else {
            status += '<b>does not seem to correspond</b> to any of our featured cryptocurrencies.';
            var icon = ''
        }
    
        fs.readFile(__dirname + '/status.html', function(err, data) {
            if (err) {
                throw err;
            }
    
            var html = data.toString();
            var html = html.replace(/{{ICON}}/g, icon + '<br/>')
            if (length > 50) {
                html = html.replace(/{{ADDRESS}}/g, ('<span id="address" style="font-size: 0.4em;">' + address + '</span>'));
            } else { 
                html = html.replace(/{{ADDRESS}}/g, '<span id="address">' + address + '</span>');
            }
            var html = html.replace(/{{STATUS}}/g, status);
    
            res.send(html);
        });
    }).catch(next);
});

app.use(function (err, req, res, next) {
    console.log(err)
    res.status(500).send('Something broke!')
});

const port = process.env.PORT || 3000;
app.listen(port);
