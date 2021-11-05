FROM node:12.22.0

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2@latest

RUN pm2 update

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Copy all files
COPY ./ ./

RUN chmod -R u+w /usr/app

# Install dependencies
RUN npm install

# Build app
RUN npm run build:prod

# Expose the listening port
EXPOSE 6100

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD node healthcheck.js


CMD [ "pm2-runtime", "start", "--name", "web-service", "--watch", "npm", "--", "run", "start" ]
