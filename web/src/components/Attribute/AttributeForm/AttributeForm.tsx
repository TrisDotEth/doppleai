import type { EditAttributeById, UpdateAttributeInput } from 'types/graphql'

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
import type { RWGqlError } from '@redwoodjs/forms'

type FormAttribute = NonNullable<EditAttributeById['attribute']>

interface AttributeFormProps {
  attribute?: EditAttributeById['attribute']
  onSave: (data: UpdateAttributeInput, id?: FormAttribute['id']) => void
  error: RWGqlError
  loading: boolean
}

const AttributeForm = (props: AttributeFormProps) => {
  const onSubmit = (data: FormAttribute) => {
    props.onSave(data, props?.attribute?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAttribute> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="attribute"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Attribute
        </Label>

        <TextField
          name="attribute"
          defaultValue={props.attribute?.attribute}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="attribute" className="rw-field-error" />

        <Label
          name="inUse"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          In use
        </Label>

        <CheckboxField
          name="inUse"
          defaultChecked={props.attribute?.inUse}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="inUse" className="rw-field-error" />

        <Label
          name="profileId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Profile id
        </Label>

        <NumberField
          name="profileId"
          defaultValue={props.attribute?.profileId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="profileId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AttributeForm
