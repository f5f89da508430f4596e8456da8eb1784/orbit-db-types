declare module "orbit-db-docstore" {
    import Store from "orbit-db-store";

    export default class DocumentStore<T> extends Store {

        put(any: T): Promise<string>;
        get(key: string): T[];

        query(mapper: (doc: T) => void): T[]

        del(key: string): Promise<string>;

    }
}
