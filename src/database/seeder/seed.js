import "dotenv/config"
import User from "../../models/User.js";
import Post from "../../models/Post.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { dbConnection } from "../../database/db.js";

const userId1 = "65ec22fedbfc78004012d5e5"
const userId2 = "65ec25f5dbfc78004012d5ea"
const userId3 = "65ec3d34f080d2008cddecb8"

const userSeeder = async () => {
    try {
        const connect = await dbConnection();
        console.log("Connected to MongoDB");

        const user = await User.create([
            {
                email: "admin@admin.com",
                password: bcrypt.hashSync('12345678', 10),
                role: "admin",
            },
            {
                email: "superadmin@superadmin.com",
                password: bcrypt.hashSync('12345678', 10),
                role: "super_admin"
            },
            {
                email: "claudia@claudia.com",
                password: bcrypt.hashSync('12345678', 10),
                role: "user",
                _id: userId1
            }, {
                email: "paola@paola.com",
                password: bcrypt.hashSync('12345678', 10),
                role: "user",
                _id: userId2
            }, {
                email: "sofia@sofia.com",
                password: bcrypt.hashSync('12345678', 10),
                role: "user",
                _id: userId3
            },

        ]);

        console.log("User created");
    } catch (error) {
        console.log(error);
    } finally {
        mongoose.disconnect();
    }
};
const postSeeder = async () => {
    try {
        const connect = await dbConnection();
        console.log("Connected to MongoDB");

        const posts = await Post.create([
            {
                content: "Hola, soy el post 1",
                userId: userId1
            },
            {
                content: "Hola, soy el post 2",
                userId: userId1
            },
            {
                content: "Hola, soy el post 3",
                userId: userId1
            },
            {
                content: "Hola, soy el post 4",
                userId: userId1
            },
            {
                content: "Hola, soy el post 5",
                userId: userId1
            },
            {
                content: "Hola, soy el post 6",
                userId: userId1
            },
            {
                content: "Hola, soy el post 7",
                userId: userId1
            },
            {
                content: "Hola, soy el post 8",
                userId: userId2
            },
            {
                content: "Hola, soy el post 9",
                userId: userId2
            },
            {
                content: "Hola, soy el post 10",
                userId: userId2
            },
            {
                content: "Hola, soy el post 11",
                userId: userId2
            },
            {
                content: "Hola, soy el post 12",
                userId: userId2
            },
            {
                content: "Hola, soy el post 13",
                userId: userId2
            },
            {
                content: "Hola, soy el post 14",
                userId: userId2
            },
            {
                content: "Hola, soy el post 15",
                userId: userId2
            },
            {
                content: "Hola, soy el post 16",
                userId: userId2
            },
            {
                content: "Hola, soy el post 17",
                userId: userId3
            },
            {
                content: "Hola, soy el post 18",
                userId: userId3
            },
            {
                content: "Hola, soy el post 19",
                userId: userId3
            },
            {
                content: "Hola, soy el post 20",
                userId: userId3
            }, {
                content: "Hola, soy el post 21",
                userId: userId3
            }, {
                content: "Hola, soy el post 22",
                userId: userId3
            }, {
                content: "Hola, soy el post 23",
                userId: userId3
            }, {
                content: "Hola, soy el post 24",
                userId: userId3
            },

        ])

        console.log("Posts created");

    } catch (error) {
        console.log(error);
    } finally {
        mongoose.disconnect();
    }
};


const runSeeders = async () => {
    await userSeeder()
    await postSeeder()
}

runSeeders()