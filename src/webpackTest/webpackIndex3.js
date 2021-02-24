// import React from 'react'
import webpackTest3 from './page/webpackTest3'
import webpackTest2 from './page/webpackTest2'
const webpackIndex3 = function (){
    // import(/* webpackChunkName:"webpackTest1" */'./page/webpackTest1')
    webpackTest3()
    webpackTest2()
}
export default webpackIndex3