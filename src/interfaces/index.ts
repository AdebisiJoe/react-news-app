export type New = {
    source: {
        id: string | null;
        name: string;
    };
    author: string;
    title: string| null;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
};
