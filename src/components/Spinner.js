import loading from '../images/loading.gif'

export default function Spinner() {
  return (
    <div className="text-center">
      <img className="my-3" src={loading} alt="loading" />
    </div>
  )
}
