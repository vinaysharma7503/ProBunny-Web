import { postReq } from "@RootService";

import APIEndPoints from './apiEndPoints';
const { CONTACT } = APIEndPoints

export const ContactData = async (data: any,cb:any) => {
    try {
        const result =await postReq(CONTACT, data);
        return cb(result)
    } catch (error) {
        console.log('error', error);

    }

}