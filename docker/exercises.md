# Exercise 1: Getting Started with Docker

## Objective
Learn to check the Docker installation and run your first container.

## Steps
1. **Check Docker Version**
   ```sh
   docker --version
   ```
   Ensure Docker is installed and running.

2. **Run Hello World Container**
   ```sh
   docker run hello-world
   ```
   This pulls and runs the official Hello World image from Docker Hub.

3. **List Running Containers**
   ```sh
   docker ps
   ```
   Since `hello-world` exits immediately, you might not see it. Check all containers:
   ```sh
   docker ps -a
   ```

4. **Remove the Container**
   ```sh
   docker rm <container_id>
   ```
   Replace `<container_id>` with the actual container ID from `docker ps -a`.

---

# Exercise 2: Working with Docker Images

## Objective
Learn to pull and manage Docker images.

## Steps
1. **Pull an Image from Docker Hub**
   ```sh
   docker pull alpine
   ```
   Alpine is a lightweight Linux distribution.

2. **List Downloaded Images**
   ```sh
   docker images
   ```
   This shows all locally stored images.

3. **Run a Container from the Image**
   ```sh
   docker run -it alpine /bin/sh
   ```
   You are now inside an Alpine Linux shell.

4. **Exit the Container**
   Type `exit` to leave the container.

5. **Remove the Image**
   ```sh
   docker rmi alpine
   ```
   Ensure no running containers use this image before removing it.

---

# Exercise 3: Running a Web Server in Docker

## Objective
Run an Nginx web server as a Docker container.

## Steps
1. **Pull the Nginx Image**
   ```sh
   docker pull nginx
   ```

2. **Run the Nginx Container**
   ```sh
   docker run -d -p 8080:80 nginx
   ```
   This runs Nginx in detached mode (`-d`) and maps port 80 in the container to port 8080 on your machine.

3. **Verify the Running Container**
   ```sh
   docker ps
   ```
   You should see the Nginx container running.

4. **Test the Server**
   Open your browser and go to `http://localhost:8080` to see the Nginx welcome page.

5. **Stop and Remove the Container**
   ```sh
   docker stop <container_id>
   docker rm <container_id>
   ```

---

# Exercise 4: Using Docker Volumes

## Objective
Understand how to persist data using Docker volumes.

## Steps
1. **Create a Named Volume**
   ```sh
   docker volume create mydata
   ```

2. **Run a Container with a Volume**
   ```sh
   docker run -d --name mycontainer -v mydata:/data nginx
   ```
   This attaches the `mydata` volume to `/data` in the Nginx container.

3. **Inspect the Volume**
   ```sh
   docker volume inspect mydata
   ```

4. **Remove the Container and Volume**
   ```sh
   docker stop mycontainer
   docker rm mycontainer
   docker volume rm mydata
   ```

---

# Exercise 5: Creating and Running a Custom Dockerfile

## Objective
Build and run a custom Docker image.

## Steps
1. **Create a `Dockerfile`**
   ```sh
   echo -e "FROM alpine\nRUN echo 'Hello from custom image' > /message.txt" > Dockerfile
   ```

2. **Build the Image**
   ```sh
   docker build -t mycustomimage .
   ```

3. **Run a Container from the Image**
   ```sh
   docker run mycustomimage cat /message.txt
   ```
   You should see `Hello from custom image` printed in the terminal.

4. **List Your Custom Image**
   ```sh
   docker images
   ```

5. **Remove the Image**
   ```sh
   docker rmi mycustomimage