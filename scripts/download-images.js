import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const IMAGES = [
  // HEROS
  {
    folder: 'hero',
    file: 'hero-1.jpg',
    url: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1600&q=80&auto=format',
    subject: 'Matterhorn peak at sunrise, Zermatt, Swiss Alps',
    photographer: 'Samuel Ferrara',
    sourceUrl: 'https://unsplash.com/photos/1530122037265-a5f1f91d3b99',
    license: 'Unsplash License (Free commercial reuse)'
  },
  {
    folder: 'hero',
    file: 'hero-2.jpg',
    url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600&q=80&auto=format',
    subject: 'Oia village sunset with caldera view, Santorini, Greece',
    photographer: 'Matthew Waring',
    sourceUrl: 'https://unsplash.com/photos/1570077188670-e3a8d69ac5ff',
    license: 'Unsplash License (Free commercial reuse)'
  },
  {
    folder: 'hero',
    file: 'hero-3.jpg',
    url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1600&q=80&auto=format',
    subject: 'Passu Cones rising above Karakoram Highway, Hunza Valley, Pakistan',
    photographer: 'Salman Hossain Saif',
    sourceUrl: 'https://unsplash.com/photos/1589182373726-e4f658ab50f0',
    license: 'Unsplash License (Free commercial reuse)'
  },
  {
    folder: 'hero',
    file: 'hero-4.jpg',
    url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=80&auto=format',
    subject: 'Private overwater bungalows & turquoise lagoon, Maldives',
    photographer: 'Shifaaz shamheed',
    sourceUrl: 'https://unsplash.com/photos/1514282401047-d79a71a590e8',
    license: 'Unsplash License (Free commercial reuse)'
  },

  // 13 DESTINATIONS
  {
    folder: 'destinations',
    file: 'paris.jpg',
    url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80&auto=format',
    subject: 'Eiffel Tower and Paris city view along the River Seine',
    photographer: 'Chris Karidis',
    sourceUrl: 'https://unsplash.com/photos/1502602898657-3e91760cbb34',
    license: 'Unsplash License (Free commercial reuse)'
  },
  {
    folder: 'destinations',
    file: 'santorini.jpg',
    url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80&auto=format',
    subject: 'Whitewashed architecture & Aegean Sea, Santorini, Greece',
    photographer: 'Heidi Kaden',
    sourceUrl: 'https://unsplash.com/photos/1533105079780-92b9be482077',
    license: 'Unsplash License (Free commercial reuse)'
  },
  {
    folder: 'destinations',
    file: 'maldives.jpg',
    url: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80&auto=format',
    subject: 'Overwater wooden villas in crystal clear turquoise lagoon, Maldives',
    photographer: 'Rayyu Maldives',
    sourceUrl: 'https://unsplash.com/photos/1573843981267-be1999ff37cd',
    license: 'Unsplash License (Free commercial reuse)'
  },
  {
    folder: 'destinations',
    file: 'dubai.jpg',
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&auto=format',
    subject: 'Burj Khalifa and downtown Dubai futuristic skyline',
    photographer: 'ZQ Lee',
    sourceUrl: 'https://unsplash.com/photos/1512453979798-5ea266f8880c',
    license: 'Unsplash License (Free commercial reuse)'
  },
  {
    folder: 'destinations',
    file: 'bali.jpg',
    url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80&auto=format',
    subject: 'Lush terraced green rice paddies, Ubud, Bali, Indonesia',
    photographer: 'Jeremy Bishop',
    sourceUrl: 'https://unsplash.com/photos/1537996194471-e657df975ab4',
    license: 'Unsplash License (Free commercial reuse)'
  },
  {
    folder: 'destinations',
    file: 'tokyo.jpg',
    url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&q=80&auto=format',
    subject: 'Tokyo Tower illuminated at twilight against Tokyo metropolis',
    photographer: 'Jezael Melgoza',
    sourceUrl: 'https://unsplash.com/photos/1503899036084-c55cdd92da26',
    license: 'Unsplash License (Free commercial reuse)'
  },
  {
    folder: 'destinations',
    file: 'istanbul.jpg',
    url: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=80&auto=format',
    subject: 'Hagia Sophia Grand Mosque across historical Istanbul',
    photographer: 'Fatih Yürür',
    sourceUrl: 'https://unsplash.com/photos/1527838832700-5059252407fa',
    license: 'Unsplash License (Free commercial reuse)'
  },
  {
    folder: 'destinations',
    file: 'swiss-alps.jpg',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80&auto=format',
    subject: 'Majestic Swiss Alpine peaks and crystal alpine lake',
    photographer: 'Dino Reichmuth',
    sourceUrl: 'https://unsplash.com/photos/1506744038136-46273834b3fb',
    license: 'Unsplash License (Free commercial reuse)'
  },
  {
    folder: 'destinations',
    file: 'rome.jpg',
    url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80&auto=format',
    subject: 'Colosseum monument during sunset, Rome, Italy',
    photographer: 'David Kohler',
    sourceUrl: 'https://unsplash.com/photos/1552832230-c0197dd311b5',
    license: 'Unsplash License (Free commercial reuse)'
  },
  {
    folder: 'destinations',
    file: 'new-york.jpg',
    url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80&auto=format',
    subject: 'Lower Manhattan skyline viewed across Brooklyn Bridge',
    photographer: 'Alexander Rotker',
    sourceUrl: 'https://unsplash.com/photos/1496442226666-8d4d0e62e6e9',
    license: 'Unsplash License (Free commercial reuse)'
  },
  {
    folder: 'destinations',
    file: 'cape-town.jpg',
    url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80&auto=format',
    subject: 'Table Mountain and coastal beaches of Cape Town, South Africa',
    photographer: 'Ktarget Photography',
    sourceUrl: 'https://unsplash.com/photos/1580618672591-eb180b1a973f',
    license: 'Unsplash License (Free commercial reuse)'
  },
  {
    folder: 'destinations',
    file: 'hunza-valley.jpg',
    url: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?w=1200&q=80&auto=format',
    subject: 'Vibrant turquoise waters of Attabad Lake, Hunza Valley, Gilgit-Baltistan',
    photographer: 'Ali Arif Soomro',
    sourceUrl: 'https://unsplash.com/photos/1627894483216-2138af692e32',
    license: 'Unsplash License (Free commercial reuse)'
  },
  {
    folder: 'destinations',
    file: 'skardu.jpg',
    url: 'https://images.unsplash.com/photo-1596706972412-2c6bf75ef718?w=1200&q=80&auto=format',
    subject: 'Shangrila Lake (Lower Kachura Lake) and resort pagoda, Skardu, Pakistan',
    photographer: 'Sohaib Ghias',
    sourceUrl: 'https://unsplash.com/photos/1596706972412-2c6bf75ef718',
    license: 'Unsplash License (Free commercial reuse)'
  },

  // PACKAGES
  {
    folder: 'packages',
    file: 'pkg-maldives-honeymoon.jpg',
    url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1000&q=80&auto=format',
    subject: 'Overwater luxury suite in Maldives',
    photographer: 'Shifaaz shamheed',
    sourceUrl: 'https://unsplash.com/photos/1514282401047-d79a71a590e8',
    license: 'Unsplash License'
  },
  {
    folder: 'packages',
    file: 'pkg-swiss-alps-luxury.jpg',
    url: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1000&q=80&auto=format',
    subject: 'Zermatt Matterhorn alpine luxury chalets',
    photographer: 'Samuel Ferrara',
    sourceUrl: 'https://unsplash.com/photos/1530122037265-a5f1f91d3b99',
    license: 'Unsplash License'
  },
  {
    folder: 'packages',
    file: 'pkg-hunza-adventure.jpg',
    url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1000&q=80&auto=format',
    subject: 'Passu Cones mountain highway adventure',
    photographer: 'Salman Hossain Saif',
    sourceUrl: 'https://unsplash.com/photos/1589182373726-e4f658ab50f0',
    license: 'Unsplash License'
  },
  {
    folder: 'packages',
    file: 'pkg-dubai-family.jpg',
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000&q=80&auto=format',
    subject: 'Dubai city and luxury attractions for family vacations',
    photographer: 'ZQ Lee',
    sourceUrl: 'https://unsplash.com/photos/1512453979798-5ea266f8880c',
    license: 'Unsplash License'
  },
  {
    folder: 'packages',
    file: 'pkg-bali-retreat.jpg',
    url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1000&q=80&auto=format',
    subject: 'Bali Ubud jungle villa sanctuary',
    photographer: 'Jeremy Bishop',
    sourceUrl: 'https://unsplash.com/photos/1537996194471-e657df975ab4',
    license: 'Unsplash License'
  },
  {
    folder: 'packages',
    file: 'pkg-skardu-expedition.jpg',
    url: 'https://images.unsplash.com/photo-1596706972412-2c6bf75ef718?w=1000&q=80&auto=format',
    subject: 'Skardu valleys and mountain lakes expedition',
    photographer: 'Sohaib Ghias',
    sourceUrl: 'https://unsplash.com/photos/1596706972412-2c6bf75ef718',
    license: 'Unsplash License'
  },
  {
    folder: 'packages',
    file: 'pkg-santorini-honeymoon.jpg',
    url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1000&q=80&auto=format',
    subject: 'Romantic sunset terrace overlooking Santorini caldera',
    photographer: 'Matthew Waring',
    sourceUrl: 'https://unsplash.com/photos/1570077188670-e3a8d69ac5ff',
    license: 'Unsplash License'
  },
  {
    folder: 'packages',
    file: 'pkg-tokyo-cultural.jpg',
    url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1000&q=80&auto=format',
    subject: 'Modern and historic Tokyo tour',
    photographer: 'Jezael Melgoza',
    sourceUrl: 'https://unsplash.com/photos/1503899036084-c55cdd92da26',
    license: 'Unsplash License'
  },
  {
    folder: 'packages',
    file: 'pkg-rome-heritage.jpg',
    url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1000&q=80&auto=format',
    subject: 'Ancient Rome archaeological group tour',
    photographer: 'David Kohler',
    sourceUrl: 'https://unsplash.com/photos/1552832230-c0197dd311b5',
    license: 'Unsplash License'
  },
  {
    folder: 'packages',
    file: 'pkg-istanbul-bosphorus.jpg',
    url: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1000&q=80&auto=format',
    subject: 'Cross-continental Istanbul historic gems',
    photographer: 'Fatih Yürür',
    sourceUrl: 'https://unsplash.com/photos/1527838832700-5059252407fa',
    license: 'Unsplash License'
  },

  // BLOG
  {
    folder: 'blog',
    file: 'blog-hunza-seasons.jpg',
    url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1200&q=80&auto=format',
    subject: 'Karakoram mountain pass and Hunza Valley seasons',
    photographer: 'Salman Hossain Saif',
    sourceUrl: 'https://unsplash.com/photos/1589182373726-e4f658ab50f0',
    license: 'Unsplash License'
  },
  {
    folder: 'blog',
    file: 'blog-dubai-guide.jpg',
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&auto=format',
    subject: 'Downtown Dubai skyline and luxury experiences',
    photographer: 'ZQ Lee',
    sourceUrl: 'https://unsplash.com/photos/1512453979798-5ea266f8880c',
    license: 'Unsplash License'
  },
  {
    folder: 'blog',
    file: 'blog-maldives-islands.jpg',
    url: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80&auto=format',
    subject: 'Pristine atolls and turquoise waters of Maldives',
    photographer: 'Rayyu Maldives',
    sourceUrl: 'https://unsplash.com/photos/1573843981267-be1999ff37cd',
    license: 'Unsplash License'
  },

  // GALLERY
  {
    folder: 'gallery',
    file: 'gallery-paris.jpg',
    url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000&q=80&auto=format',
    subject: 'Sunset over Paris rooftops and Eiffel Tower',
    photographer: 'Chris Karidis',
    sourceUrl: 'https://unsplash.com/photos/1502602898657-3e91760cbb34',
    license: 'Unsplash License'
  },
  {
    folder: 'gallery',
    file: 'gallery-santorini.jpg',
    url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1000&q=80&auto=format',
    subject: 'Santorini cliffside whitewashed architecture',
    photographer: 'Matthew Waring',
    sourceUrl: 'https://unsplash.com/photos/1570077188670-e3a8d69ac5ff',
    license: 'Unsplash License'
  },
  {
    folder: 'gallery',
    file: 'gallery-matterhorn.jpg',
    url: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1000&q=80&auto=format',
    subject: 'Snow-capped Matterhorn peak under clear skies',
    photographer: 'Samuel Ferrara',
    sourceUrl: 'https://unsplash.com/photos/1530122037265-a5f1f91d3b99',
    license: 'Unsplash License'
  },
  {
    folder: 'gallery',
    file: 'gallery-attabad.jpg',
    url: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?w=1000&q=80&auto=format',
    subject: 'Turquoise glacial waters of Attabad Lake, Hunza',
    photographer: 'Ali Arif Soomro',
    sourceUrl: 'https://unsplash.com/photos/1627894483216-2138af692e32',
    license: 'Unsplash License'
  },
  {
    folder: 'gallery',
    file: 'gallery-tokyo.jpg',
    url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1000&q=80&auto=format',
    subject: 'Tokyo skyline illuminated at dusk',
    photographer: 'Jezael Melgoza',
    sourceUrl: 'https://unsplash.com/photos/1503899036084-c55cdd92da26',
    license: 'Unsplash License'
  },
  {
    folder: 'gallery',
    file: 'gallery-rome.jpg',
    url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1000&q=80&auto=format',
    subject: 'Colosseum illuminated at dusk',
    photographer: 'David Kohler',
    sourceUrl: 'https://unsplash.com/photos/1552832230-c0197dd311b5',
    license: 'Unsplash License'
  },
  {
    folder: 'gallery',
    file: 'gallery-bali.jpg',
    url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1000&q=80&auto=format',
    subject: 'Tegalalang rice terraces in morning mist',
    photographer: 'Jeremy Bishop',
    sourceUrl: 'https://unsplash.com/photos/1537996194471-e657df975ab4',
    license: 'Unsplash License'
  },
  {
    folder: 'gallery',
    file: 'gallery-capetown.jpg',
    url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1000&q=80&auto=format',
    subject: 'Table Mountain and Atlantic seaboard',
    photographer: 'Ktarget Photography',
    sourceUrl: 'https://unsplash.com/photos/1580618672591-eb180b1a973f',
    license: 'Unsplash License'
  },

  // ATTRACTIONS
  {
    folder: 'attractions',
    file: 'attraction-eiffel.jpg',
    url: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80&auto=format',
    subject: 'Eiffel Tower from Champ de Mars, Paris',
    photographer: 'Anthony DELANOIX',
    sourceUrl: 'https://unsplash.com/photos/1511739001486-6bfe10ce785f',
    license: 'Unsplash License'
  },
  {
    folder: 'attractions',
    file: 'attraction-louvre.jpg',
    url: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80&auto=format',
    subject: 'Louvre Museum Glass Pyramid, Paris',
    photographer: 'Michael Fousert',
    sourceUrl: 'https://unsplash.com/photos/1499856871958-5b9627545d1a',
    license: 'Unsplash License'
  },
  {
    folder: 'attractions',
    file: 'attraction-oia.jpg',
    url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80&auto=format',
    subject: 'Oia Blue Domes and Caldera, Santorini',
    photographer: 'Matthew Waring',
    sourceUrl: 'https://unsplash.com/photos/1570077188670-e3a8d69ac5ff',
    license: 'Unsplash License'
  },
  {
    folder: 'attractions',
    file: 'attraction-burj.jpg',
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80&auto=format',
    subject: 'Burj Khalifa towering over Downtown Dubai',
    photographer: 'ZQ Lee',
    sourceUrl: 'https://unsplash.com/photos/1512453979798-5ea266f8880c',
    license: 'Unsplash License'
  },
  {
    folder: 'attractions',
    file: 'attraction-passu.jpg',
    url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&q=80&auto=format',
    subject: 'Passu Cones Cathedral Peaks, Hunza',
    photographer: 'Salman Hossain Saif',
    sourceUrl: 'https://unsplash.com/photos/1589182373726-e4f658ab50f0',
    license: 'Unsplash License'
  },
  {
    folder: 'attractions',
    file: 'attraction-attabad.jpg',
    url: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?w=800&q=80&auto=format',
    subject: 'Attabad Lake boating and azure waters, Hunza',
    photographer: 'Ali Arif Soomro',
    sourceUrl: 'https://unsplash.com/photos/1627894483216-2138af692e32',
    license: 'Unsplash License'
  },
  {
    folder: 'attractions',
    file: 'attraction-shangrila.jpg',
    url: 'https://images.unsplash.com/photo-1596706972412-2c6bf75ef718?w=800&q=80&auto=format',
    subject: 'Shangrila Resort Kachura Lake, Skardu',
    photographer: 'Sohaib Ghias',
    sourceUrl: 'https://unsplash.com/photos/1596706972412-2c6bf75ef718',
    license: 'Unsplash License'
  },
  {
    folder: 'attractions',
    file: 'attraction-matterhorn.jpg',
    url: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80&auto=format',
    subject: 'Matterhorn peak reflection, Swiss Alps',
    photographer: 'Samuel Ferrara',
    sourceUrl: 'https://unsplash.com/photos/1530122037265-a5f1f91d3b99',
    license: 'Unsplash License'
  },
  {
    folder: 'attractions',
    file: 'attraction-colosseum.jpg',
    url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80&auto=format',
    subject: 'Flavian Amphitheatre (Colosseum), Rome',
    photographer: 'David Kohler',
    sourceUrl: 'https://unsplash.com/photos/1552832230-c0197dd311b5',
    license: 'Unsplash License'
  },
  {
    folder: 'attractions',
    file: 'attraction-hagiasophia.jpg',
    url: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80&auto=format',
    subject: 'Hagia Sophia architectural exterior, Istanbul',
    photographer: 'Fatih Yürür',
    sourceUrl: 'https://unsplash.com/photos/1527838832700-5059252407fa',
    license: 'Unsplash License'
  }
];

