/**
 * Smooth scroll to an element by ID
 * Handles hash links and accounts for sticky navbar height
 */
export function scrollToSection(id: string, offset: number = 80) {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

/**
 * Handle click on anchor links with smooth scroll
 * Use this in onClick handlers for in-page navigation
 */
export function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) {
  if (href === '/') {
    // Scroll to top for the Home link instead of reloading the page
    e.preventDefault();
    globalThis.scrollTo({ top: 0, behavior: 'smooth' });

    // Clean up hash from the URL if present
    if (globalThis.location.hash) {
      globalThis.history.pushState(null, '', '/');
    }
  } else if (href.startsWith('#')) {
    // Handle hash links (in-page navigation)
    e.preventDefault();
    const id = href.slice(1);
    scrollToSection(id);
    
    // Update URL without triggering navigation
    globalThis.history.pushState(null, '', href);
  }
}
