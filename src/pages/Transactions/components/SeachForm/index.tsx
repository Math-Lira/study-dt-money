import { MagnifyingGlass } from 'phosphor-react'
import { SeachFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'

const searchFormShema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormShema>

export function SeachForm() {
  const { fetchTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormShema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SeachFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitted}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SeachFormContainer>
  )
}
