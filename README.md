# Documentation, how to get up the project in development..

* Clone repository
* Create a copy of .env.template, rename to .env and then change env variables.
* Install dependences  ```pnpm install```
* Init database ```docker compose up -d```
* Migrate prisma ```pnpx prisma migrate dev```
* Clean localeStorage of your browser
* Execute seed ```pnpm run seed```
* Run project ```pnpm run dev```

