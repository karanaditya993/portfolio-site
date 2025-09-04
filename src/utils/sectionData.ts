import { nanoid } from 'nanoid'

export interface ISectionData {
  id: string,
  name: string,
  hidden?: boolean,
  external?: boolean,
  linkTo?: string,
}

export enum SectionTypes {
  ABOUT = 'about',
  HOME = 'home',
  PROJECTS = 'projects',
  RESUME = '<contact me> for resume',
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
    name: SectionTypes.RESUME,
    external: true,
    linkTo: 'mailto:karanaditya993@gmail.com'
  },
]
