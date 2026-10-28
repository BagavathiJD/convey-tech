import { useParams } from 'react-router-dom'
import Seo from '../components/common/Seo'
import AggregateFeedingBeltConveyorsContent from '../converted/AggregateFeedingBeltConveyorsContent'
import StorageSilosContent from '../converted/StorageSilosContent'
import SiloAccessoriesContent from '../converted/SiloAccessoriesContent'
import PneumaticCementFeedingContent from '../converted/PneumaticCementFeedingContent'
import PortableConveyorsContent from '../converted/PortableConveyorsContent'
import BrickPlantContent from '../converted/BrickPlantContent'
import ExportsImportsContent from '../converted/ExportsImportsContent'
import SpecialProductsContent from '../converted/CementFlyAshSiloAutomationforBrickPlants'

const productPages = {
  'machine-analysis': {
    title: 'Aggregate Feeding Belt Conveyors',
    description: 'Aggregate feeding belt conveyors for RMC batching plants.',
    Content: AggregateFeedingBeltConveyorsContent,
  },
  'aggregate-feeding-belt-conveyors': {
    title: 'Aggregate Feeding Belt Conveyors',
    description: 'Aggregate feeding belt conveyors for RMC batching plants.',
    Content: AggregateFeedingBeltConveyorsContent,
  },
  'storage-silos': {
    title: 'Storage Silos',
    description: 'Cement and flyash storage silos for RMC batching plants.',
    Content: StorageSilosContent,
  },
  'silo-accessories': {
    title: 'Silo Accessories',
    description: 'Screw conveyors, filters, valves, level indicators, and aeration systems for storage silos.',
    Content: SiloAccessoriesContent,
  },
  'pneumatic-cement-feeding-systems': {
    title: 'Pneumatic Cement Feeding Systems',
    description: 'Pneumatic cement and flyash feeding systems for RMC batching plants.',
    Content: PneumaticCementFeedingContent,
  },
  'readymix-concrete-portable-conveyors': {
    title: 'Readymix Concrete Portable Conveyors',
    description: 'Portable conveyors from batching plant output to transit mixer.',
    Content: PortableConveyorsContent,
  },
  'brick-plant-mini-cement-plant': {
    title: 'Brick Plant / Mini Cement Plant',
    description: 'Feeding systems for brick plants and mini cement plants.',
    Content: BrickPlantContent,
  },
  'exports-imports': {
    title: 'Exports / Imports',
    description: 'Export and import of conveyors, silos, and feeding systems.',
    Content: ExportsImportsContent,
  },
  'special-products': {
    title: 'Special Products',
    description: 'Custom hoppers, chutes, and special fabrications for plant sites.',
    Content: SpecialProductsContent,
  },
}

export default function ServiceDetails() {
  const { slug } = useParams()
  const page = productPages[slug] ?? productPages['aggregate-feeding-belt-conveyors']
  const Content = page.Content

  return (
    <>
      <Seo title={page.title} description={page.description} />
      <Content />
    </>
  )
}
