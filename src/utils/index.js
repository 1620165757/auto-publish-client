/**
 * @author: zxs
 * @date: 2020/11/25
 */

/**
 * @param key
 * @param value
 * @param seconds 默认7200秒 为0时浏览器关闭清除
 */
export const setCookie = (key, value, seconds = 7200) => {
    let expires = '';
    if (seconds !== 0) {
        const date = new Date();
        date.setTime(date.getTime() + (seconds * 1000));
        expires = ";expires=" + date.toUTCString()+'path=/';
    }
    document.cookie = `${key}=${escape(value)}${expires}`
};

export const getCookie = (key) => {
    let cookieValue = '';
    const cookies = document.cookie.split(';');
    cookies.forEach(v => {
        const cookieItemObj = v.split('=');
        if (key === cookieItemObj[0].replace(/\s/g, '')) {
            cookieValue = cookieItemObj[1];
            return
        }
    });
    return cookieValue
};
