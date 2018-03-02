<h1 align="center">cryptaddress.now</h1>

<p align="center">A minimal service to detect which cryptocurrency an address corresponds to.</p>

---

<p align="center">
	<sub>Visit <a href="https://cryptaddress.now.sh"><code>cryptaddress.now.sh</code></a> for a live demo. Check out my <a href="https://nikolaskama.me">blog</a> and follow me on <a href="https://twitter.com/nikolaskama">Twitter</a>.</sub>
</p>


<br>

# Installation & Configuration

Clone the repository and install all dependencies by running:

```
~ ❯❯❯ git clone https://github.com/k4m4/cryptaddress.now
~ ❯❯❯ cd cryptaddress.now/
~/cryptaddress.now ❯❯❯ npm install
```

Subsequently, create a `.env` file and declare a variable called `SECRET` (for session security purposes):

```
~/cryptaddress.now ❯❯❯ echo "SECRET=[your-secret-goes-here]" > .env
~/cryptaddress.now ❯❯❯ npm start
```

You can then access the service by navigating to [`localhost:3000`](http://localhost:3000/).


<br>

# Deployment

First, [download `now`](https://zeit.co/download):

```
~ ❯❯❯ npm install -g now
```

Then, run `now` from *within* the directory of `cryptaddress.now`:

```
~/cryptaddress.now ❯❯❯ now
```


<br>

# Credits

- Most of the styling was adapted from [Evil Rabbit](https://twitter.com/evilrabbit_)'s [front site](https://github.com/evilrabbit/front).
- Cryptocurrency icons:
	- [Bitcoin](https://thenounproject.com/search/?q=bitcoin&creator=2128292&i=813127) by [Aldric Rodríguez](https://thenounproject.com/aldricroib2/)
	- [Ethereum](https://thenounproject.com/term/ethereum/1529277/) by [Strohberto](https://thenounproject.com/stroh)
	- [Litecoin](https://thenounproject.com/search/?q=litecoin&creator=657389&i=1499185) by [Randomhero](https://thenounproject.com/rahedesigns/)
	- [Ripple](https://thenounproject.com/term/ripple/1529276/) by [Strohberto](https://thenounproject.com/stroh)
	- [DASH](https://github.com/AllienWorks/cryptocoins/blob/master/SVG/DASH-alt.svg) by [AllienWorks](https://github.com/AllienWorks)
	- [Monero](https://thenounproject.com/search/?q=monero&creator=3430404&i=1546782) by [Beth Bolton](https://thenounproject.com/bethbolton/)
	- [NEO](https://thenounproject.com/search/?q=neo&creator=3051937&i=1457074) by [Владислав Северин](https://thenounproject.com/vlad334/)
	- [Dogecoin](https://thenounproject.com/search/?q=dogecoin&i=1247321) by [Salvia Santos](https://thenounproject.com/Salvinorina-a)
- Favicon: [Transfer](https://thenounproject.com/term/transfer/1519579/) by [Ozza Okuonghae](https://thenounproject.com/iozza/)


<br>

# Supported Cryptocurrencies

- [`Bitcoin/BTC`](https://github.com/kevva/bitcoin-regex) & [`Bitcoin Cash/BCH`](https://github.com/k4m4/bitcoincash-regex)
- [`Ethereum/ETH`](https://github.com/k4m4/ethereum-regex)
- [`Litecoin/LTC`](https://github.com/k4m4/litecoin-regex)
- [`Monero/XMR`](https://github.com/k4m4/monero-regex)
- [`Dash/DASH`](https://github.com/k4m4/dash-regex)
- [`Ripple/XRP`](https://github.com/k4m4/ripple-regex)
- [`NEO/NEO`](https://github.com/k4m4/neo-regex)
- [`Dogecoin/DOGE`](https://github.com/k4m4/dogecoin-regex)


<br>

# Related

- [cryptocurrency-address-detector](https://github.com/k4m4/cryptocurrency-address-detector) - Detect which cryptocurrency an address corresponds to.


<br>

# License

Copyright (c) 2018 by Nikolaos Kamarinakis. Some rights reserved.

`cryptaddress.now` is under the terms of the **MIT License**, following all clarifications stated in the [license file](license.md).

For more information on this project you can go ahead and email me anytime at **nikolaskam{at}gmail{dot}com**.