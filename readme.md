<div align="center">
	<img src="https://nikolaskama.me/content/images/2020/01/cryptaddress.gif" width="600">
</div>

---

<p align="center">
	<sub>Visit <a href="https://cryptaddress.now.sh"><code>cryptaddress.now.sh</code></a> for a live demo. Check out my <a href="https://nikolaskama.me">blog</a> and follow me on <a href="https://twitter.com/nikolaskama">Twitter</a>.</sub>
</p>

<br>

## Development

First, clone the repository and install its dependencies:
```bash
~ ❯❯❯ git clone https://github.com/k4m4/cryptaddress.now.git
~ ❯❯❯ cd cryptaddress.now/
~/cryptaddress.now ❯❯❯ npm install
```

Make sure that you have [ZEIT `now`](https://zeit.co/download) installed:
```bash
~ ❯❯❯ npm install -g now
```

Subsequently, start the development server:
```bash
~/cryptaddress.now ❯❯❯ now dev
```
You can then access the service by navigating to [`localhost:3000`](http://localhost:3000).

## Deployment

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/k4m4/cryptaddress.now)

Alternatively, to deploy `cryptaddress.now` manually:

First, [download `now`](https://zeit.co/download):
```bash
~ ❯❯❯ npm install -g now
```

Then, run `now` from *within* the `cryptaddress.now` directory:
```bash
~/cryptaddress.now ❯❯❯ now
```

# Credits

- Most of the `next.js` code and styling was adapted from [zeit](https://zeit.co)'s [title-site](https://github.com/zeit/title-site).
- Cryptocurrency icons:
	- [Bitcoin](https://thenounproject.com/search/?q=bitcoin&creator=2128292&i=813127) by [Aldric Rodríguez](https://thenounproject.com/aldricroib2/)
	- [Ethereum](https://thenounproject.com/term/ethereum/1529277/) by [Strohberto](https://thenounproject.com/stroh)
	- [Litecoin](https://thenounproject.com/search/?q=litecoin&creator=657389&i=1499185) by [Randomhero](https://thenounproject.com/rahedesigns/)
	- [Ripple](https://thenounproject.com/term/ripple/1529276/) by [Strohberto](https://thenounproject.com/stroh)
	- [DASH](https://github.com/AllienWorks/cryptocoins/blob/master/SVG/DASH-alt.svg) by [AllienWorks](https://github.com/AllienWorks)
	- [Monero](https://thenounproject.com/search/?q=monero&creator=3430404&i=1546782) by [Beth Bolton](https://thenounproject.com/bethbolton/)
	- [NEO](https://thenounproject.com/search/?q=neo&creator=3051937&i=1457074) by [Владислав Северин](https://thenounproject.com/vlad334/)
	- [Dogecoin](https://thenounproject.com/search/?q=dogecoin&i=36265) by [Brennan Novak](https://thenounproject.com/bnvk)
- Favicon: [Transfer](https://thenounproject.com/term/transfer/1519579/) by [Ozza Okuonghae](https://thenounproject.com/iozza/)

# Supported Cryptocurrencies

- [`Bitcoin/BTC`](https://github.com/kevva/bitcoin-regex)
- [`Bitcoin Cash/BCH`](https://github.com/k4m4/bitcoincash-regex)
- [`Ethereum/ETH`](https://github.com/k4m4/ethereum-regex)
- [`Litecoin/LTC`](https://github.com/k4m4/litecoin-regex)
- [`Monero/XMR`](https://github.com/k4m4/monero-regex)
- [`Dash/DASH`](https://github.com/k4m4/dash-regex)
- [`Ripple/XRP`](https://github.com/k4m4/ripple-regex)
- [`NEO/NEO`](https://github.com/k4m4/neo-regex)
- [`Dogecoin/DOGE`](https://github.com/k4m4/dogecoin-regex)

# Related

- [cryptocurrency-address-detector](https://github.com/k4m4/cryptocurrency-address-detector) - Detect which cryptocurrency an address corresponds to.
- [cryptaddress-validator](https://github.com/k4m4/cryptaddress-validator) - Validate Bitcoin, Ethereum, Litecoin & other popular cryptocurrency addresses.

# License

Copyright (c) 2019 by Nikolaos Kamarinakis. Some rights reserved.

`cryptaddress.now` is under the terms of the **MIT License**, following all clarifications stated in the [license file](license.md).

For more information on this project you can go ahead and email me anytime at **nikolaskam{at}gmail{dot}com**.