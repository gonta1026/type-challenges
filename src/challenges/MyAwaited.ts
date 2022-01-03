type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> : T;
type FetchProfile = Promise<string>;
type Result = MyAwaited<FetchProfile>; // string
