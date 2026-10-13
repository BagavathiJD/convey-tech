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
      { label: 'Aggregate Feeding Belt Conveyors', to: '/services/aggregate-feeding-belt-conveyors' },
      { label: 'Storage Silos', to: '/services/storage-silos' },
      { label: 'Silo Accessories', to: '/services/silo-accessories' },
      { label: 'Pneumatic Cement Feeding Systems', to: '/services/pneumatic-cement-feeding-systems' },
      { label: 'Readymix Concrete Portable Conveyors', to: '/services/readymix-concrete-portable-conveyors' },
      { label: 'Brick Plant / Mini Cement Plant', to: '/services/brick-plant-mini-cement-plant' },
      { label: 'Exports / Imports', to: '/services/exports-imports' },
      { label: 'Special Products', to: '/services/special-products' },
    ],
  },







  {
    label: 'Gallery',
    to: '/portfolio',
    /*children: [{ label: '', to: '/portfolio' }],*/
  },
  { label: 'Clients', to: '/clients' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
]
