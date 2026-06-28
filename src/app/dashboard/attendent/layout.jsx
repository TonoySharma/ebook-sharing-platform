import { roleValidator } from '@/lib/code/session';

const AttendentLayout = async ({children}) => {
 await roleValidator("reader")


   return children
};

export default AttendentLayout;