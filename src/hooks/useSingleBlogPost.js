import {client} from '../utils/contentful'
import {useQuery} from 'react-query'

const blogPost = async slug => {
  const {items} = await client.getEntries({
    content_type: 'blog',
    'fields.slug': slug,
  })
  return items[0]
}

export default function useSingleBlogPost(slug) {
  return useQuery([slug, 'blog'], () => blogPost(slug))
}
