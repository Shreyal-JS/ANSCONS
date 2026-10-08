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
    this.isDocked = false;
    this.scrollTicking = false;

    this.init();
  }

  init() {
    // Theme Lever Switch: Toggles between .studio-mode and .blueprint-mode
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

    // Audio Toggle (MUTED BY DEFAULT)
    if (this.audioBtn && this.audio) {
      this.audioBtn.addEventListener('click', () => {
        const isMuted = this.audio.toggleMute();
        this.audioBtn.classList.toggle('active', !isMuted);
        if (this.audioBadge) {
          this.audioBadge.textContent = isMuted ? 'Muted' : 'Sound On';
        }
      });
    }

    // Smooth scroll for top vellum tabs
    this.navTabs.forEach(tab => {
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

    // Return to Drawing Sheet Origin (Top of Desk)
    if (this.originBtn) {
      this.originBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (this.audio) this.audio.playSwitchClick();
      });
    }

    // Scrollspy & Docked Navigation Manager with requestAnimationFrame throttling
    window.addEventListener('scroll', () => {
      if (!this.scrollTicking) {
        window.requestAnimationFrame(() => {
          this.handleScroll();
          this.scrollTicking = false;
        });
        this.scrollTicking = true;
      }
    }, { passive: true });

    this.handleScroll();
  }

  handleScroll() {
    const scrollY = window.scrollY;

    // Condense top vellum navbar with Hysteresis Gate
    // Entering dock state requires > 160px; exiting requires < 60px.
    // The 100px buffer completely prevents rapid oscillation/lockup at the boundary.
    if (this.navContainer) {
      const DOCK_ENTER = 160;
      const DOCK_EXIT = 60;

      if (!this.isDocked && scrollY > DOCK_ENTER) {
        this.isDocked = true;
        this.navContainer.classList.add('docked-sticky');
      } else if (this.isDocked && scrollY < DOCK_EXIT) {
        this.isDocked = false;
        this.navContainer.classList.remove('docked-sticky');
      }
    }

    // Floating Return-To-Origin button visibility
    if (this.originBtn) {
      if (scrollY > 420) {
        this.originBtn.classList.add('visible');
      } else {
        this.originBtn.classList.remove('visible');
      }
    }

    // Section scrollspy highlight (only for in-page anchor tabs)
    const hasAnchorTabs = Array.from(this.navTabs).some(tab => tab.getAttribute('href')?.startsWith('#'));
    if (hasAnchorTabs) {
      const sections = ['section-hero', 'section-materials', 'section-portfolio', 'section-caliper', 'section-credentials', 'section-commission'];
      const scrollPos = scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          this.navTabs.forEach(tab => {
            const href = tab.getAttribute('href');
            if (href && href.startsWith('#')) {
              tab.classList.toggle('active', href === `#${sections[i]}`);
            }
          });
          break;
        }
      }
    }
  }
}

