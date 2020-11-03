import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 400px;
  font-size: 16px;
  padding-bottom: 10px;
  margin-bottom: 10px;
`

const Rate = styled.div`
  font-weight: 600;
  padding-right: 5px;
`

const Content = styled.div`
  font-size: 16px;
`

const Coins = ({ rank, symbol, name }) => (
  <Container>
    <Rate>#{rank}</Rate>
    <Content rank={rank}>
      {name} / {symbol}
    </Content>
  </Container>
)

Coins.propTypes = {
  rank: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Coins
