FROM node:16 as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}
RUN npm install --global pnpm

WORKDIR /usr/src/app
COPY . .
RUN pnpm install
RUN pnpm run build
EXPOSE 3000
CMD ["pnpm", "run", "start:prod"]