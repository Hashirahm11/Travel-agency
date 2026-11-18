import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const downloads = [
  {
    dest: path.join(process.cwd(), 'public', 'images', 'destinations', 'skardu.jpg'),
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80&auto=format',
    name: 'destinations/skardu.jpg'
  },
  {
    dest: path.join(process.cwd(), 'public', 'images', 'attractions', 'attraction-shangrila.jpg'),
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80&auto=format',
    name: 'attractions/attraction-shangrila.jpg'
  },
  {
    dest: path.join(process.cwd(), 'public', 'images', 'packages', 'pkg-skardu-expedition.jpg'),
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&q=80&auto=format',
    name: 'packages/pkg-skardu-expedition.jpg'
  }
];

function downloadFile(item) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(item.dest);
    https.get(item.url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (redRes) => {
          redRes.pipe(file);
          file.on('finish', () => {
            file.close();
            const sz = fs.statSync(item.dest).size;
            console.log(`Saved ${item.name}: ${sz} bytes`);
            resolve(sz);
          });
        }).on('error', reject);
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        const sz = fs.statSync(item.dest).size;
        console.log(`Saved ${item.name}: ${sz} bytes`);
        resolve(sz);
      });
    }).on('error', reject);
  });
}

async function main() {
  for (const item of downloads) {
    await downloadFile(item);
  }
  console.log('Done downloading replacements.');
}

main();
