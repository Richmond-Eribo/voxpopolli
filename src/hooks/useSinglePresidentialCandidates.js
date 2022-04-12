import {client} from '../utils/contentful'
import {useQuery} from 'react-query'

const candidateEntryRes = async id => {
  const {items} = await client.getEntries({
    content_type: 'candidate',
    'fields.slug': id,
  })
  return items[0]
}

export default function useSinglePresidentialCandidates(id) {
  return useQuery(['candidates', id], () => candidateEntryRes(id))
}
