/**
 * ANSCONS Commissioning Brief & Mechanical Stamp Controller
 */

export class CommissionFormController {
  constructor(audioInstance) {
    this.audio = audioInstance;
    this.form = document.getElementById('commission-brief-form');
    this.stampBtn = document.getElementById('btn-mechanical-stamp');
    this.inkSeal = document.getElementById('ink-seal');
    this.sealDate = document.getElementById('seal-date-text');
    this.sealRef = document.getElementById('seal-ref-text');
    this.statusToast = document.getElementById('dispatch-toast');

    this.init();
  }

  init() {
    if (this.stampBtn) {
      this.stampBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.submitForm();
      });
    }

    if (this.form) {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.submitForm();
      });

      // Tactile Typing Feedback: Track paper absorbing weight & ink
      const inputs = this.form.querySelectorAll('.debossed-input');
      inputs.forEach(input => {
        input.addEventListener('input', () => {
          if (input.value.length > 0) {
            input.classList.add('has-ink');
            // Subtle dynamic ink depth calculation based on typing density
            const depth = Math.min(input.value.length * 0.4, 6);
            input.style.boxShadow = `inset ${1 + depth * 0.2}px ${3 + depth * 0.4}px ${6 + depth * 0.5}px rgba(0, 0, 0, 0.24), inset 0 -1px 1px rgba(255, 255, 255, 0.9), 0 0 0 2px rgba(212, 175, 55, 0.35)`;
          } else {
            input.classList.remove('has-ink');
            input.style.boxShadow = '';
          }
          if (this.audio) this.audio.playCaliperTick();
        });

        input.addEventListener('blur', () => {
          if (!input.classList.contains('has-ink')) {
            input.style.boxShadow = '';
          }
        });
      });
    }
  }

  submitForm() {
    // Basic validation
    const nameInput = document.getElementById('input-client-name');
    const contactInput = document.getElementById('input-client-contact');

    if (nameInput && !nameInput.value.trim()) {
      nameInput.focus();
      nameInput.style.borderColor = '#c0392b';
      return;
    }

    if (contactInput && !contactInput.value.trim()) {
      contactInput.focus();
      contactInput.style.borderColor = '#c0392b';
      return;
    }

    // Trigger mechanical stamp plunger animation
    if (this.stampBtn) {
      this.stampBtn.classList.add('stamping');
    }

    // Play stamp thud & spring sound
    if (this.audio) {
      this.audio.playStampSlam();
    }

    setTimeout(() => {
      if (this.stampBtn) {
        this.stampBtn.classList.remove('stamping');
      }

      // Imprint the red ink seal
      const now = new Date();
      const dateString = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      }).toUpperCase();

      const randomRef = `ANS-${now.getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

      if (this.sealDate) this.sealDate.textContent = dateString;
      if (this.sealRef) this.sealRef.textContent = randomRef;

      if (this.inkSeal) {
        this.inkSeal.classList.add('stamped');
      }

      // Show confirmation
      if (this.statusToast) {
        this.statusToast.textContent = `TENDER LOGGED • REFERENCE ${randomRef} • ARCHITECT REVIEW PENDING`;
        this.statusToast.style.opacity = '1';
        this.statusToast.style.transform = 'translateY(0)';
      }
    }, 280);
  }
}

