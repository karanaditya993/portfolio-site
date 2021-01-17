import { nanoid } from 'nanoid'

export interface ISectionData {
  id: string,
  name: string,
  hidden?: boolean,
}

export enum SectionTypes {
  ABOUT = 'about',
  HOME = 'home',
  PROJECTS = 'projects',
  RESUME = 'resume',
  WORK = 'work'
}

export const sections : ISectionData[] = [
  {
    id: nanoid(),
    name: SectionTypes.HOME,
    hidden: true,
  },
  {
    id: nanoid(),
    name: SectionTypes.ABOUT
  },
  {
    id: nanoid(),
    name: SectionTypes.WORK
  },
  {
    id: nanoid(),
    name: SectionTypes.PROJECTS
  },
  {
    id: nanoid(),
    name: SectionTypes.RESUME
  },
]
