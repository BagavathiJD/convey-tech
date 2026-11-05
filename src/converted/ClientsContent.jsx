import { Link } from 'react-router-dom'

const clients = [
 
  { name: 'ACC', image: 'acc-logo.webp' },
  
  { name: 'Consolidated construction company ltd', image: 'client-cccl.webp' },
  { name: 'Aparna enterprises Ltd', image: 'client-aparna.jpg' },
  { name: 'R.P.P. Infra Projects Limited', image: 'rpp-logo.jpg' },
  { name: 'Emarald construction Ltd', image: 'ecl-logo.jpg' },
  { name: 'S v ready mix concrete', image: 'sv-logo.svg' },
  { name: 'DBL', image: 'dbl-logo.png' },
  { name: 'GMS', image: 'gms-logo.png' },
  { name: 'PC', image: 'p-c-logo.png' },
  { name: 'R.R. Thulasi', image: 'rr-thulasi-logo.png' },
  { name: 'Srinivasa', image: 'srinivasa-logo.png' },
  { name: 'TTK Construction', image: 'ttk-construction-logo.png' },
  { name: 'URC Construction', image: 'urc-construction-image.svg' },
  { name: 'TPK Infra', image: 'tpk-infra-logo.jpg' },
   { name: 'Greaves Cotton Limited', image: 'client-1.png',  },
  { name: 'Unity Infraprojects Limited', image: 'client-2.png' },
  { name: 'Vijay Nirman Company', image: 'client-3.png' },
  { name: 'Saisudhir', image: 'client-4.png' },
  { name: 'Coastal Projects Limited', image: 'client-5.png', },
  { name: 'GD', image: 'client-6.png' },
]

