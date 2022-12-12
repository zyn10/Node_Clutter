const{MongoClient}= require('mongodb');

async function main(){
	const uri="mongodb+srv://zain10:ume12345@cluster0.no9bzgo.mongodb.net/?retryWrites=true&w=majority"
 const client = new MongoClient(uri);
 
 try{
	await client.connect();
    createdata(client,{
		NAME: "Olives",
		QTY:22,
		PRICE:2000
	})
 }
 catch (e){
	console.error(e)
 }finally{
	await client.close();
 }
}

//retrieve data 
async function createdata(NAME,QTY,PRICE){
	const result=await client.db("Cluster0").collection("Data ").insertOne(NAME,QTY,PRICE);
	console.log(`New data inserted with the following ID: ${result.insertedId}`)

}

async function listDatabases(client){
	const databasesList = await client.db().admin().listDatabases();

	console.log("Databases: ");
	databasesList.databases.forEach(db => {
		console.log(`-${db.name}`);
	})
}

