import mongoose from "mongoose";

export default interface ITodo extends mongoose.Document {
    title: String;
    completed: Boolean;
    tags: String[];
}