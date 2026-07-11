import mongoose from 'mongoose';

export async function connectToMongoDB() {
  try {
    await mongoose.connect("mongodb+srv://deepaknegi16360_db_user:I197C2K52TQlRnRn@cluster0.mifrpxk.mongodb.net/BookStore?appName=Cluster0");
    console.log("You successfully connected to MongoDB!");
    return mongoose;
  } catch (err) {
    console.dir(err);
  }
}

// Call this only when your application terminates
export async function disconnectFromMongoDB() {
  await mongoose.connection.close();
}