
import parser from 'esm-serialize';
import axios from 'axios';

export interface News {
    id: number;
    ntype: string;
    nid: number;
    guid: string;
    published_on: string;
    image_url: string;
    title: string;
    url: string;
    source_id: number;
    body: string;
    keywords: string;
    lang: string;
    category: string;
}

interface ResponseFormat {
    success: boolean;
    data: News[];
    error: string | null;
}

export class Client {
    private API_KEY: string = '';

    public setToken(token: string) {
        this.API_KEY = token;
    }

    public async getLatestNews(limit: number = 10): Promise<News[]> {

        const resp = await axios.post('https://chainecho.me/api/v2/article', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: this.API_KEY,
                limit: limit,
            })
        });
        
        if (resp.status === 200) {
            const ret: ResponseFormat = parser.unserialize(resp.data);
            if (ret.success)
                return ret.data;
            else
                console.error(ret.error);
        }

        return [];
    }
}

export default new Client();