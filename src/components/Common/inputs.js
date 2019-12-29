import styled from 'styled-components'
import * as gs from 'utils/globalStyles'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: ${gs.spacing.normal};

  & div {
    flex-grow: 1;
  }
`

export const InputError = styled.p`
  color: ${gs.colours.error.default};
  flex-basis: 100%;
  opacity: 0;
  transform: translateY(-7px);
  margin-top: ${gs.spacing.small};
  transition: all ${gs.transitions.fast};

  ${({visible}) => visible && `
    opacity: 1;
    transform: translateY(0px);
  `}
`

export const Label = styled.label`
  color: ${gs.colours.black};
  line-height: 40px;
  padding-right: ${gs.spacing.large};
  font-size: ${gs.font.sizes.normal};
  min-width: 120px;
`

export const Select = styled.select`
  font-size: ${gs.font.sizes.normal};
  font-family: ${gs.font.families.normal};
  height: 40px;
  background: ${gs.colours.white};
  color: ${gs.colours.black};
  border: 1px solid ${gs.colours.fadedBlack};
  width: 100%;
  border-radius: ${gs.radius.small};
  padding: 0 ${gs.spacing.small};

  &:focus {
    border: 1px solid ${gs.colours.primary.default};
    background: ${gs.colours.primary.tinted};
  }

  ${({hasError}) => hasError && `
    border: 1px solid ${gs.colours.error.default};
    background: ${gs.colours.error.tinted};
  `}
`

export const Input = styled.input`
  font-size: ${gs.font.sizes.normal};
  font-family: ${gs.font.families.normal};
  height: 40px;
  background: ${gs.colours.white};
  color: ${gs.colours.black};
  border: 1px solid ${gs.colours.fadedBlack};
  width: 100%;
  border-radius: ${gs.radius.small};
  padding: 0 ${gs.spacing.small};

  &:focus {
    border: 1px solid ${gs.colours.primary.default};
    background: ${gs.colours.primary.tinted};
  }

  ${({hasError}) => hasError && `
    border: 1px solid ${gs.colours.error.default};
    background: ${gs.colours.error.tinted};
  `}
`

export const Textarea = styled.textarea`
  font-size: ${gs.font.sizes.normal};
  font-family: ${gs.font.families.normal};
  background: ${gs.colours.white};
  color: ${gs.colours.black};
  border: 1px solid ${gs.colours.fadedBlack};
  width: 100%;
  border-radius: ${gs.radius.small};
  padding: ${gs.spacing.small};

  &:focus {
    border: 1px solid ${gs.colours.primary.default};
    background: ${gs.colours.primary.tinted};
  }

  ${({hasError}) => hasError && `
    border: 1px solid ${gs.colours.error.default};
    background: ${gs.colours.error.tinted};
  `}
`