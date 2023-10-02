export default function Badge(props) {
  const source = props.source
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: '0',
      }}
    >
      <span className="badge rounded-pill bg-danger"> {source} </span>
    </div>
  )
}
