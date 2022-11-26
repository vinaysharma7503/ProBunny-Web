import { postReq } from "@RootService";

import APIEndPoints from './apiEndPoints';
const { REGISTRATION } = APIEndPoints

export const RegistrationData = async (data: any,cb:any) => {
    try {
        const result =await postReq(REGISTRATION, data);
        return cb(result)
    } catch (error) {
        console.log('error', error);

    }

}