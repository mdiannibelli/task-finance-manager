# Documentation, how to get up the project in development..

* Clone repository
* Create a copy of .env.template, rename to .env and then change env variables.
* Install dependences  ```pnpm install```
* Init database ```docker compose up -d```
* Migrate prisma ```pnpx prisma migrate dev```
* Clean localeStorage of your browser
* Execute seed ```pnpm run seed```
* Run project ```pnpm run dev```

1. Design UI ✅
2. Init database (docker-compose.yml) ✅
3. Init prisma and create schema (tables) and migrate dev ✅
4. Generate prisma client and create lib/prisma.ts with prisma config ✅
5. Generate seed in seed/seed-database.ts. (create “pnpm run seed” script) ✅
6. Show seed in UI ✅
7. Authjs, login and session. https://nextjs.org/learn/dashboard-app/adding-authentication
- install authjs, generate auth secret and configure auth.config.ts
- Create login form (csr) & "authenticate" login action
- get session in layout of login & register
- configure jwt token and session in auth.config
- create logout action

