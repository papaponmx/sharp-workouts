export const readableDate = (dateTime: string | number | Date) => {
  return (
    new Date(dateTime).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }) ?? ''
  )
}
