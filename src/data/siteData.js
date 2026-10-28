export const site = {
  name: 'Convey Tech',
  phoneDisplay: '6381108876 / 6379801161',
  phoneHref: 'tel:6381108876',
  phoneSecondaryDisplay: '6379801161',
  phoneSecondaryHref: 'tel:6379801161',
  phones: [
    { display: '6381108876', href: 'tel:6381108876' },
    { display: '6379801161', href: 'tel:6379801161' },
  ],
  location: 'Ambattur, Chennai',
  email: 'conveytech@yahoo.co.in',
  address: 'No.67, F2, Vaishnavi Jeswanth Apartments Ambattur, Chennai 600053',
  footerPhone: '6381108876 / 6379801161',
  tagline: 'We are creative and ready for challenges!',
}

export const navItems = [
  {
    label: 'Home',
    to: '/',

  },
  {
    label: 'About',
    to: '/about',

  },
  {
    label: 'Products',
    to: '/services',
    children: [
      { label: 'Aggregate Feeding Belt Conveyors', to: '/products/aggregate-feeding-belt-conveyors' },
      { label: 'Horizondal & Vertical Cement/Flyash/Lime Powder Storage Silos', to: '/products/storage-silos' },
      { label: 'Silo Accessories', to: '/products/silo-accessories' },
      { label: 'Pneumatic Cement Feeding Systems', to: '/products/pneumatic-cement-feeding-systems' },
      { label: 'Readymix Concrete Portable Conveyors', to: '/products/readymix-concrete-portable-conveyors' },
      { label: '2/3/4 Bin Batching Plant For Flyask Brick Plant / AAC Brick Plant', to: '/products/brick-plant-mini-cement-plant' },
      { label: 'Cement & Flyash Silo Automation for Brick Plant', to: '/products/cement-flyash-silo-automation-for-brick-plant' },
    ],
  },







  {
    label: 'Gallery',
    to: '/portfolio',
    /*children: [{ label: '', to: '/portfolio' }],*/
  },
  { label: 'Clients', to: '/clients' },
  // { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
]
