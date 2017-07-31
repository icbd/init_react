import {userinfoActionKeys} from "../constants/actionTypes";

// action 生成器
export function update(data) {
    return {
        type: userinfoActionKeys.USERINFO_UPDATE,
        data
    }
}