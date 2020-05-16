export const menuItems = [
  {
    id: 1,
    name: 'Home',
    type: 'page',
    child: [],
    description: 'Nice home page'
  },
  {
    id: 2,
    name: 'Business',
    type: 'page',
    child: [],
    description: 'We are doing a business with customer all over the world'
  },
  {
    id: 3,
    name: 'News and Events',
    type: 'page',
    child: [6, 7],
    description: ''
  },
  {
    id: 4,
    name: 'About',
    type: '',
    child: [],
    description: ''
  },
  {
    id: 5,
    name: 'Contact Us',
    type: 'form',
    child: [],
    description: ''
  },
  {
    id: 6,
    name: 'Jobs',
    type: '',
    child: [],
    description: ''
  }
];
export const subMenuItems = [
  {
    id: 6,
    name: 'News',
    type: 'sub',
    child: [8],
    description: '',
    show: false
  },
  {
    id: 7,
    name: 'Events',
    type: 'sub',
    child: [9],
    description: '',
    show: false
  },
  {
    id: 8,
    name: 'News 1',
    type: '',
    child: [],
    description: '',
    show: false
  },
  {
    id: 9,
    name: 'Events 1',
    type: '',
    child: [],
    description: '',
    show: false
  }
];