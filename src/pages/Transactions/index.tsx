import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SeachForm } from './components/SeachForm'
import {
  PrinceHigthlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SeachForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PrinceHigthlight variant="income">
                  R$ 12.000,00
                </PrinceHigthlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburger</td>
              <td>
                <PrinceHigthlight variant="outcome">
                  -R$ 600,00
                </PrinceHigthlight>
              </td>
              <td>Alimentação</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
