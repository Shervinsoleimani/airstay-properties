import { useSearchParams } from 'react-router-dom'
import LegalPage from '../components/LegalPage'
import fr from '../legal/terms-fr'
import en from '../legal/terms-en'

// /terms shows the French version first; /terms?lang=en shows English.
export default function Terms() {
  const [params] = useSearchParams()
  const english = (params.get('lang') || '').toLowerCase().startsWith('en')
  return <LegalPage doc={english ? en : fr} />
}
