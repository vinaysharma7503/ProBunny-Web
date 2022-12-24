import { getReq, postReq } from "@RootService";

import APIEndPoints from './apiEndPoints';
const { PROJECT } = APIEndPoints

export const ProjectData = async (data: any,cb:any) => {
    try {
        const result =await getReq(PROJECT);
        return cb(result)
    } catch (error) {
        console.log('error', error);

    }

}