import {Component} from 'react'
import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {
    BlogListComplete: [],
    isLoader: true,
  }

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')

    const data = await response.json()
    const updatedBlogList = data.map(eachBlogList => ({
      id: eachBlogList.id,
      title: eachBlogList.title,
      imageUrl: eachBlogList.image_url,
      avatarUrl: eachBlogList.avatar_url,
      author: eachBlogList.author,
      topic: eachBlogList.topic,
    }))
    this.setState({BlogListComplete: updatedBlogList})
    this.setState({isLoader: false})
  }

  render() {
    const {BlogListComplete, isLoader} = this.state
    return isLoader ? (
      <Loader type="TailSpin" color="black" />
    ) : (
      <ul>
        {BlogListComplete.map(eachBlog => (
          <BlogItem key={eachBlog.id} BlogItemElements={eachBlog} />
        ))}
      </ul>
    )
  }
}

export default BlogList
