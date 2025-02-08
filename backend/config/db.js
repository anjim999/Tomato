import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://venkatareddyallu1:6300459621@cluster0.y4rfs.mongodb.net/food-del')
        .then(() => console.log("DB Connected"))
        .catch((err) => console.error("DB Connection Error:", err));
};
