import { BsBoxes } from 'react-icons/bs';
import { IoIosSettings } from 'react-icons/io';
import { LiaStoreAltSolid } from 'react-icons/lia';

const iconSize = 20;
const color = 'black';

export const menuItems = [
  {
    id: '5bd38cec-073d-4f4b-98f5-e101bada5840',
    title: 'Settings',
    icon: <IoIosSettings size={iconSize} color={color} />,
    redirectPage: '/settings',
  },
  {
    id: '4892f81b-041c-4bca-a0fd-91ee52b7d4dd',
    title: 'Stores',
    icon: <LiaStoreAltSolid size={iconSize} color={color} />,
    redirectPage: '/stores',
  },
  {
    id: '8333921e-0a23-420a-83ad-5a17876140bd',
    title: 'Products',
    icon: <BsBoxes size={iconSize} color={color} />,
    redirectPage: '/products',
  },
  // {
  //   id: '021e7181-bdd5-4c65-ad58-59c90e9815b4',
  //   title: 'Finances',
  //   icon: <GiMoneyStack size={iconSize} color={color} />,
  //   redirectPage: '',
  // },
  // {
  //   id: '2cd07696-3a73-49bf-9d7f-2e0205cd56f8',
  //   title: 'Tasks',
  //   icon: <LiaTasksSolid size={iconSize} color={color} />,
  //   redirectPage: '',
  // },
  // {
  //   id: '14fd2979-0dff-4cd1-a3fb-9f23c6a10254',
  //   title: 'Orders',
  //   icon: <AiOutlineShoppingCart size={iconSize} color={color} />,
  //   redirectPage: '/orders',
  // },
  // {
  //   id: '861d9ee7-182c-4bd5-a017-bbefa3ff6c4b',
  //   title: 'Notifications',
  //   icon: <MdNotificationsNone size={iconSize} color={color} />,
  //   redirectPage: '/notifications',
  // },
];
