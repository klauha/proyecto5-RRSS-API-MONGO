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
                content: "Playa El Agua,Margaritapl",
                userId: userId1,
                urlImg:"https://breezili.com/_next/image?url=https%3A%2F%2Fuploadthing.com%2Ff%2F440c33ef-8b4d-47d0-a6be-d183607208b7_252515059_4901638859848528_4046791795114123450_n.jpg&w=1200&q=75"
            },
            {
                content: "Mochima, Venezuela",
                userId: userId1,
                urlImg:"https://correodelcaroni.com/wp-content/uploads/2023/03/Mochima_arrecifes.jpg"
            },
            {
                content: "Colonia Tovar, Venezuela",
                userId: userId1,
                urlImg:"https://unsplash.com/es/fotos/monhttps://miro.medium.com/v2/resize:fit:1100/format:webp/1*6KVk7wsU5ENn8HbYAXA2TQ.jpeg"
            },
            {
                content: "El Salto Ángel, Canaima, Venezuela",
                userId: userId1,
                urlImg:"https://sitioviajero.com/wp-content/uploads/2021/07/Salto-del-Angel.jpeg"
            },
            {
                content: "Médanos de Coro, Falcón, Venezuela.",
                userId: userId1,
                urlImg:"https://diariolavoz.net/wp-content/uploads/2013/07/ubicacion-medanos-de-coro.jpg?x43732"

            },
            {
                content: "Bahía de Cata, Aragua, Venezuela.",
                userId: userId1,
                urlImg:"https://gentelonuestro.net/revista/wp-content/uploads/2023/04/BAHIA-DE-CATA.jpg"
            },
            {
                content: "Hola, soy el post 7",
                userId: userId1,
                urlImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c2/e4/3b/bahia-de-cata.jpg?w=1100&h=-1&s=1"
            },
            {
                content: "Hola, soy el post 8",
                userId: userId2,
                urlImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c2/e4/3b/bahia-de-cata.jpg?w=1100&h=-1&s=1"
            },
            {
                content: "Hola, soy el post 9",
                userId: userId2,
                urlImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c2/e4/3b/bahia-de-cata.jpg?w=1100&h=-1&s=1"
            },
            {
                content: "Hola, soy el post 10",
                userId: userId2,
                urlImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c2/e4/3b/bahia-de-cata.jpg?w=1100&h=-1&s=1"
            },
            {
                content: "Hola, soy el post 11",
                userId: userId2,
                urlImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c2/e4/3b/bahia-de-cata.jpg?w=1100&h=-1&s=1"
            },
            {
                content: "Hola, soy el post 12",
                userId: userId2,
                urlImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c2/e4/3b/bahia-de-cata.jpg?w=1100&h=-1&s=1"

            },
            {
                content: "Hola, soy el post 13",
                userId: userId2,
                urlImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c2/e4/3b/bahia-de-cata.jpg?w=1100&h=-1&s=1"

            },
            {
                content: "Hola, soy el post 14",
                userId: userId2,
                urlImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c2/e4/3b/bahia-de-cata.jpg?w=1100&h=-1&s=1"

            },
            {
                content: "Hola, soy el post 15",
                userId: userId2,
                urlImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c2/e4/3b/bahia-de-cata.jpg?w=1100&h=-1&s=1"

            },
            {
                content: "Hola, soy el post 16",
                userId: userId2,
                urlImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c2/e4/3b/bahia-de-cata.jpg?w=1100&h=-1&s=1"

            },
            {
                content: "Hola, soy el post 17",
                userId: userId3,
                urlImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c2/e4/3b/bahia-de-cata.jpg?w=1100&h=-1&s=1"

            },
            {
                content: "Hola, soy el post 18",
                userId: userId3,
                urlImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c2/e4/3b/bahia-de-cata.jpg?w=1100&h=-1&s=1"

            },
            {
                content: "Hola, soy el post 19",
                userId: userId3,
                urlImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c2/e4/3b/bahia-de-cata.jpg?w=1100&h=-1&s=1"

            },
            {
                content: "Hola, soy el post 20",
                userId: userId3,
                urlImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c2/e4/3b/bahia-de-cata.jpg?w=1100&h=-1&s=1"

            }, {
                content: "Hola, soy el post 21",
                userId: userId3,
                urlImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c2/e4/3b/bahia-de-cata.jpg?w=1100&h=-1&s=1"

            }, {
                content: "Hola, soy el post 22",
                userId: userId3,
                urlImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c2/e4/3b/bahia-de-cata.jpg?w=1100&h=-1&s=1"

            }, {
                content: "Hola, soy el post 23",
                userId: userId3,
                urlImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c2/e4/3b/bahia-de-cata.jpg?w=1100&h=-1&s=1"

            }, {
                content: "Hola, soy el post 24",
                userId: userId3,
                urlImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c2/e4/3b/bahia-de-cata.jpg?w=1100&h=-1&s=1"

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