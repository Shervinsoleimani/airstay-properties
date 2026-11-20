import { useSearchParams } from 'react-router-dom'
import LegalPage from '../components/LegalPage'
import fr from '../legal/privacy-fr'
import en from '../legal/privacy-en'

// /privacy shows the French version first; /privacy?lang=en shows English.
export default function Privacy() {
  const [params] = useSearchParams()
  const english = (params.get('lang') || '').toLowerCase().startsWith('en')
  return <LegalPage doc={english ? en : fr} />
}
