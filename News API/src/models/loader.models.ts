import { IResponseArticles } from "./article.models";
import { Callback } from "./callback.models";
import { IResponseSources } from "./source.models";

export type Options = {
    [key: string]: string
}

export const enum ResponseStatuses {
    Ok = 200,
    BadRequest = 400,
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound = 404
}

export interface ILoader {
    getResp({ endpoint, options}: { endpoint: string; options?: Partial<Options>}, callback: Callback<IResponseArticles>): void;
    errorHandler(res: Response): Response;
    makeUrl(options: Partial<Options>, endpoint: string): string;
    load(method: string, endpoint: string, callback: Callback<IResponseSources>, options: Partial<Options>): void;
}

