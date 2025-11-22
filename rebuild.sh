#!/bin/bash
echo "🧹 Nettoyage du cache Next.js..."
rm -rf .next

echo "📦 Build de l'application..."
npm run build

echo "🔄 Redémarrage PM2..."
pm2 restart ecosystem.config.js

echo "✅ Site mis à jour !"
pm2 status | grep hervedequelen-site
