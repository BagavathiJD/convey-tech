import { useEffect } from 'react'
import '../styles/projects.css'

export default function ProjectsContent() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.projects-page .filter-btn')
    const rows = document.querySelectorAll('.projects-page .project-row')

    const onClick = function () {
      buttons.forEach(function (b) {
        b.classList.remove('active')
      })
      this.classList.add('active')

      const filter = this.getAttribute('data-filter')

      rows.forEach(function (row) {
        const tags = row.getAttribute('data-tags')
        if (filter === 'all' || tags.indexOf(filter) !== -1) {
          row.classList.remove('hidden')
        } else {
          row.classList.add('hidden')
        }
      })
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', onClick)
    })

    return () => {
      buttons.forEach(function (btn) {
        btn.removeEventListener('click', onClick)
      })
    }
  }, [])

  return (
    <div className="page-content projects-page">
      <section className="projects-banner">
        {/* <div className="eyebrow">Our Track Record</div> */}
        <h1>
          Projects <span>Delivered</span>
          <br />
          Across India
        </h1>
        <p>
          A record of silo, conveyor and batching plant systems supplied and commissioned for leading construction and RMC companies — from Chennai to Mumbai, and beyond.
        </p>
        <div className="projects-stats">
          <div>
            10+<small>Clients on record</small>
          </div>
          <div>
            100+<small>Units supplied</small>
          </div>
          <div>
            4<small>States &amp; export markets</small>
          </div>
        </div>
      </section>

      <div className="projects-filters">
        <span>Filter</span>
        <button type="button" className="filter-btn active" data-filter="all">
          All projects
        </button>
        <button type="button" className="filter-btn" data-filter="silo">
          Silos
        </button>
        <button type="button" className="filter-btn" data-filter="conveyor">
          Conveyors
        </button>
        <button type="button" className="filter-btn" data-filter="plant">
          Batching plants
        </button>
        <button type="button" className="filter-btn" data-filter="blower">
          Blower systems
        </button>
        <button type="button" className="filter-btn" data-filter="export">
          Export orders
        </button>
      </div>

      <div className="projects-list">
        <h2>
          Client Projects
        </h2>

        <div className="project-row" data-tags="conveyor">
          <div className="num">01</div>
          <div>
            <div className="client">Consolidated Constructions Consortium Limited</div>
            <div className="location">Chennai, Tamil Nadu</div>
          </div>
          <div>
            <div className="scope">Schwing Stetter's RMC batching plant for CP 30 Radial / M1 swivelling chute / 1.25 plant belt conveyor — 15 units supplied.</div>
            <div className="tags">
              <span className="tag-conveyor">Conveyor</span>
            </div>
          </div>
        </div>

        <div className="project-row" data-tags="silo conveyor blower plant">
          <div className="num">02</div>
          <div>
            <div className="client">URC Constructions Limited</div>
            <div className="location">Erode, Tamil Nadu</div>
          </div>
          <div>
            <div className="scope">Cement silo / fly ash silo, manual bag feeding system, blower system, screw conveyor and aggregate feeding conveyor for 30/60 m³ Ajax Fiori RMC plant — 20–25 silo units.</div>
            <div className="tags">
              <span className="tag-silo">Silo</span>
              <span className="tag-conveyor">Conveyor</span>
              <span className="tag-blower">Blower system</span>
              <span className="tag-plant">Batching plant</span>
            </div>
          </div>
        </div>

        <div className="project-row" data-tags="silo conveyor blower plant">
          <div className="num">03</div>
          <div>
            <div className="client">Aparna Enterprises Ltd</div>
            <div className="location">Hyderabad, Telangana</div>
          </div>
          <div>
            <div className="scope">M1 plant, 30 m³ swing-make shuttle conveyor, revolving chute conveyor, 100/150 ton cement silo, silo accessories and blower — 6 complete sets.</div>
            <div className="tags">
              <span className="tag-silo">Silo</span>
              <span className="tag-conveyor">Conveyor</span>
              <span className="tag-blower">Blower system</span>
              <span className="tag-plant">Batching plant</span>
            </div>
          </div>
        </div>

        <div className="project-row" data-tags="silo blower plant">
          <div className="num">04</div>
          <div>
            <div className="client">Greaves Cotton Ltd</div>
            <div className="location">Chennai, Tamil Nadu</div>
          </div>
          <div>
            <div className="scope">Silos, silo accessories and blower for a Greaves-make batching plant.</div>
            <div className="tags">
              <span className="tag-silo">Silo</span>
              <span className="tag-blower">Blower system</span>
              <span className="tag-plant">Batching plant</span>
            </div>
          </div>
        </div>

        <div className="project-row" data-tags="silo plant">
          <div className="num">05</div>
          <div>
            <div className="client">Varaha Infrastructure Ltd</div>
            <div className="location">Jodhpur, Rajasthan</div>
          </div>
          <div>
            <div className="scope">Non-foundation 100/150 ton vertical cement / fly ash silos, manual bag feeding machine and silo accessories for a Linoff-make batching plant.</div>
            <div className="tags">
              <span className="tag-silo">Silo</span>
              <span className="tag-plant">Batching plant</span>
            </div>
          </div>
        </div>

        <div className="project-row" data-tags="conveyor silo blower">
          <div className="num">06</div>
          <div>
            <div className="client">Coastal Projects Ltd</div>
            <div className="location">Hyderabad, Telangana</div>
          </div>
          <div>
            <div className="scope">Schwing H 1.25 m³ aggregate conveyor, silo and silo accessories, blower — 3 sets.</div>
            <div className="tags">
              <span className="tag-conveyor">Conveyor</span>
              <span className="tag-silo">Silo</span>
              <span className="tag-blower">Blower system</span>
            </div>
          </div>
        </div>

        <div className="project-row" data-tags="conveyor export">
          <div className="num">07</div>
          <div>
            <div className="client">KGT Group Company</div>
            <div className="location">Sri Lanka — export order</div>
          </div>
          <div>
            <div className="scope">Greaves Supermix 30 m³ conveyor.</div>
            <div className="tags">
              <span className="tag-conveyor">Conveyor</span>
              <span className="tag-export">Export order</span>
            </div>
          </div>
        </div>

        <div className="project-row" data-tags="silo conveyor blower">
          <div className="num">08</div>
          <div>
            <div className="client">Shapoorji & Pallonji Ltd</div>
            <div className="location">Church Gate, Mumbai</div>
          </div>
          <div>
            <div className="scope">Cement / fly ash silo of 150/100/50 ton capacity, CP 30/M1 belt conveyor, silo accessories and blower — 30–40 units supplied.</div>
            <div className="tags">
              <span className="tag-silo">Silo</span>
              <span className="tag-conveyor">Conveyor</span>
              <span className="tag-blower">Blower system</span>
            </div>
          </div>
        </div>

        <div className="project-row" data-tags="conveyor silo">
          <div className="num">09</div>
          <div>
            <div className="client">Unity Infra Project Ltd</div>
            <div className="location">Kalina, Santacruz, Mumbai</div>
          </div>
          <div>
            <div className="scope">Schwing Stetter 63 m³ CP30 conveyor with 150/100 ton cement and fly ash silo.</div>
            <div className="tags">
              <span className="tag-conveyor">Conveyor</span>
              <span className="tag-silo">Silo</span>
            </div>
          </div>
        </div>

        <div className="project-row" data-tags="silo blower">
          <div className="num">10</div>
          <div>
            <div className="client">Gannon & Dunkerly Ltd</div>
            <div className="location">Mumbai / Hyderabad</div>
          </div>
          <div>
            <div className="scope">Cement / fly ash silo, blower, silo accessories — 9 sets supplied.</div>
            <div className="tags">
              <span className="tag-silo">Silo</span>
              <span className="tag-blower">Blower system</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
