import { Studio } from 'sanity'
import { Helmet } from 'react-helmet-async'
import config from '../sanity.config'

export default function AdminStudio() {
  return (
    <div className="h-screen max-h-screen overflow-hidden">
      <Helmet>
        <title>CMS Studio | Neotech Solutions</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Studio config={config} />
    </div>
  )
}
