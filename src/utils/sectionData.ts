export interface ISectionData {
  section: string,
  name: string,
}

export interface ISections {
  about: ISectionData,
  work: ISectionData,
  projects: ISectionData,
  resume: ISectionData,
}

export const sections : ISections = {
  about: {
    section: 'about',
    name: 'About'
  },
  work: {
    section: 'work',
    name: 'Work'
  },
  projects: {
    section: 'projects',
    name: 'Projects'
  },
  resume: {
    section: 'resume',
    name: 'Resume'
  },
}
