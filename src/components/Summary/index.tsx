import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#8DD703  " />
        </header>
        <strong>R$ 12.000,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#CA1921" />
        </header>
        <strong>R$ 600,00</strong>
      </SummaryCard>
      <SummaryCard variant="blue">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$ 11.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
