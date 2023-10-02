export default function formatDateInIST(dateString) {
  const options = {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }
  return new Date(dateString).toLocaleString('en-IN', options)
}
