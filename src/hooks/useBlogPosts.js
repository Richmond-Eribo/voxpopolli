import {client} from '../utils/contentful'
import {useQuery} from 'react-query'

const blogPosts = async (skipQuery, limitQuery) => {
  const {items} = await client.getEntries({
    content_type: 'blog',
    skip: skipQuery,
    limit: limitQuery,
  })
  return items
}

export default function useBlogPosts(skipQuery = 0, limitQuery = 6) {
  return useQuery('blog', () => blogPosts(skipQuery, limitQuery))
}
