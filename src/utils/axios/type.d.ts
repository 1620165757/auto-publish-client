export interface ResponseType<T> {
    code: 0 | 1,
    message: string,
    data: T
}
