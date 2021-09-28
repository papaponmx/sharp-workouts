import {
  Form,
  FormError,
  FieldError,
  Label,
  CheckboxField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const WorkoutDayForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.workoutDay?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="didWorkout"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Did workout
        </Label>
        <CheckboxField
          name="didWorkout"
          defaultChecked={props.workoutDay?.didWorkout}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="didWorkout" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>
        <TextField
          name="userId"
          defaultValue={props.workoutDay?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="userId" className="rw-field-error" />

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

export default WorkoutDayForm
