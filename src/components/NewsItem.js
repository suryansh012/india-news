import Badge from './Badge'
import formatDateInIST from '../utils/formatDate'
import notFound from '../images/notFound.jpg'

const NewsItem = (props) => {
  let { element } = props
  let title = element.name ? element.name : ''
  let description = element.description ? element.description : ''
  let imageUrl = element.image?.thumbnail.contentUrl
  let newsUrl = element.url
  let date = element.datePublished
  let source = element.provider[0]?.name

  return (
    <div className="my-3">
      <div className="card mx-2">
        <Badge source={source} />
        <img
          src={!imageUrl ? notFound : imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body" style={{ padding: '4%' }}>
          <h6 className="card-title">
            {title.length > 90 ? title.slice(0, 90) + '...' : title}
          </h6>
          <p className="card-text">
            {description.length > 120
              ? description.slice(0, 120) + '...'
              : description}
          </p>
          <p className="card-text">
            <small className="text-muted">{formatDateInIST(date)}</small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
