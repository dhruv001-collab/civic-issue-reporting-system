import mongoose from "mongoose";

// Function to connect to MongoDB

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("MongoDB connected successfully");
        });
        await mongoose.connect(`${process.env.MONGODB_URI}`, {
            dbName: "UrbanFix",
        });
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); // Stop the app if DB is not connected
    }
}

export default connectDB;