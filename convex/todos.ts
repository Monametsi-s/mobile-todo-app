import { query, mutation } from "./_generated/server";
import { v } from 'convex/values'

export const getTodos = query({
    handler: async (context) => {
        const todos = await context.db.query("todos").order("desc").collect();
        return todos;
    },
});

export const addTodo = mutation({
    args: { text: v.string()},
    handler: async (useContext, args) => {
       const todoId = await useContext.db.insert("todos", {
        text: args.text,
        isCompleted: false
       }) 
       return todoId;         
    }


})