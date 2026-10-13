import Seo from '../components/common/Seo'
import ClientsContent from '../converted/ClientsContent'

export default function Clients() {
  return (
    <>
      <Seo
        title="Clients"
        description="Convey Tech clients and industry partners across infrastructure, RMC, and industrial projects."
      />
      <ClientsContent />
    </>
  )
}
