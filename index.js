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
        maxAge:60000,
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
            if (cryptocurrency == 'BTC/BCH') status += 'is a <b>Bitcoin</b> (<b>BTC</b>) or <b>Bitcoin Cash</b> (<b>BCH</b>) address!';
            else if (cryptocurrency == 'ETH') status += 'is an <b>Ethereum</b> (<b>ETH</b>) address!';
            else if (cryptocurrency == 'LTC') status += 'is a <b>Litecoin</b> (<b>LTC</b>) address!';
            else if (cryptocurrency == 'DOGE') status += 'is a <b>Dogecoin</b> (<b>DOGE</b>) address!';
            else if (cryptocurrency == 'DASH') status += 'is a <b>DASH</b> address!';
            else if (cryptocurrency == 'XMR') status += 'is a <b>Monero</b> (<b>XMR</b>) address!';
            else if (cryptocurrency == 'XRP') status += 'is a <b>Ripple</b> (<b>XRP</b>) address!';
            else if (cryptocurrency == 'NEO') status += 'is a <b>NEO</b> address!';
            else status += '...Something went very wrong!';
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