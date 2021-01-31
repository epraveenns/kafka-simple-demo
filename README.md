#Steps

- Install docker
- Run zookeper on docker `docker run --name zookeeper -p 2181:2181 zookeeper`
- Run kafka on docker `docker run -p 9092:9092 --name kafka -e KAFKA_ZOOKEEPER_CONNECT=Praveen-MacBook-Pro.local:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://Praveen-MacBook-Pro.local:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 -d confluentinc/cp-kafka`
- Switch to the project directory (kafka-simple-demo)
- Create a topic by running `node topic.js`. For the example, we are using hardcoded topic name in the code. We can get the topic name as argument if needed
- Run a consumer by running `node consumer.js`. To run multiple consumers, run in multiple terminal tabs
- Send message to the topic by running a producer `node producer.js <message you want to send>`
- You can see the message in the consumer terminals.
