# ValidAll

Uitleg project en wat het nut ervan is
ValidAll is a website accessibility checker. The application runs a few accessibility test on the given URL's.
The first test is on the WCAG guidelines. The second test is to see if there is a accessibility statement on every URL of the same domain.
The third test is to see if the website has a ssl certificate.

The application is very useful for people that want to improve the accessibility of their website.

## Deployement

For the deployement of the application there is a docker compose file that will deploy both the backend and the frontend.

### Backend only

If you want to deploy the backend only. You can build and run the Dockerfile that is in the backend folder.

### Frontend only

If you want to deploy the frontend only. You can build and run the Dockerfile that is in the frontend folder.

## Development

### Backend

To start the backend first run the command in the backend folder:

```cmd
npm install
```
Then if you want to start the backend run:
```cmd
npm run dev
```
Then you can visit the backend documentation on localhost:3000

### Frontend

To start the frontend first run the command in the frontend folder:

```cmd
npm install
```
Then if you want to start the frontend run:
```cmd
npm run dev
```
Then you can visit the frontend on localhost:5173
