import styled from 'styled-components'

export const SeachFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &:placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    outline: 2px solid ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme['gray-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled)hover {
      background: 1px ${(props) => props.theme['blue-500']};
      border-color: 1px ${(props) => props.theme['blue-500']};
      color: ${(props) => props.theme.white};
      transition:
        background-color 0.4s,
        color 04s,
        border-color 0.4s;
    }
  }
`
