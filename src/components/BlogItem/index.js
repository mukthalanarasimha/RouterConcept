import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {BlogItemElements} = props
  const {id, title, imageUrl, avatarUrl, topic, author} = BlogItemElements

  return (
    <li>
      <Link to={`/blog/${id}`} className="Blog_item_link">
        <div className="total_blogItem">
          <div>
            <img src={imageUrl} alt={topic} className="image_react" />
          </div>
          <div className="topic_name_title">
            <p className="topic_name">{topic}</p>
            <h1>{title}</h1>
            <div className="authorDetails_container">
              <img src={avatarUrl} alt={author} className="authorImage" />
              <p className="author_name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
