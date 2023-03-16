import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditProfileById, UpdateProfileInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormProfile = NonNullable<EditProfileById['profile']>

interface ProfileFormProps {
  profile?: EditProfileById['profile']
  onSave: (data: UpdateProfileInput, id?: FormProfile['id']) => void
  error: RWGqlError
  loading: boolean
}

const ProfileForm = (props: ProfileFormProps) => {
  const onSubmit = (data: FormProfile) => {
  
    
    
  
    props.onSave(data, props?.profile?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormProfile> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="user"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User
        </Label>
        
          <TextField
            name="user"
            defaultValue={props.profile?.user}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="user" className="rw-field-error" />

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

export default ProfileForm
