#!/bin/bash
rm -rf .next && npm run build && pm2 restart ecosystem.config.js && pm2 status | grep hervedequelen-site
