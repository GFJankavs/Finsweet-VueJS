const membersData = [
  {
    id: 1,
    name: 'John Smith',
    position: 'CEO',
    profileImage: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },
  {
    id: 2,
    name: 'Simon Adams',
    position: 'CTO',
    profileImage: 'https://images.unsplash.com/photo-1618498082002-88f828b0f1ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 3,
    name: 'Paul Jones',
    position: 'Design Lead',
    profileImage: 'https://static-01.daraz.com.bd/p/e0c9982233103f42fffb74f46d33b811.jpg',
  },
  {
    id: 4,
    name: 'Sara Hardin',
    position: 'Project Manager',
    profileImage: 'https://images.pexels.com/photos/10040315/pexels-photo-10040315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

export default membersData;

export interface MembersDataType {
  id: number;
  name: string;
  position: string;
  profileImage: string;
}
