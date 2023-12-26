import { useParams } from "react-router-dom"

export const AppointmentDetail = () => {

  const { id } = useParams()

  return (
    <div>AppointmentDetail { id }</div>
  )
}
