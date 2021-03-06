import { format, isSameWeek } from "date-fns"

export default date => {
  if (isSameWeek(date, new Date())) return format(date, "dddd, h A")

  return format(date, "MMMM D, h A")
}
