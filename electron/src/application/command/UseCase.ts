export interface UseCase<T, R> {

    execute(request: T): Promise<R>;
}