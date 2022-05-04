import {client} from '../utils/contentful'
import {useQuery} from 'react-query'

const candidatesEntriesRes = async () => {
  const {items} = await client.getEntries({
    content_type: 'candidate',
  })
  return items
}

export default function usePresidentialCandidates() {
  return useQuery('candidate', candidatesEntriesRes)
}
