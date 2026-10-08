/**
 * ANSCONS Desk Environment Tools (Theme Switcher, Audio Mute, Nav Scrollspy)
 */

export class DeskToolsController {
  constructor(audioInstance) {
    this.audio = audioInstance;
    this.themeLever = document.getElementById('brass-theme-lever');
    this.audioBtn = document.getElementById('desk-audio-toggle');
    this.audioBadge = document.getElementById('audio-status-badge');
    this.navTabs = document.querySelectorAll('.vellum-tab');
    this.navContainer = document.querySelector('.tracing-nav-container');
    this.originBtn = document.getElementById('btn-return-origin');
    this.controlRail = document.getElementById('architectural-control-rail');
    this.railKeys = [];
    this.railOriginBtn = null;
    this.isDocked = false;
    this.scrollTicking = false;

    this.init();
  }

  init() {
    // 1. Ensure Architectural Control Rail (State C) exists and bind interactions
    this.ensureControlRail();

    // 2. Theme Lever Switch: Toggles between .studio-mode and .blueprint-mode
    if (this.themeLever) {
      const setMode = (isBlueprint) => {
        if (isBlueprint) {
          document.body.classList.remove('studio-mode');
          document.body.classList.add('blueprint-mode');
          document.body.setAttribute('data-theme', 'cyanotype');
          document.getElementById('label-mode-studio')?.classList.remove('active');
          document.getElementById('label-mode-blueprint')?.classList.add('active');
        } else {
          document.body.classList.remove('blueprint-mode');
          document.body.classList.add('studio-mode');
          document.body.setAttribute('data-theme', 'studio');
          document.getElementById('label-mode-studio')?.classList.add('active');
          document.getElementById('label-mode-blueprint')?.classList.remove('active');
        }
        if (this.audio) this.audio.playSwitchClick();
      };

      this.themeLever.addEventListener('click', (e) => {
        const isCurrentlyBlueprint = document.body.classList.contains('blueprint-mode');
        if (e.target?.id === 'label-mode-studio' || e.target?.closest?.('#label-mode-studio')) {
          if (isCurrentlyBlueprint) setMode(false);
          return;
        }
        if (e.target?.id === 'label-mode-blueprint' || e.target?.closest?.('#label-mode-blueprint')) {
          if (!isCurrentlyBlueprint) setMode(true);
          return;
        }
        setMode(!isCurrentlyBlueprint);
      });
    }

    // 3. Audio Toggle (MUTED BY DEFAULT)
    if (this.audioBtn && this.audio) {
      this.audioBtn.addEventListener('click', () => {
        const isMuted = this.audio.toggleMute();
        this.audioBtn.classList.toggle('active', !isMuted);
        if (this.audioBadge) {
          this.audioBadge.textContent = isMuted ? 'Muted' : 'Sound On';
        }
      });
    }

    // 4. Smooth scroll for top vellum tabs (State A File Index)
    this.navTabs.forEach(tab => {
      tab.addEventListener('mouseenter', () => {
        if (this.audio) this.audio.playCaliperTick();
      });
      tab.addEventListener('click', (e) => {
        const href = tab.getAttribute('href');
        if (href && href.startsWith('#')) {
          const target = document.getElementById(href.replace('#', ''));
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            if (this.audio) this.audio.playSwitchClick();
          }
        }
      });
    });

