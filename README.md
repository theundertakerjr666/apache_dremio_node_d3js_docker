# apache_dremio_node_d3js_docker
Dockerised implementation of Dremio training material (Dremio, cvs data, Node.js and D3.js visualisation)

## Image Build

You can build this image by identifying a Dremio download tarball download URL and then running the following command:

``` bash
docker build --build-arg DOWNLOAD_URL=<URL> -t "dremio-oss:latest" .
```
---

## Single Node Deployment

```bash
docker run -p 9047:9047 -p 31010:31010 -p 45678:45678 dremio/dremio-oss
```
This includes a single node deployment that starts up a single daemon that includes:
* Embedded Zookeeper
* Master Coordinator
* Executor
* NodeJS

---

## Multi-node Deployment

Visit Dremio's site for more details.
