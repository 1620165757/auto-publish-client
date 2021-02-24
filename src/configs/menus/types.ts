/**
 * @author: zxs
 * @date: 2020/12/17
 */
export interface RouterType {
    name: string,
    key: string,
    path?: string,
    level: 1 | 2 | 3,
    children?: Array<RouterType>
}
