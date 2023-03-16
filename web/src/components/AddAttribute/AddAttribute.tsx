import { PlusSmallIcon } from '@heroicons/react/24/outline'
import type { EditAttributeById } from 'types/graphql'
import type { CreateAttributeInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  NumberField,
  Submit,
  useForm,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

type FormAttribute = NonNullable<EditAttributeById['attribute']>

interface AttributeFormProps {
  attribute?: EditAttributeById['attribute']
  error: RWGqlError
  loading: boolean
  profile: any
}

const CREATE_ATTRIBUTE_MUTATION = gql`
  mutation CreateAttributeMutation($input: CreateAttributeInput!) {
    createAttribute(input: $input) {
      id
    }
  }
`

const AddAttribute = (props: AttributeFormProps) => {
  const formMethods = useForm()
  const [createAttribute, { loading, error }] = useMutation(
    CREATE_ATTRIBUTE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Attribute created')
        formMethods.reset()
      },
      onError: (error) => {
        toast.error(error.message)
      },
      refetchQueries: ['FindProfileByIdProfilePage'],
    }
  )

  const onSubmit = (input: CreateAttributeInput) => {
    createAttribute({ variables: { input } })
  }

  return (
    <div className="">
      <Form<FormAttribute>
        onSubmit={onSubmit}
        error={props.error}
        formMethods={formMethods}
      >
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <Label
          name="attribute"
          className="rw-label hidden"
          errorClassName="rw-label rw-label-error hidden"
        >
          Attribute
        </Label>
        <TextField
          name="attribute"
          placeholder="+"
          defaultValue={props.attribute?.attribute}
          // className="border-0 border-primary bg-black text-white shadow-sm focus:rounded-md focus:border-b focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          className="border-0 border-primary bg-black text-white shadow-sm focus:border-b focus:border-primary focus:ring-black"
          errorClassName=""
          validation={{ required: true }}
        />
        <FieldError name="attribute" className="rw-field-error hidden" />
        <CheckboxField
          name="inUse"
          defaultChecked={true}
          className="rw-input hidden"
          errorClassName="rw-input rw-input-error hidden"
        />
        <NumberField
          name="profileId"
          defaultValue={props.profile.id}
          className="rw-input hidden text-black"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <Submit disabled={props.loading} className="">
          <PlusSmallIcon className="invisible ml-[2px] inline h-5 w-5 group-hover/menu:visible " />
        </Submit>
      </Form>
    </div>
  )
}

export default AddAttribute
