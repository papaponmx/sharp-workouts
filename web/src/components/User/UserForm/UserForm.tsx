import {
  DatetimeLocalField,
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextField,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="">
      <Form
        className="text-gray-100 grid grid-cols-1 gap-2 p-4"
        onSubmit={onSubmit}
        error={props.error}
      >
        <FormError
          error={props.error}
          wrapperClassName="p-4 bg-gray-200 text-red-500 border-2 border-red-500 rounded my-4 mx-0 "
          titleClassName="my-0 font-semibold"
          listClassName="mt-2 list-disc	list-inside"
        />

        <Label
          name="email"
          className="text-gray-100"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <TextField
          disabled
          name="email"
          defaultValue={props.user?.email}
          className="text-gray-100 p-2 rounded"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="email" className="rw-field-error" />

        <Label
          name="name"
          className="text-gray-100"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.user?.name}
          className="text-gray-100 p-2 rounded bg-gray-900"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="registerDate"
          className="text-gray-100"
          errorClassName="rw-label rw-label-error"
        >
          Register date
        </Label>
        <DatetimeLocalField
          disabled
          name="registerDate"
          defaultValue={formatDatetime(props.user?.registerDate)}
          className="text-gray-100 p-2 rounded"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="registerDate" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
