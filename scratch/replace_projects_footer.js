const fs = require('fs');

let html = fs.readFileSync('projects.html', 'utf8');

const standardFooter = `    <!-- ARCHITECTURAL DOCUMENT INDEX (THE LEGAL FOOTER)
         A neat stack of thin Specification Sheets tucked under the cutting mat edge -->
    <footer class="drafting-table-footer-zone">
      
      <!-- Heavy Cutting Mat Bottom Lip / Edge -->
      <div class="cutting-mat-bottom-lip">
        <div class="mat-lip-metric-ticks">
          <span>| 00 MM</span>
          <span>| 150 MM</span>
          <span>| 300 MM</span>
          <span>| 450 MM</span>
          <span>| 600 MM</span>
          <span>| 750 MM</span>
          <span>| 900 MM</span>
          <span>| 1050 MM</span>
          <span>| 1200 MM</span>
        </div>
        <div class="mat-lip-title">SPECIFICATION ARCHIVE // LEGAL &amp; STATUTORY COVENANTS</div>
      </div>

      <!-- Tucked Specification Sheets Stack (Spec Sheets) -->
      <div class="tucked-spec-stack">
        
        <!-- Spec Sheet 1: Privacy Policy -->
        <div class="spec-sheet-tab" data-spec="spec-01" tabindex="0" role="button" title="View SPEC-01: Client Privacy & Fiduciary Data Covenant">
          <div class="spec-hole-punch" aria-hidden="true"></div>
          <span class="spec-doc-id">SPEC-01 // PRV</span>
          <div>
            <div class="spec-doc-title">Client Privacy Protocols &amp; Confidentiality Data Covenant</div>
            <div class="spec-doc-classification">AIA Standard B101 • Air-Gapped Vault Archiving • Zero-Publicity Guarantee</div>
          </div>
          <span class="spec-doc-classification">REV 2026.04</span>
          <span class="spec-doc-action">OPEN SPEC SHEET ↗</span>
        </div>

        <!-- Spec Sheet 2: Terms of Service -->
        <div class="spec-sheet-tab" data-spec="spec-02" tabindex="0" role="button" title="View SPEC-02: General Conditions of Commission & Tender Terms">
          <div class="spec-hole-punch" aria-hidden="true"></div>
          <span class="spec-doc-id">SPEC-02 // TOS</span>
          <div>
            <div class="spec-doc-title">General Conditions of Commission &amp; Tender Terms</div>
            <div class="spec-doc-classification">AIA A101/A201 Framework • Metric Feasibility Standards • Change-Order Protocols</div>
          </div>
          <span class="spec-doc-classification">REV 2026.04</span>
          <span class="spec-doc-action">OPEN SPEC SHEET ↗</span>
        </div>

        <!-- Spec Sheet 3: Refund Guidelines -->
        <div class="spec-sheet-tab" data-spec="spec-03" tabindex="0" role="button" title="View SPEC-03: Retainer Deposit & Escrow Refund Guidelines">
          <div class="spec-hole-punch" aria-hidden="true"></div>
          <span class="spec-doc-id">SPEC-03 // RFD</span>
          <div>
            <div class="spec-doc-title">Retainer Deposit &amp; Escrow Refund Guidelines</div>
            <div class="spec-doc-classification">FDIC-Insured Escrow • 14-Day Pre-Construction Refund Window • Milestone Accounting</div>
          </div>
          <span class="spec-doc-classification">REV 2026.04</span>
          <span class="spec-doc-action">OPEN SPEC SHEET ↗</span>
        </div>

        <!-- Spec Sheet 4: Licensure & AIA Disclosures -->
        <div class="spec-sheet-tab" data-spec="spec-04" tabindex="0" role="button" title="View SPEC-04: AIA Licensure, Ethics & Statutory Compliance">
          <div class="spec-hole-punch" aria-hidden="true"></div>
          <span class="spec-doc-id">SPEC-04 // AIA</span>
          <div>
            <div class="spec-doc-title">AIA Licensure, Professional Ethics &amp; Statutory Disclosures</div>
            <div class="spec-doc-classification">Board of Architectural Examiners • OSHA VPP Star • C-8 General Contractor #882194</div>
          </div>
          <span class="spec-doc-classification">REV 2026.04</span>
          <span class="spec-doc-action">OPEN SPEC SHEET ↗</span>
        </div>

      </div>

      <!-- Debossed Mat Imprint Stamp -->
      <div class="cutting-mat-imprint-stamp">
        <div class="mat-debossed-copyright">© 2026 ANSCONS ARCHITECTURE, CONSTRUCTION &amp; BESPOKE INTERIORS ATELIER • ALL RIGHTS RESERVED</div>
        <div class="mat-debossed-licensure">REGISTERED PRACTICE NO. AR-09412-AIA // GENERAL BUILDING CONTRACTOR LIC. #C8-882194 // JURISDICTION: US &amp; INTERNATIONAL ATELIERS</div>
      </div>

    </footer>`;

const footerStart = html.indexOf('<footer');
const footerEnd = html.indexOf('</footer>') + 9;

if (footerStart !== -1 && footerEnd !== -1) {
  html = html.slice(0, footerStart) + standardFooter + html.slice(footerEnd);
  fs.writeFileSync('projects.html', html, 'utf8');
  console.log('Successfully replaced footer in projects.html with standard footer!');
} else {
  console.error('Could not find footer tag in projects.html');
}

