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
console.log(news);

const categories = await client.getCategory();
console.log(categories);
```


News response format is as the following:


| Field           | Type    | Description               |
| --------------- | ------- | ------------------------- |
| `id`            | number | Unique ID                 |
| `ntype`         | string  | News Type                 |
| `nid`           | number | News ID                   |
| `guid`          | string  | News GUID                 |
| `published_on`  | string  | Published Date            |
| `image_url`     | string  | News Thumbnail URI        |
| `title`         | string  | News Title                |
| `url`           | string  | News URI                  |
| `source_id`     | number | Source ID                 |
| `body`          | string  | Summary Content           |
| `keywords`      | string  | Keywords                  |
| `lang`          | string  | Language                  |
| `category`      | string  | Categories                |

