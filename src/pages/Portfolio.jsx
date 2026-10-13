import Seo from '../components/common/Seo'
import PortfolioContent from '../converted/PortfolioContent'

export default function Portfolio() {
  return (
    <>
      <Seo title="Gallery" description="Convey Tech project gallery — conveyors, silos, and plant installations." />
      <PortfolioContent />
    </>
  )
}
