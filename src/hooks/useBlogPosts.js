import {client} from '../utils/contentful'
import {useQuery} from 'react-query'

const blogPosts = async skipQuery => {
  const {items} = await client.getEntries({
    content_type: 'blog',
    skip: skipQuery,
    limit: 6,
  })
  return items
}

export default function useBlogPosts(skipQuery) {
  return useQuery('blog', () => blogPosts(skipQuery))
}
