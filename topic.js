const Kafka = require("kafkajs").Kafka

run();

async function run() {
    try {
        const kafka = new Kafka({
            "clientId": "myapp", //can be anything
            "brokers": ["Praveen-MacBook-Pro.local:9092"]
        })

        const admin = kafka.admin();
        console.log('Connecting....')
        await admin.connect()
        console.log('connected')

        //A-M, N-Z
        await admin.createTopics(
            {"topics": [{
                "topic": "Users",
                "numPartitions": 2
            }]}
        )
        console.log("Created topics successfully")
        await admin.disconnect();
    }
    catch (ex) {
        console.error(`Something bad happened ${ex}`)
    }
    finally {
        process.exit(0);
    }
}