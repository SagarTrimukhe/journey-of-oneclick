export interface IBookItem {
    id: string;
    name: string;
    author: string;
}

export interface IPublisherItem {
    id: string;
    name: string;
    revenue: string;
}

export interface IBooksResponse {
    items: Array<IBookItem>;
    metadata: { title: string; source: string };
}

export interface IPublishersResponse {
    items: Array<IPublisherItem>;
    metadata: { title: string; source: string };
}
