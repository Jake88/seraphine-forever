import React, {useEffect, useState, useReducer} from 'react'
import reduce from 'lodash/reduce'

import { PATHS } from 'utils/paths'
import { orderActions } from 'reducers/order.reducer'
import formReducer, { formSelectors, formActions } from 'reducers/form.reducer'
import {EDITABLE_TYPES} from 'products/product.type'
import ProgressBar from 'components/ProgressBar'
import {
  Panel,
  Title,
  Blurb,
  Paragraph,
  ButtonRow,
  LinkButton
} from 'components/common'
import {
  InputWrapper,
  Label,
  InputError,
  Select,
  Textarea
} from 'components/common/inputs'
import {
  PlainInput,
  DateInput
} from 'components/common/Input'

const steps = [
  {label: 'Pick a product', complete: true},
  {label: 'Style it', complete: true},
  {label: 'Personalise it', active: true},
  {label: 'Order it'}
]

export default ({product, orderReducerInterface}) => {
  const [loading, setLoading] = useState(true)
  const [formState, formDispatch] = useReducer(formReducer, {})

  useEffect(() => {
    formDispatch(formActions.initilise(
      reduce(product.config.editableConfig, (accumulator, {id}) => {
        accumulator.push(id)
        return accumulator
      }, [])
    ))
    setLoading(false)
  }, [product])

  if (loading) return null

  return (
    <>
      <ProgressBar steps={steps}/>
      <Panel>
        <Title>Personalise Details</Title>
        <Blurb>Make your design truely bespoke by personalising the details here.</Blurb>
        {product.config.editableConfig.map(({type, id, required, placeholder}) => {
          const inputProps = {
            id,
            fieldStatus: formSelectors.getField(formState, id),
            required,
            placeholder,
            value: orderReducerInterface[0].customOptions.details[id],
            formDispatch,
            onChange: detail => {
              orderReducerInterface[1](
              orderActions.updateDetails(id, detail)
              )
            }
          }
          
          const displayInput = () => {
            switch (type) {
              case EDITABLE_TYPES.TEXT:
                return <PlainInput {...inputProps} />
              case EDITABLE_TYPES.NUMBER:
                return <PlainInput {...inputProps} type="number" />
              case EDITABLE_TYPES.DATE:
                return <DateInput {...inputProps} />
              case EDITABLE_TYPES.TEXTAREA:
                  return null 
            }
          }

          return (
            <InputWrapper key={`input_${id}`}>
              <Label>{id}</Label>
              <div>
                {displayInput()}
                <InputError visible={formSelectors.getError(formState, id)}>
                  {formSelectors.getError(formState, id)}
                </InputError>
              </div>
            </InputWrapper>
          )
        })}
        <Blurb>
          Sometimes you want more precise detail, or perhaps the design needs to be altered entirely.<br/>
          If so, please add any additional comments and we can work together to create exactly what you want.<br/>
          <br/>
          <Paragraph>Please note, depending on the complexity of these requests, there may be additional costs.</Paragraph>
        </Blurb>

        <InputWrapper key={`input_comments`}>
          <Label>Comments</Label>
          <div>
            <Textarea
              id='comments'
              placeholder='Supply any additional information you have here'
              value={orderReducerInterface[0].customOptions.details.comments}
              onChange={e => {
                orderReducerInterface[1](orderActions.updateDetails('comments', e.target.value))
              }}
            />
          </div>
        </InputWrapper>

        <ButtonRow>
          <div>
            <LinkButton secondary="true" to={PATHS.COLOUR_PICKER.to(product.config.sfid)}>Change colours</LinkButton>
          </div>
          <LinkButton to={PATHS.CONFIRM.to(product.config.sfid)}  disabled={!formSelectors.isFormValid(formState)}>Summary</LinkButton>
        </ButtonRow>
      </Panel>
    </>
  )
}