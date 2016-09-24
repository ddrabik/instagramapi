# Restful Challenge

This web application will display photos from your Instagram account. After logging in, you will see the most recent 20 photos in a grid format. If you prefer viewing them as a timeline, click the list icon at the top of the page.

Clicking the photo will load a detailed view that contains a high resolution version of the image and a caption. If the photo has a location, you can view other photos in that area by clicking the link starting with "View more photos in ..."

At the top of the page, there are two navigation links - home and nearby. Nearby will display all the photos near your location. It uses the HTML5 geolocation API. Since the client is a sandbox, only authorized sandbox users' photos will appear. If deployed, this page could show an unlimited amount of photos.

## Running the app

This app was developed locally and uses jsonP to circumvent Cross-Domain restrictions.
Run from the project root:

Install dependencies:
`npm install`

Install bower dependencies:
`npm install -g bower`
`bower install`

Run the local server:
`npm start`

The server should start on  http://localhost:8000.
If the server starts on one different from 8000, the Oauth flow will not work. This can be fixed in Instagram Developers site -> Manage Clients -> Fotition Challenge -> Security. Add http://localhost:{newPort}/login.html.

## Next steps

If I were to continue working on this project, I would add the following features:

1. Add animation between views
1. Infinite scroll for grid and list views. More photos load as you scroll down the page.
2. Show comments, likes, and time created on the detail view.
3. Add sorting - one idea is to show a trending view using Likes-per-minute.

