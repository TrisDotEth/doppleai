import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditPromptById, UpdatePromptInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormPrompt = NonNullable<EditPromptById['prompt']>

interface PromptFormProps {
  prompt?: EditPromptById['prompt']
  onSave: (data: UpdatePromptInput, id?: FormPrompt['id']) => void
  error: RWGqlError
  loading: boolean
}

const PromptForm = (props: PromptFormProps) => {
  const onSubmit = (data: FormPrompt) => {
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.prompt?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPrompt> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="prompt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prompt
        </Label>
        
          <TextField
            name="prompt"
            defaultValue={props.prompt?.prompt}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="prompt" className="rw-field-error" />

        <Label
          name="isUse"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is use
        </Label>
        
          <CheckboxField
            name="isUse"
            defaultChecked={props.prompt?.isUse}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="isUse" className="rw-field-error" />

        <Label
          name="profileId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Profile id
        </Label>
        
          <NumberField
            name="profileId"
            defaultValue={props.prompt?.profileId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="profileId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PromptForm
