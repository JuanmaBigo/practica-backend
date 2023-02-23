import Category from "./../Category.js";
import "dotenv/config.js";
import "../../config/database.js";

let categories = [
    {
        name: "shonen",
        detail: "Shonen manga are characterized by having a lot of action and often humorous situations with male protagonists.",
        admin_id: "63f765163bb62993b8e405cf"
    },{
        name: "manhwa",
        detail: "The Manhwa is from South Korea and is read in the same direction as western books (horizontally and from left to right).",
        admin_id: "63f66f8daea87ce097984ac9"
    },{
        name: "marvel",
        detail: "American superhero comics",
        admin_id: "63f765163bb62993b8e405cf"
    },{
        name: "dc",
        detail: "American superhero comics",
        admin_id: "63f765163bb62993b8e405cf"
    },{
        name: "shojo",
        detail: "It is aimed especially at the adolescent female audience, being mostly starring a girl.",
        admin_id: "63f765163bb62993b8e405cf"
    },{
        name: "seinen",
        detail: "Japanese seinen tells stories with a mature tone.",
        admin_id: "63f765163bb62993b8e405cf"
    }
]

Category.insertMany(categories);