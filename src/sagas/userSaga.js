/**
 * @author: zxs
 * @date: 2020/12/2
 */
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {SAVE_USER} from "../action/userAction";

function* saveUser() {

}

function* userSaga() {
    takeEvery(SAVE_USER, saveUser)
}

export default userSaga
