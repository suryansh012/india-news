export default function genHeading(props) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return capitalizeFirstLetter(
    props === 'india'
      ? 'General'
      : props === 'scienceandtechnology'
      ? 'Science and Technology'
      : props
  )
}
