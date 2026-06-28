import { roleValidator } from '@/lib/code/session';

const AttendentLayout = async ({children}) => {
 await roleValidator("admin")


   return children
};

export default AttendentLayout;