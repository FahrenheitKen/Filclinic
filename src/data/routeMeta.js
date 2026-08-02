// Per-route SEO metadata — the single source of truth for STATIC prerendered
// <head> tags (title, description, keywords, canonical, Open Graph, Twitter).
//
// This is a client-side SPA: usePageMeta() sets these tags at runtime for each
// page, which works for browsers and JS-rendering crawlers (Google). But the
// served HTML for every non-blog route is the same index.html, so non-JS
// crawlers and "View Source" see identical meta everywhere. scripts/prerender-
// pages.mjs reads this map and writes a static <route>.html per page with the
// correct meta baked in (nginx `try_files $uri $uri.html ...` serves it).
//
// KEEP IN SYNC with each page's usePageMeta(title, description, keywords) call.
// The homepage ('/') is intentionally omitted — index.html already carries its
// authored meta and is the prerender template.

const routeMeta = [
  {
    path: '/about',
    title: 'About Us',
    description:
      'Learn about Film Clinic Masterclass, a practical filmmaking platform by Ustadi Films Ltd. Our mission is to train, develop, and activate filmmakers through real production experience.',
    keywords:
      'about Film Clinic, Ustadi Films Ltd, filmmaking education Kenya, film school mission, African filmmakers, filmmaking community Nakuru, film training program Africa, practical film education',
  },
  {
    path: '/programs/masterclass',
    title: 'Masterclass',
    description:
      'Join Film Clinic Masterclass for intensive filmmaking workshops in storytelling, directing, cinematography, and production workflow led by industry professionals.',
    keywords:
      'filmmaking masterclass Kenya, screenwriting workshop, film directing masterclass, cinematography training Nakuru, film production workflow, filmmaking intensive course, learn directing Africa, storytelling for film, script development course Kenya',
  },
  {
    path: '/programs/bootcamp',
    title: 'Bootcamp',
    description:
      'Film Clinic Bootcamp is a hands-on production lab where participants collaborate in teams to create completed short films with professional mentorship.',
    keywords:
      'filmmaking bootcamp Kenya, hands-on film production, short film production course, film crew training, film set experience Kenya, collaborative filmmaking, film production mentorship, make a short film Kenya, post-production training Africa',
  },
  {
    path: '/outcomes',
    title: 'Outcomes & Impact',
    description:
      'See what Film Clinic Masterclass participants achieve: completed films, practical production experience, portfolio-ready work, and industry connections.',
    keywords:
      'filmmaking portfolio Kenya, film production results, filmmaking career Kenya, film industry networking Africa, completed short films, filmmaker success stories, film school outcomes, production experience Kenya',
  },
  {
    path: '/films/soila',
    title: 'Soila — A Film by Film Clinic Bootcamp Cohort 1',
    description:
      'Soila, "Free to Become" — the debut short film from Film Clinic’s first bootcamp cohort. Premieres 21 August 2026, streaming on ustadifilms.ke. Explore the cast, crew, and behind-the-scenes of the production.',
    keywords:
      'Soila film, Film Clinic Bootcamp film, Ustadi Films, Kenyan short film, Maasai film, filmmaking bootcamp outcome, Cohort 1 film project, African cinema, film premiere Kenya',
    image: '/photos/soila-poster.jpg',
  },
  {
    path: '/gallery',
    title: 'Gallery',
    description:
      'Browse photos from Film Clinic Bootcamp cohorts. See our filmmakers in action during hands-on production experiences.',
    keywords:
      'Film Clinic gallery, bootcamp photos Kenya, filmmaking production photos, behind the scenes filmmaking, Film Clinic cohorts',
  },
  {
    path: '/contact',
    title: 'Contact Us',
    description:
      'Contact Film Clinic Masterclass in Nakuru, Kenya. Get in touch to learn more about our filmmaking programs and upcoming cohorts.',
    keywords:
      'contact Film Clinic, filmmaking enquiry Kenya, film school contact, filmmaking training Nakuru, film production course enquiry, filmmaking classes Kenya',
  },
  {
    path: '/blog',
    title: 'Blog',
    description:
      'Filmmaking tips, screenwriting guides, and behind-the-scenes insights from Film Clinic Masterclass.',
    keywords: 'filmmaking blog, screenwriting tips, film production, short film tips',
  },
]

export default routeMeta
