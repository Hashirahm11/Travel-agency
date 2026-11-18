import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const testUrls = [
  {
    name: 'skardu-1',
    url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1200&q=80&auto=format'
  },
  {
    name: 'skardu-lake-mountains',
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80&auto=format'
  },
  {
    name: 'skardu-peaks',
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80&auto=format'
  },
  {
    name: 'skardu-valley',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80&auto=format'
  }
];

function testDownload(item) {
  return new Promise((resolve) => {
    https.get(item.url, (res) => {
      let data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(data);
        console.log(`${item.name}: status=${res.statusCode}, size=${buffer.length} bytes`);
        resolve({ name: item.name, status: res.statusCode, size: buffer.length });
      });
    }).on('error', err => {
      console.error(`${item.name} error: ${err.message}`);
      resolve({ name: item.name, status: 500, size: 0 });
    });
  });
}

async function run() {
  for (const t of testUrls) {
    await testDownload(t);
  }
}

run();
