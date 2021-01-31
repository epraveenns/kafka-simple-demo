const Kafka = require("kafkajs").Kafka



run();

async function run() {
    try {
        const kafka = new Kafka({
            "clientId": "myapp", //can be anything
            "brokers": ["Praveen-MacBook-Pro.local:9092"]
        })

        const consumer = kafka.consumer({
            "groupId": "test"
        });
        console.log('Connecting....')
        await consumer.connect()
        console.log('connected')

        consumer.subscribe({
            "topic":"Users",
            "fromBeginning": true
        })

        await consumer.run({
            "eachMessage": async result => console.log(`Received message ${result.message.value} on partition ${result.partition}`),
        })
    }
    catch (ex) {
        console.error(`Something bad happened ${ex}`)
    }
    finally {
        
    }
}