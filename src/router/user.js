import UserDetails from "../components/user/UserDetails";
import UserList from "../components/user/UserList";
import UserEdit from "../components/user/UserEdit";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default [
  { path: "", components: {
    default: UserList,
    header: Header,
    footer: Footer
  } },
  { path: ":id", component: UserDetails },
  { path: ":id/edit", component: UserEdit }
];