const otherCustomers = [
  { name: 'CONSOLIDATED CONSRUCTIONS CONSORTIUM LIMITED', location: 'CHENNAI', work: 'Schwing stetter’s RMC Batching plant for CP 30 Radial/M1 Swivelling chute/1.25 plant Belt conveyor for handling aggregates of Quantity 15 Nos supplied.' },
  { name: 'SHAKTHI CONSTRUCTIONS LTD', location: 'SALEM', work: 'Greaves Supermix 30 m³ conveyor, silos 100 Ton / Blower etc of 3nos supplied.' },
  { name: 'URC CONSTRUCTIONS LIMITED', location: 'ERODE,TAMILNADU', work: 'Supply of Cement Silo / Fly ash silo, Manual Bag feeding system, Blower System, Screw Conveyor. Aggregate feeding conveyor for 30/60m³ Ajax Fiori RMC plant 20 – 25 Nos Silos.' },
  { name: 'CONSHADE CONSTRUCTIONS PVT LTD', location: 'CHIKMAGALUR(KARNATAKA)', work: 'Supply of Silos Cement / Fly Ash, Silo Accessories, Blower for Simam make.' },
  { name: 'S.V.READYMIX LTD', location: 'MANAPARAI, TRICHY(TAMILNADU)', work: 'Apollo make 30 m³ Silo 100 Ton/ Blower silo accessories etc.' },
  { name: 'CEE DEE YES HOUSING INFRASTRUCTUTD', location: 'CHENNAI', work: 'Revathi equipments Batching plant CP30 conveyor Radial type.' },
  { name: 'APARNA ENTERPRISES LTD', location: 'HYDERABAD', work: 'Supply of M1 plant, 30m³ swing make shuttle Conveyor, Revolving Chute Conveyor, 100,150 Ton Cement Silo, Silo Accessories & Blower of 06 Sets.' },
  { name: 'GREAVES COTTON LTD', location: 'CHENNAI', work: 'Supply of Silos, Silo Accessories, Blower, etc for Batching Plant for greaves make batching plant.' },
  { name: 'VARAHA INFRA LTD', location: 'JODHPUR, RAJASTAN', work: 'Non Foundation 100/150 Ton Vertical Cement / Fly Ash Silos, Manual Bag Feeding machine, Silo Accessories, for Linoff make Batching Plant.' },
  { name: 'SS READYMIX CONCRETE', location: 'NEW DELHI', work: 'Cement / Fly Ash Silos, Silo Accessories, Blower, etc.' },
  { name: 'REVATHI EQUIPMENT LIMITED', location: 'TAMILNADU', work: 'Supply of CP30 Belt Conveyor for various projects of 4 Nos.' },
  { name: '21 ST CENTURY CONCRETE WORKS LTD', location: 'HYDERABAD', work: '100 ton cement silo /80 Ton fly ash silo for RMC Batching plant CP30.' },
  { name: 'BIRLA READY MIX CONCRETE LTD', location: 'TAMILNADU', work: 'Belt Conveyor system for RMC Batching plant CP30 Radial type.' },
  { name: 'VIJAY NIRMAN COMPANY LTD', location: 'VIZAG', work: 'Supply of 100 Ton silos cement feeding system, bag feeding etc.' },
  { name: 'HETERO DRUGS LTD', location: 'VIZAG', work: 'Silos, Silo Accessories, Conveyor, Blower, etc.' },
  { name: 'SRM CIVIL WORKS PVT. LTD.', location: 'TRICHY,TAMILNADU', work: 'Cement Silo 100 Ton, Blower, Silo Accessories.' },
  { name: 'DHANALAKSHMI SRINIVASAN BUILDERS PVT. LTD.', location: 'PERAMBALUR, CHENNAI TAMILNADU', work: 'Supply of Cement Silos, Blower, Silo Accessories.' },
  { name: 'SRI SAS INDUSTRIEES PVT. LTD', location: 'HYDERABAD', work: 'Supply of M1 Plant Belt Conveyor for Schwing Stetter Batching Plant.' },
  { name: 'TECHTRANS CONSTRUCTION INDIA PVT. LTD.', location: 'HYDERABAD', work: 'Supply of Cement Silo, Blower systems & manual Bag Feeding M/C.' },
  { name: 'RPP SELVAM INFRASTRUCTURE PVT. LTD', location: 'ERODE,TAMILNADU', work: 'Supply of CP 30 Belt Conveyor system / cement silo/silo accessories.' },
  { name: 'CHANDRASHEKAR & COMPANY', location: 'THIRUPATHI, ANDHRA PRADESH', work: 'Supply of CP30 Belt Conveyor System.' },
  { name: 'VELSELL RMC LIMITED', location: 'MADURAI,TAMILNADU', work: 'Supply Of CP30 Belt Conveyor.' },
  { name: 'SARVANI RMC LIMITED', location: 'VIJAYAWADA, ANDHRA PRADESH', work: 'Supply of CP 30 Belt Conveyor / 90m³ Inline silo conveyor / silos, etc 03 Sets.' },
  { name: 'ANTHURIUM INFRASTRUCUTRE PVT LIMITED', location: 'HYDERABAD', work: 'Cement / Fly ash Silos, Blower system etc.' },
  { name: 'HARIHARAN FOUNDATION LIMITED', location: 'CHENNAI', work: 'Supply of CP30 Conveyor, Silo For Schwing plant.' },
  { name: 'DHARANI READYMIX', location: 'DINDIGUL,TAMILNADU', work: 'Supply of Schwing Stetter CP30 conveyor / cement / Fly ash silos Blower system etc.' },
  { name: 'VIPSANA INFRA STRUCTURE Pvt. Ltd.', location: 'VIZAGAPATINAM', work: 'Supply of cement /Fly ash CP30 Radial conveyor, Silos, Silo Accessories 02 Sets.' },
  { name: 'VENSAR CONSTRUCTIONS', location: 'HYDERABAD', work: 'Supply of Silo for Ajax Fori Plant CP30, silo accessories etc.' },
  { name: 'SAISUDHIR INFRASTRUCTURE LIMITED', location: 'HYDERABAD', work: 'Supply of CP30 Conveyor, Silo, Screw Conveyor, Filter, Blower & Accessories manual bag feeding m/c M1 plant Conveyor 03 Sets.' },
  { name: 'SK TOOLS', location: 'ERODE,TAMILNADU', work: 'Supply of Silo & Silo Accessories.' },
  { name: 'HRISTHA INFRA Ltd', location: 'HYDERABAD', work: 'Supply of cement / Fly ash silo & silo accessories 02 Sets.' },
  { name: 'KSL CONSTRUCTION Pvt. Ltd.', location: 'HYDERABAD', work: 'Supply of CP30 conveyor / silo etc.' },
  { name: 'PNS EARTH MOVERS', location: 'TRICHY,TAMILNADU', work: 'Supply of CP30 Radial conveyor / cement, Fly ash silos / Blower systems etc.' },
  { name: 'P&C CONSTRUCTIONS Ltd.', location: 'CHENNAI', work: 'Supply of cement / Fly ash silos, silo accessories Blower system etc.' },
  { name: 'SAHARA RMC LTD', location: 'TRIPATHI', work: 'Supply of 150 Ton Cement / Fly Ash Silo, M1 plant Conveyor, Blower, etc.' },
  { name: 'KCP PROJECTS LTD', location: 'HYDERABAD', work: 'Silos, Silo Accessories, Blower, etc.' },
  { name: 'ABIMAANI CONCRETE INDUSTRIES', location: 'BANGALORE', work: 'Supply of CP30 Radial Conveyor / Cement, Fly ash Silo/ Blower systems etc.' },
  { name: 'ARUL JOTHI CONSTRUCTIONS', location: 'CHENNAI', work: 'Supply of CP30 conveyor, Blower & Silo Accessories / cement / Fly ash silo etc 02 Sets.' },
  { name: 'PKR PROJECTS & ENGGINEERING', location: 'VISAKHAPATNAM', work: 'Supply of Fly Ash Silo / Cement Silos / Blower system etc.' },
  { name: 'YASH REEDYMIX CONCRETE', location: 'BORISARI, MUMBAI', work: 'Supply of 30 m³ conveyor/Silo/Silo Accessories, etc of 3 sets.' },
  { name: 'COSTAL PROJECTS LTD', location: 'HYDRABAD', work: 'Schwing H 1.25 m³ Aggregate Conveyor, Silo, Silo accessories, Blower etc of 03 Sets.' },
  { name: 'BHOOMI GEO ENGINEERING LTD', location: 'BANGALORE', work: 'Silos/ Silo accessories/ Blowers, etc.' },
  { name: 'PALANICHAMY BRICKS', location: 'MADURAI, TAMIL NADU', work: 'Fly ash bricks plant Silo 100/150 Ton, Blower, Silo accessories, etc.' },
  { name: 'KRISHNA MURTHY & CO', location: 'CHENNAI', work: 'M1 plant (60m3) conveyor/Silos/Blower, etc.' },
  { name: 'ABIR INFRA STRUCTURES LTD', location: 'HYDRABAD', work: 'Silo/ Silo accessories/ blower of 2 sets supplied.' },
  { name: 'KGT GROUP COMPANY', location: 'SRILANKA(export order)', work: 'Greaves Supermix 30m3 conveyor.' },
  { name: 'NAPC LTD', location: 'ANNASALAI, CHENNAI', work: 'Silos 100 Ton, Silo Accessories, Blower, etc 03 Sets.' },
  { name: 'SPL INFRA LTD', location: 'SANTHOME, CHENNAI', work: 'Silos, Silo Accessories, M1 Plant / CP 30 Belt Conveyor, Blower – 04 Sets.' },
  { name: 'M + W GROUP INDIA PVT LTD', location: 'PERIYAPALAYAN, CHENNAI', work: 'Supply of M1 plant Rotary Chute Conveyor.' },
  { name: 'RSV CONSTRUCTIONS PVT LTD', location: 'NELLORE, ANDHRA PRADESH', work: 'Supply of 30m³ Conveyor, Silos, Silo Accessories, Blower, etc for Greaves 30m³ Plant.' },
  { name: 'ASTER INFRA TECH LTD', location: 'ECC DIVISION, CHENNAI', work: 'Silos, Silo Accessories, Blower, etc.' },
  { name: 'PVN CONSTRUCTION LTD', location: 'ERODE, TAMILNADU', work: 'Supply of Blower, Silos, etc.' },
  { name: 'LANXIN ENGINEERING PVT LTD', location: 'CHENNAI', work: 'Supply of Silos, Silo Accessories, Blower for Universal make 20m³ Batching Plant.' },
  { name: 'RR THULASI BUILDERS PVT LTD', location: 'ERODE, TAMILNADU', work: 'Silos, Silo Accessories, Blower for Ajax Fiori 20m³ Batching Plant (04 Set).' },
  { name: 'CETHAR CONSTRUCTION LTD', location: 'TRICHY, TAMILNADU', work: 'CP 30 Conveyor, Silos, Blower, etc.' },
  { name: 'BHASKAR CEMENTS PVT LTD', location: 'KARUR, TAMILNADU', work: 'Supply of 100/150 Ton Cement/ Fly Ash Silos, Silo Accessories, Blower, etc for Cement Plant.' },
  { name: 'AAROORAN CEMENTS PVT LTD', location: 'TRICHY, TAMILNADU', work: 'Supply of 100/150 Ton Cement/ Fly Ash Silos, Silo Accessories, Blower, etc for Cement Plant.' },
  { name: 'ASIA ENGINEERING LTD', location: 'POONAMALLE, CHENNAI', work: 'Supply of 100/150 Ton Cement/ Fly Ash Silos, Silo Accessories, Blower, etc for Cement Plant.' },
  { name: 'BARATH PULVERIZERS & CEMENTS PVT LTD', location: 'SATHIYAVEDU, ANDHRA PRADESH', work: 'Supply of 100/150 Ton Cement/ Fly Ash Silos, Silo Accessories, Blower, etc for Cement Plant.' },
  { name: 'COROMANDAL ENGINEERING LTD', location: 'MURUGAPPA GROUPS, CHENNAI', work: 'Supply of Silo, Silo Accessories, Blower, etc.' },
  { name: 'EMARALD CONSTRUCTIONS PVT LTD', location: 'ERODE, TAMILNADU', work: 'Silo, Silo Accessories, Blower for 20m³ Ajax Fiori plant.' },
  { name: 'ERA INFRA ENGINEERING LTD', location: 'GURGOAN, NEWDELHI', work: 'Supply of Silo, Silo Accessories, Blower, For Metro Project-Cochin.' },
  { name: 'ABHIRAM INFRAPROJECTS PVT LTD', location: 'BANGALORE', work: 'CP 30 Compartment Partition Bin.' },
  { name: 'VIJAY NIRMAN COMPANY PVT LTD', location: 'BANGALORE', work: 'Silo, Silo Accessories, Blower, Solid Block Conveyor Systems.' },
  { name: 'KPC PROJECTS LTD', location: 'KALPAKKAM, CHENNAI', work: 'Silo, Silo Accessories, Blower etc.' },
  { name: 'NEW CONCRETE INDIA PVT LTD', location: 'CHENNAI', work: 'Supply of Screw Conveyor.' },
  { name: 'SIREX TILES PVT LTD', location: 'THENI, TAMILNADU', work: 'Supply of Automation Cement Handling System for Tiles Factory.' },
]

