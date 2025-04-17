import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, ClouseButton } from './styles'
import { X } from 'phosphor-react'

export function NewTransctionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transacão</Dialog.Title>

        <ClouseButton>
          <X size={24} />
        </ClouseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