    // 5. Floating Return-To-Origin button (Bottom-right compass FAB)
    if (this.originBtn) {
      this.originBtn.addEventListener('mouseenter', () => {
        if (this.audio) this.audio.playCaliperTick();
      });
      this.originBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (this.audio) this.audio.playSwitchClick();
      });
    }

    // 6. Scrollspy & Deliberate Metamorphosis Manager with requestAnimationFrame throttling
    window.addEventListener('scroll', () => {
      if (!this.scrollTicking) {
        window.requestAnimationFrame(() => {
          this.handleScroll();
          this.scrollTicking = false;
        });
        this.scrollTicking = true;
      }
    }, { passive: true });

    // Initial evaluation on load
    this.handleScroll();
  }

  ensureControlRail() {
    if (!this.controlRail) {
      this.controlRail = document.getElementById('architectural-control-rail');
    }

    // If not statically rendered, generate and inject into DOM
    if (!this.controlRail) {
      const nav = document.createElement('nav');
      nav.className = 'architectural-control-rail';
      nav.id = 'architectural-control-rail';
      nav.setAttribute('aria-label', 'Architectural Control Rail');

      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      const docs = [
        { href: 'index.html', code: 'DOC 01', name: 'ATELIER' },
        { href: 'about.html', code: 'DOC 02', name: 'PHILOSOPHY' },
        { href: 'services.html', code: 'DOC 03', name: 'SERVICES' },
        { href: 'projects.html', code: 'DOC 04', name: 'PORTFOLIO' },
        { href: 'estimator.html', code: 'DOC 05', name: 'ESTIMATOR' },
        { href: 'contact.html', code: 'DOC 06', name: 'LIAISON' }
      ];

      nav.innerHTML = `
        <div class="rail-crest">
          <div class="rail-screw" aria-hidden="true"></div>
          <span class="rail-compass-pip" aria-hidden="true">▲</span>
          <span class="rail-brand">ANSCONS</span>
          <span class="rail-spec">INDEX RAIL</span>
        </div>
        <div class="rail-keys-track">
          ${docs.map(d => {
            const isActive = currentPath === d.href || (currentPath === '' && d.href === 'index.html');
            return `
              <a href="${d.href}" class="rail-key ${isActive ? 'active' : ''}" data-doc="${d.code}" title="${d.name}">
                <span class="rail-key-code">${d.code}</span>
                <span class="rail-key-name">${d.name}</span>
                <span class="rail-indicator" aria-hidden="true"></span>
              </a>
            `;
          }).join('')}
        </div>
      `;

      document.body.appendChild(nav);
      this.controlRail = nav;
    }

    this.railKeys = this.controlRail.querySelectorAll('.rail-key');
    this.railOriginBtn = this.controlRail.querySelector('#rail-origin-btn');

    // Attach mechanical sound and smooth navigation handlers
    this.railKeys.forEach(key => {
      key.addEventListener('mouseenter', () => {
        if (this.audio) this.audio.playCaliperTick();
      });
      key.addEventListener('click', (e) => {
        const href = key.getAttribute('href');
        const currentFile = window.location.pathname.split('/').pop() || 'index.html';
        if (href === currentFile || (href === 'index.html' && (currentFile === '' || currentFile === 'index.html'))) {
          // Already on current page -> smooth scroll to origin
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          if (this.audio) this.audio.playSwitchClick();
        } else if (href && href.startsWith('#')) {
          const target = document.getElementById(href.replace('#', ''));
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            if (this.audio) this.audio.playSwitchClick();
          }
        } else {
          if (this.audio) this.audio.playSwitchClick();
        }
      });
    });

    if (this.railOriginBtn) {
      this.railOriginBtn.addEventListener('mouseenter', () => {
        if (this.audio) this.audio.playCaliperTick();
      });
      this.railOriginBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (this.audio) this.audio.playSwitchClick();
      });
    }
  }

  handleScroll() {
    const scrollY = window.scrollY;

    // Deliberate Metamorphosis:
    // State A (Hero File Index) -> State B (Scroll Compress) -> State C (Architectural Control Rail)
    // Entering Control Panel state requires > 160px; exiting back to File Index requires < 65px.
    // The 95px hysteresis gap completely prevents rapid oscillation at the boundary.
    const DOCK_ENTER = 160;
    const DOCK_EXIT = 65;

    if (!this.isDocked && scrollY > DOCK_ENTER) {
      this.isDocked = true;
      if (this.navContainer) {
        this.navContainer.classList.add('file-index-compressed');
      }
      if (this.controlRail) {
        this.controlRail.classList.add('control-rail-active');
      }
    } else if (this.isDocked && scrollY < DOCK_EXIT) {
      this.isDocked = false;
      if (this.navContainer) {
        this.navContainer.classList.remove('file-index-compressed');
      }
      if (this.controlRail) {
        this.controlRail.classList.remove('control-rail-active');
      }
    }

    // Floating Return-To-Origin compass button visibility
    if (this.originBtn) {
      if (scrollY > 420) {
        this.originBtn.classList.add('visible');
      } else {
        this.originBtn.classList.remove('visible');
      }
    }

    // Section scrollspy highlight (for in-page anchor tabs)
    const hasAnchorTabs = Array.from(this.navTabs).some(tab => tab.getAttribute('href')?.startsWith('#'));
    if (hasAnchorTabs) {
      const sections = ['section-hero', 'section-materials', 'section-portfolio', 'section-caliper', 'section-credentials', 'section-commission'];
      const scrollPos = scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          const activeHref = `#${sections[i]}`;
          this.navTabs.forEach(tab => {
            const href = tab.getAttribute('href');
            if (href && href.startsWith('#')) {
              tab.classList.toggle('active', href === activeHref);
            }
          });
          this.railKeys?.forEach(key => {
            const href = key.getAttribute('href');
            if (href && href.startsWith('#')) {
              key.classList.toggle('active', href === activeHref);
            }
          });
          break;
        }
      }
    }
  }
}