export default function ClientsContent() {
  return (
    <>
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">Clients</h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <div className="pbmit-breadcrumb-inner">
                  <span>
                    <Link to="/" className="home">
                      <span>Home</span>
                    </Link>
                  </span>
                  <span className="sep"></span>
                  <span>
                    <span className="post-root post post-post current-item"> Clients</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="section-xl team-section-one pbmit-column-four clients-page-section">
          <div className="container">
            <div className="pbmit-heading-subheading text-center">
              <h4 className="pbmit-subtitle">Our Clients</h4>
              <h2 className="pbmit-title">
                Companies that trust
                <br /> our engineering
              </h2>
            </div>
            <div className="row g-4">
              {clients.map((client) => (
                <div className="col-md-6 col-lg-3" key={client.image}>
                  <article className="pbmit-team-style-1 clients-page-card">
                    <div className="pbminfotech-post-item">
                      <div className="pbmit-featured-wrap">
                        <div className="pbmit-featured-inner">
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src={`/images/convey-tech/${client.image}`}
                                className="img-fluid"
                                alt={client.name}
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-content">
                        <h3 className="pbmit-team-title">{client.name}</h3>
                        {client.category && (
                          <div className="pbminfotech-box-team-position">{client.category}</div>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
            <section className="other-customers-section mt-5" aria-labelledby="other-customers-title">
              <div className="pbmit-heading-subheading text-center">
                <h4 className="pbmit-subtitle">Project References</h4>
                <h2 className="pbmit-title" id="other-customers-title">Our Other Customers</h2>
              </div>
              <div className="row g-4">
                {otherCustomers.map((customer, index) => (
                  <div className="col-md-6 col-lg-4" key={`${customer.name}-${index}`}>
                    <article className="other-customer-card h-100">
                      <div className="other-customer-card-heading">
                        <span className="other-customer-number">{String(index + 1).padStart(2, '0')}</span>
                        <span className="other-customer-location">{customer.location}</span>
                      </div>
                      <h3 className="other-customer-name">{customer.name}</h3>
                      <p className="other-customer-work">{customer.work}</p>
                    </article>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  )
}
