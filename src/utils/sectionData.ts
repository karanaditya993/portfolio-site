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
  NOT_WORK = '!Work',
  GET_IN_TOUCH = 'get in touch',
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
    name: SectionTypes.NOT_WORK
  },
  {
    id: nanoid(),
    name: SectionTypes.GET_IN_TOUCH,
    external: true,
    linkTo: 'mailto:karanaditya993@gmail.com'
  },
]
