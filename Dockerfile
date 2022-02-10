#FROM node:10.15.0 as build
#WORKDIR /usr/local/app
#COPY ./ /usr/local/app/
#RUN npm install
#RUN npm run build
#FROM nginx:latest
#COPY --from=build /usr/local/app/dist/WypozyczalniaSamochodow /usr/share/nginx/html
#EXPOSE 80
#

#stage 1
FROM node:10.15.0 as node
WORKDIR /WypozyczalniaSamochodow
#COPY . .
COPY --from=build /WypozyczalniaSamochodow/dist/WypozyczalniaSamochodow /usr/share/nginx/html
RUN npm install
RUN npm run build
#FROM nginx:alpine
#COPY /WypozyczalniaSamochodow/dist/WypozyczalniaSamochodow/ .
#COPY --from=build /WypozyczalniaSamochodow/dist/WypozyczalniaSamochodow /usr/share/nginx/html
EXPOSE 4200
