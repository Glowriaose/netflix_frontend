# FROM ubuntu

# RUN apt-get update && apt-get install -y \
#     openjdk-17-jre-headless \
#     maven \
#     ca-certificates \
#     && rm -rf /var/lib/apt/lists/*

# WORKDIR /app

# COPY pom.xml .
# COPY src ./src

# # ✅ Receive from GitHub Actions
# ARG MONGO_URI

# # ✅ Make available to Spring BEFORE build
# ENV MONGO_URI=$MONGO_URI

# # (Optional debug)
# RUN echo "Mongo URI injected"

# # ✅ Run tests with correct DB connection
# RUN mvn clean package

# RUN cp target/*.jar app.jar

# EXPOSE 8080

# ENTRYPOINT ["java", "-jar", "app.jar"]
# Stage 1: Build the React application
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code and build
COPY . .
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the build output to Nginx's default public folder
COPY --from=build /app/build /usr/share/nginx/html

# Copy your custom reverse proxy configuration into Nginx
COPY default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]