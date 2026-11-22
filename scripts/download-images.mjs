import fs from 'fs';
import path from 'path';
import https from 'https';

const IMAGES = [
  { name: 'hero-bg.jpg', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80' },
  { name: 'hero-furniture.jpg', url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80' },
  
  // Categories
  { name: 'cat-meja.jpg', url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80' },
  { name: 'cat-kursi.jpg', url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80' },
  { name: 'cat-sofa.jpg', url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80' },
  { name: 'cat-lemari.jpg', url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80' },
  { name: 'cat-tempat-tidur.jpg', url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80' },
  { name: 'cat-kitchen-set.jpg', url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80' },
  { name: 'cat-kantor.jpg', url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80' },

  // Featured Products
  { name: 'prod-nordic-chair.jpg', url: 'https://images.unsplash.com/photo-1580481077195-c3a821a58875?auto=format&fit=crop&w=800&q=80' },
  { name: 'prod-teak-dining.jpg', url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80' },
  { name: 'prod-velvet-sofa.jpg', url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80' },
  { name: 'prod-walnut-credenza.jpg', url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80' },
  { name: 'prod-zenith-bed.jpg', url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80' },
  { name: 'prod-apex-desk.jpg', url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80' },
  { name: 'prod-marble-coffee.jpg', url: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80' },
  { name: 'prod-bespoke-kitchen.jpg', url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80' },

  // Collections
  { name: 'col-minimalis.jpg', url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80' },
  { name: 'col-scandinavian.jpg', url: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80' },
  { name: 'col-industrial.jpg', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80' },
  { name: 'col-modern.jpg', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80' },
  { name: 'col-klasik.jpg', url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80' },

  // Materials & Finishing
  { name: 'mat-jati.jpg', url: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80' },
  { name: 'mat-mahoni.jpg', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80' },
  { name: 'mat-sungkai.jpg', url: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80' },
  { name: 'mat-marmer.jpg', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80' },
  { name: 'mat-finishing-natural.jpg', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80' },
  { name: 'mat-kain-velvet.jpg', url: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80' },

  // Projects
  { name: 'proj-villa-bali.jpg', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
  { name: 'proj-penthouse.jpg', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80' },
  { name: 'proj-hotel-ubud.jpg', url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80' },
  { name: 'proj-cafe.jpg', url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80' },
  { name: 'proj-office.jpg', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80' },
  { name: 'proj-townhouse.jpg', url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80' },

  // Process
  { name: 'proc-consultation.jpg', url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80' },
  { name: 'proc-material.jpg', url: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80' },
  { name: 'proc-crafting.jpg', url: 'https://images.unsplash.com/photo-1502005229762-ee1b2b8ab98f?auto=format&fit=crop&w=800&q=80' },
  { name: 'proc-finishing.jpg', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80' },

  // Testimonials & About
  { name: 'testi-1.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80' },
  { name: 'testi-2.jpg', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
  { name: 'testi-3.jpg', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80' },
  { name: 'testi-4.jpg', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80' },
  { name: 'about-workshop.jpg', url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80' },
  { name: 'about-craftsman.jpg', url: 'https://images.unsplash.com/photo-1502005229762-ee1b2b8ab98f?auto=format&fit=crop&w=800&q=80' }
];

const destDir = path.resolve('public', 'images');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function downloadImage(item) {
  return new Promise((resolve, reject) => {
    const dest = path.join(destDir, item.name);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`Already exists: ${item.name}`);
      return resolve();
    }
    
    const file = fs.createWriteStream(dest);
    
    function getWithRedirect(url) {
      https.get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          getWithRedirect(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          file.close();
          fs.unlinkSync(dest);
          return reject(new Error(`Status ${res.statusCode} for ${url}`));
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            console.log(`Downloaded: ${item.name}`);
            resolve();
          });
        });
      }).on('error', (err) => {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        reject(err);
      });
    }
    
    getWithRedirect(item.url);
  });
}

async function run() {
  console.log(`Downloading ${IMAGES.length} images...`);
  for (const item of IMAGES) {
    try {
      await downloadImage(item);
    } catch (e) {
      console.error(`Failed ${item.name}: ${e.message}`);
    }
  }
  console.log('Finished downloading images.');
}

run();
