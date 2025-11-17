#!/bin/bash

# VPS Details
VPS_IP="31.220.109.140"
VPS_USER="root"
VPS_PATH="/root/ufuq"

echo "Uploading changed files to VPS..."

# Upload Footer.tsx
echo "Uploading Footer.tsx..."
scp "client/src/components/Footer.tsx" ${VPS_USER}@${VPS_IP}:${VPS_PATH}/client/src/components/Footer.tsx

# Upload Header.tsx
echo "Uploading Header.tsx..."
scp "client/src/components/Header.tsx" ${VPS_USER}@${VPS_IP}:${VPS_PATH}/client/src/components/Header.tsx

# Upload App.tsx
echo "Uploading App.tsx..."
scp "client/src/App.tsx" ${VPS_USER}@${VPS_IP}:${VPS_PATH}/client/src/App.tsx

# Upload USMarket.tsx (new file)
echo "Uploading USMarket.tsx..."
scp "client/src/pages/USMarket.tsx" ${VPS_USER}@${VPS_IP}:${VPS_PATH}/client/src/pages/USMarket.tsx

echo "All files uploaded successfully!"
echo ""
echo "Next steps:"
echo "1. SSH into your VPS: ssh ${VPS_USER}@${VPS_IP}"
echo "2. Navigate to project: cd ${VPS_PATH}"
echo "3. Rebuild the project: npm run build"
echo "4. Restart the server: pm2 restart all (or your restart command)"
