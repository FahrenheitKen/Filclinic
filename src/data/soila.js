// Soila — the flagship short film produced by Film Clinic Bootcamp Cohort 1.
// Credits transcribed from the official poster. Premiere 21 August 2026;
// available on ustadifilms.ke. Replace `synopsis` with the official logline
// once released — the current copy is drawn from the film's themes and motifs.

const soila = {
  title: 'Soila',
  tagline: 'Free to Become',
  premiereDate: '2026-08-21', // ISO — drives the countdown
  premiereLabel: '21 August 2026',
  watchUrl: 'https://ustadifilms.ke/',
  poster: '/photos/soila-poster.jpg', // full credits version
  posterTeaser: '/photos/soila-poster-teaser.jpg', // "coming soon" teaser

  synopsis:
    'Shot on location in the heart of Maasai country, Soila follows a young woman standing at the crossroads of tradition and self-determination — a story of identity, courage, and the freedom to become who she is meant to be. It is the first film to emerge from Film Clinic’s six-week hands-on bootcamp: written, shot, and edited entirely by Cohort 1 under professional mentorship.',

  // Headline credits shown prominently
  keyCredits: [
    { role: 'Directed by', names: 'Pauline Njoki & Wilson Osiolo' },
    { role: 'Written by', names: 'Faith Mutiga' },
    { role: 'Starring', names: 'Diana Gisoi, Joseph Karanja & Pamela Kenda' },
    { role: 'Director of Photography', names: 'Ayuel Goch' },
    { role: 'Edited by', names: 'Wanjiru Njeri & Eugene Musa' },
    { role: 'Produced by', names: 'Wanjiru Njeri & Wilson Osiolo' },
  ],

  // Full crew, grouped
  crew: [
    { role: 'Presented by', names: 'Ustadi Films, Omori Films & BML Foundation' },
    { role: 'Assistant Director', names: 'Lewis Waweru' },
    { role: 'Production Designer', names: 'Jane Magaina' },
    { role: 'Production Manager', names: 'Mark Mwangi' },
    { role: 'Sound', names: 'Swinny Jangara & Kelvin Emojong' },
    { role: 'Gaffer', names: 'Kelvin Karari & Peter Mungai' },
    { role: 'Hair & Make-up', names: 'Florence Kihungu' },
    { role: 'Slate', names: 'Aurelia Indoshi' },
    { role: 'BTS Photography', names: 'Brian Taraji & Daniel Njuguna' },
    { role: 'Production Assistants', names: 'Joseph Oyugi & Brian Omori' },
    { role: 'Supervising Crew', names: 'Ann Kibunja, M.N.W Martin & Samuel Israel' },
  ],

  // Curated behind-the-scenes stills (distinct frames, no burst duplicates)
  bts: Array.from({ length: 30 }, (_, i) =>
    `soila-bts-${String(i + 1).padStart(2, '0')}.jpg`
  ),
}

export default soila
