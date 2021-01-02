import Person from '../models/person.model.ts';
import { ServerRequest } from "https://deno.land/std@0.83.0/http/server.ts";


// Array to store our sample data;

let persons: Person[] = [];

let examplePerson = {
    name: 'Lucas',
    age: 20,
    url: 'https://github.com/Lucasmaia435'
};

persons.push(examplePerson);

// 

export function listPersons(req: ServerRequest):Promise<void> {
    return req.respond({status: 200,body: JSON.stringify(persons)});
} 

export function createPerson(){}


