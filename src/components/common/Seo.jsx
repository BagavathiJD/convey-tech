import { Helmet } from 'react-helmet-async'

export default function Seo({
  title = 'Convey Tech – Industry & Factory',
  description = 'Full-service manufacturing company delivering quality industrial solutions.',
  canonical,
}) {
  const fullTitle = title.includes('Convey Tech') || title.includes('Induyst') ? title : `${title} | Convey Tech`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
