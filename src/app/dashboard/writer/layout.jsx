import { roleValidator } from '@/lib/code/session';

const AttendentLayout = async ({children}) => {
 await roleValidator("writer")


   return children
};

export default AttendentLayout;