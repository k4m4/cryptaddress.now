import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import AutosizeInput from 'react-input-autosize'

const Index = () => {

  const initState = {
    value: '',
    response: '',
    image: '',
    toggle: false
  }

  const [state, setState] = useState(initState)

  const getAddress = async address => {
    if (address.length === 0 ) {
      return setState({ ...state, response: 'Cryptocurrency could not be detected', image: '' })
    }
    fetch(`/api/${encodeURIComponent(address)}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setState({ ...state, response: data.error, image: '' })
        } else {
          const cryptocurrency = data.cryptocurrency
          if (/could not be detected/.test(cryptocurrency)) {
            return setState({ ...state, response: cryptocurrency, image: '' })
          }
          setState({
            ...state,
            response: cryptocurrency,
            image: `../static/images/${cryptocurrency.replace('/', '-').toLowerCase()}.svg`
          })
        }
      })
      .catch(error => {
        console.error(error)
        setState({ ...state, response: error.message, image: '' })
      })
  }

  const handleChange = event =>
    setState({ ...state, value: event.target.value })

  const handleSubmit = async event => {
    event.preventDefault()
    await getAddress(state.value)
  }

  const { value } = state

  const settings = {
    type: 'text',
    value: state.value,
    onChange: handleChange,
    placeholder: 'cryptocurrency address',
    autoComplete: 'off',
    autoCorrect: 'off',
    spellCheck: false,
    style: { width: '100%' }
  }

  return (
    <main>
      <Head>
        <title>Cryptocurrency Address Detector</title>
        <meta name="description" content="Detect which cryptocurrency an address corresponds to." />
        <link rel="icon" type="image/png" href="/static/images/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="/static/index.css" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
      </Head>

      <section className="content">
        <h1>cryptaddress</h1>

        <p>Enter an address to detect which cryptocurrency it corresponds to.</p>

        <form onSubmit={handleSubmit}>
          <AutosizeInput {...settings} />
        </form>

        <p className="res">
          {state.response} {(state.image.length > 0) ? <img src={state.image} /> : ''}
        </p>
      </section>

      <aside>
        <nav>
          <a href="https://github.com/k4m4/cryptaddress.now" target="_blank">Source</a>
          <b/>
          <a href="https://zeit.co/now" target="_blank">Hosted on Now</a>
        </nav>
      </aside>
    </main>
  )
}

export default Index
