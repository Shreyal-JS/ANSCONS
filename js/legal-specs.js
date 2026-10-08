/**
 * ANSCONS Architectural Document Index & Legal Spec Sheet Controller
 */

const specDocuments = {
  'spec-01': {
    code: 'SECTION 00 22 10 // SPEC-01',
    title: 'Client Privacy Protocols & Fiduciary Data Covenant',
    classification: 'CLASS 1: STRICT CLIENT CONFIDENTIALITY',
    body: `
      <h4>1.01 NON-DISCLOSURE & PRIVATE RESIDENCE ANONYMITY</h4>
      <p>All client identities, property parcel records, topographic surveys, and interior floor plans commissioned through ANSCONS are classified as confidential trade secrets under AIA Document B101-2017 covenants. ANSCONS enforces strict non-disclosure agreements across all subcontractors, structural engineers, and artisan fabricators.</p>
      
      <h4>1.02 PHOTOGRAMMETRIC & DRONE CAPTURE CLEARANCE</h4>
      <p>Site photography, photogrammetric 3D scans, and aerial drone captures shall never be released to public press, architectural monographs, or digital platforms without explicit, countersigned written consent from the Principal Client or designated Family Office trustee.</p>
      
      <h4>1.03 SECURE VAULT SPECIFICATION ARCHIVING</h4>
      <p>CAD, BIM, and structural calculation datasets are stored on air-gapped, 256-bit encrypted private networks. Physical drawings returned or destroyed upon client request upon final Certificate of Occupancy issuance.</p>
    `,
    ref: 'ANS-LEGAL-PRV-2026.04'
  },
  'spec-02': {
    code: 'SECTION 00 72 00 // SPEC-02',
    title: 'General Conditions of Commission & Tender Terms',
    classification: 'CLASS 2: STATUTORY BIDDING & CONTRACTUAL GOVERNANCE',
    body: `
      <h4>2.01 NATURE OF ARCHITECTURAL COMMISSION</h4>
      <p>Submission of the Contractor Commission Brief (Form 104-B) constitutes an initiation of pre-construction feasibility analysis and tender evaluation. All binding architectural deliverables, structural engineering, and general contracting services are governed by AIA Document A101/A201 standard agreements.</p>
      
      <h4>2.02 FEASIBILITY & PRE-CONSTRUCTION TOLERANCES</h4>
      <p>All metric estimations generated via the Architectural Scale Caliper are preliminary parametric calculations. Final contract sums and construction durations are established following comprehensive geotechnical core drilling, topographic boundary validation, and jurisdictional permit review.</p>
      
      <h4>2.03 CHANGE-ORDER & METRIC REVISION PROTOCOLS</h4>
      <p>Modifications to structural envelopes, finish stones, or bespoke millwork packages require written Architectural Supplemental Instructions (ASI) and executed Change Orders prior to shop fabrication.</p>
    `,
    ref: 'ANS-LEGAL-TOS-2026.04'
  },
  'spec-03': {
    code: 'SECTION 00 73 15 // SPEC-03',
    title: 'Retainer Deposit & Escrow Refund Guidelines',
    classification: 'CLASS 3: COMMERCIAL CLEARING & ESCROW POLICY',
    body: `
      <h4>3.01 ESCROW DEPOSIT PROTOCOLS</h4>
      <p>All initial design-build retainers and tender deposits are placed directly into bonded, FDIC-insured commercial escrow accounts maintained with our institutional clearinghouse partners (J.P. Morgan Private Escrow). Funds remain unallocated until site feasibility milestones are completed.</p>
      
      <h4>3.02 PRE-CONSTRUCTION REFUND SCHEDULE</h4>
      <p>Should a client elect to discontinue project development during Phase 1 (Concept & Schematic Feasibility), unexpended escrow balances are fully refundable within fourteen (14) business days, less certified third-party engineering disbursements (soil testing and boundary surveying).</p>
      
      <h4>3.03 PHASE TRANSITION & FABRICATION COMMITMENTS</h4>
      <p>Upon execution of Phase 2 (Guaranteed Maximum Price Construction Contract) and issuance of stone/timber quarry purchase orders, deposits become committed to material acquisitions and bespoke fabrication.</p>
    `,
    ref: 'ANS-LEGAL-RFD-2026.04'
  },
  'spec-04': {
    code: 'SECTION 00 81 00 // SPEC-04',
    title: 'AIA Licensure, Ethics & Statutory Compliance',
    classification: 'CLASS 4: JURISDICTIONAL REGULATORY DISCLOSURES',
    body: `
      <h4>4.01 BOARD OF ARCHITECTURAL EXAMINERS REGISTRATION</h4>
      <p>ANSCONS operates as a legally chartered architectural atelier and general building contracting entity (License No. AR-09412-AIA / C-8 General Building Contractor License #882194). All principals maintain active NCARB and AIA Fellow certifications.</p>
      
      <h4>4.02 STRUCTURAL LIABILITY & COMPREHENSIVE INSURANCE</h4>
      <p>Projects carry comprehensive commercial general liability coverage, excess umbrella coverage up to $50,000,000, and full Errors & Omissions (E&O) professional architectural indemnity.</p>
      
      <h4>4.03 SUSTAINABLE BUILDING & CODE COMPLIANCE</h4>
      <p>Every residential estate is engineered in strict compliance with current International Building Code (IBC), California Title 24, and LEED Platinum Net-Zero residential criteria.</p>
    `,
    ref: 'ANS-LEGAL-AIA-2026.04'
  }
};

export class LegalSpecsController {
  constructor(audioInstance) {
    this.audio = audioInstance;
    this.tabs = document.querySelectorAll('.spec-sheet-tab');
    this.modal = document.getElementById('spec-modal-overlay');
    this.closeBtn = document.getElementById('spec-modal-close-btn');
    this.modalCode = document.getElementById('modal-spec-code');
    this.modalTitle = document.getElementById('modal-spec-title');
    this.modalClassification = document.getElementById('modal-spec-classification');
    this.modalBody = document.getElementById('modal-spec-body');
    this.modalRef = document.getElementById('modal-spec-ref');

    this.init();
  }

  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const specKey = tab.dataset.spec;
        this.openSpec(specKey);
      });
    });

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.closeSpec());
    }

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.closeSpec();
        }
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal?.classList.contains('active')) {
        this.closeSpec();
      }
    });
  }

  openSpec(key) {
    const doc = specDocuments[key];
    if (!doc) return;

    if (this.modalCode) this.modalCode.textContent = doc.code;
    if (this.modalTitle) this.modalTitle.textContent = doc.title;
    if (this.modalClassification) this.modalClassification.textContent = doc.classification;
    if (this.modalBody) this.modalBody.innerHTML = doc.body;
    if (this.modalRef) this.modalRef.textContent = `DOCUMENT RECORD: ${doc.ref}`;

    if (this.modal) {
      this.modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    if (this.audio) this.audio.playSwitchClick();
  }

  closeSpec() {
    if (this.modal) {
      this.modal.classList.remove('active');
      document.body.style.overflow = '';
    }
    if (this.audio) this.audio.playSwitchClick();
  }
}

