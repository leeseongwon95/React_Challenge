import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loader from '../../Components/Loader'
import Prices from '../../Components/Prices'

const Container = styled.div``

const PricesPresenter = ({ results, error, loading }) => (
  <Container>
    {loading ? (
      <Loader />
    ) : (
      results.map((result, idx) => (
        <Prices
          key={result.name + idx}
          name={result.name}
          symbol={result.symbol}
          price={result.quotes.USD.price}
        />
      ))
    )}
  </Container>
)

PricesPresenter.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      symbol: PropTypes.string,
      price: PropTypes.number,
    }),
  ),
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
}

export default PricesPresenter
