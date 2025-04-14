
import parser from 'esm-serialize';
import axios, { AxiosResponse } from 'axios';
import https from 'https';

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
        try {
            const resp: AxiosResponse = await axios.post('https://chainecho.me/api/v2/article', 
                {
                    token: this.API_KEY,
                    limit: limit,
                }, 
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (resp.status === 200) {
                const ret: ResponseFormat = parser.unserialize(resp.data);
                if (ret.success)
                    return ret.data;
                else
                    console.error(ret.error);
            }
        }
        catch (e) {
            console.log(e);
        }

        return [];
    }

    public async getCategories() {
        const axiosIns = axios.create({
            httpsAgent: new https.Agent({ rejectUnauthorized: false })
        });

        try {
            const resp: AxiosResponse = await axiosIns.post('https://chainecho.me/api/v2/category', 
                {
                    token: this.API_KEY
                }, 
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (resp.status === 200) {
                const ret: ResponseFormat = parser.unserialize(resp.data);
                if (ret.success)
                    return ret.data;
                else
                    console.error(ret.error);
            }
        }
        catch (e) {
            console.log(e);
        }

        return [];
    }
}

export default new Client();