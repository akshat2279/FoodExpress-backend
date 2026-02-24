import mongoose from "mongoose";


const CONNECTION_ERROR_MSG = {
  unable_to_connect_to_database: "Unable to connect to the database:",
};

const connectToDb = async () => {
  const maxRetryAttempts = 3; 
  let retryCount = 0;

  while (retryCount < maxRetryAttempts) {
    try {
      const dbUrl = "mongodb+srv://admin:o8j0AQdFDVB3ym7g@cluster0.64giu.mongodb.net/";
      // mongoose.set("debug", true);
      await mongoose.connect(dbUrl);
      mongoose.connection.setMaxListeners(20);
      mongoose.connection.on("error", (error) => {
        console.error(
          `${CONNECTION_ERROR_MSG.unable_to_connect_to_database} ${error}`,
        );
      });

      console.log("Connected to database successfully.");
      return; // Exit the function if connection is successful
    } catch (error) {
      console.error(
        `${CONNECTION_ERROR_MSG.unable_to_connect_to_database} ${error}`,
      );
      retryCount++;
      console.log(
        `Retrying connection... Attempt ${retryCount} of ${maxRetryAttempts}`,
      );
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds before retrying
    }
  }

  throw new Error(`${CONNECTION_ERROR_MSG.unable_to_connect_to_database}`);
};

export default connectToDb;
