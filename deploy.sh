#!/bin/bash

# Clean up any existing build
rm -rf client/build

# Install dependencies
cd client
npm install

# Build the project
npm run build

# Copy redirects and headers
cp public/_redirects build/_redirects
cp public/_headers build/_headers

# Deploy to Netlify
npx netlify deploy --prod --dir=build --site=ba422e44-e256-45e8-a8b4-8b84ffea0b52 