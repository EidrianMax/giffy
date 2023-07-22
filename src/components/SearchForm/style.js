import styled from '@emotion/styled'

export const StyledSearchForm = styled.form`
  border: 1px solid var(--text-1, #f2f0ff);
  border-radius: var(--border-radius);
  background-color: var(--white);
  display: inline-flex;
  justify-content: space-between;

  input, select {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    border: none;
    border-radius: inherit;
    padding: 0.5rem 0;

    :focus-visible, :focus {
      outline: none;
    }
  }

  input {
    padding-left: 1rem
  }

  select:last-child {
    padding-right: 1rem ;
  }
`