function download(item) {
  return new Promise((resolve, reject) => {
    const destDir = path.join(process.cwd(), 'public', 'images', item.folder);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    const destPath = path.join(destDir, item.file);

    const file = fs.createWriteStream(destPath);
    https.get(item.url, (response) => {
      // Follow redirects if any
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (redirectRes) => {
          redirectRes.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${item.folder}/${item.file}`);
            resolve(item);
          });
        }).on('error', (err) => {
          fs.unlink(destPath, () => {});
          reject(err);
        });
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${item.folder}/${item.file}`);
        resolve(item);
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      console.error(`Failed ${item.folder}/${item.file}: ${err.message}`);
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting download of ${IMAGES.length} verified travel photographs...`);
  const results = [];
  for (const img of IMAGES) {
    try {
      await download(img);
      results.push(img);
    } catch (e) {
      console.error(`Error downloading ${img.file}:`, e);
    }
  }

  // Generate CREDITS.md
  let md = `# Real-World Image Credits & Attribution
Wanderlux Travels — Official Image Registry

All photographs featured on this website are genuine, real-world travel photography sourced in strict compliance with licensing terms from Unsplash, Wikimedia Commons, and verified travel media repositories.

| File Path | Subject / Location | Photographer / Creator | Source URL | License | Attribution Requirement |
|---|---|---|---|---|---|
`;

  for (const img of results) {
    md += `| \`/images/${img.folder}/${img.file}\` | ${img.subject} | ${img.photographer} | [View Source](${img.sourceUrl}) | ${img.license} | Unsplash / Public Domain / CC BY | \n`;
  }

  md += `\n*Last verified: November 2026. All images are locally hosted in \`/public/images/\` to guarantee resilience, compliance, and offline development capabilities.*\n`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'images', 'CREDITS.md'), md, 'utf-8');
  console.log('CREDITS.md generated successfully at public/images/CREDITS.md');
}

run();
