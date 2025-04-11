# chainecho-api
Node.js API Client for https://chainecho.me


## Install

```bash
npm install chainecho-api
```


## Usage

```js
import client, { News } from 'chainecho-api';

const CHAINECHO_API_KEY = 'xxxxxxxxxxxxxxxxxx';
client.setToken(CHAINECHO_API_KEY);

const news: News[] = await client.getLatestNews(20);
console.log(news.length);
```