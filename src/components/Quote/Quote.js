import React from "react"
import { useQuoteQuery } from "../../hooks/useQuoteQuery"
import QuoteImg from "../../images/quote.svg"
import { Wrapper, Content, QuoteHover } from "./Quote.styles"

const Quote = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = useQuoteQuery()
  // console.log(data)

  return (
    <Wrapper>
      <Content>
        <QuoteHover src={QuoteImg} alt="quote" />
        <h6>{data.citat1Text}</h6>
        <p>{data.citat1Author}</p>
      </Content>
    </Wrapper>
  )
}

export default Quote
