import * as Dialog from '@radix-ui/react-dialog'
import {
  Overlay,
  Content,
  ClouseButton,
  TransactionType,
  TransaticonButton,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const newTransactionFormShema = z.object({
  description: z.string(),
  prise: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormShema>

export function NewTransctionModal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormShema),
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await new Promise((resolver) => setTimeout(resolver, 2000))
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transacão</Dialog.Title>

        <ClouseButton>
          <X size={24} />
        </ClouseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('prise', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransaticonButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransaticonButton>
                  <TransaticonButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saida
                  </TransaticonButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitted}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
