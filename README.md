# Websheep

[Open in Codesandbox](https://codesandbox.io/s/github/wishtack/websheep)

# Local setup

Install [Node](https://nodejs.org/en/download/) & [Yarn](https://classic.yarnpkg.com/en/docs/install/)

```
yarn install
yarn start
```
# Running websheeb using docker

1. download the repository as a zip file
2. unzip to a folder and rename it to websheep
3. copy the Dockerfile outside websheep so your directory structure will look like

```
$ ls -l      
total 8
-rw-r--r-- 1 kali kali  177 Oct 19 09:55 Dockerfile
drwxr-xr-x 8 kali kali 4096 Oct 19 09:48 websheep
```

4. build docker image using

```
docker build -t mysheep .
```

5. upon successful image build run the container as

```
sudo docker run --rm -d --name sheep_container -p 4200:4200 -p 3333:3333 mysheep 
```

