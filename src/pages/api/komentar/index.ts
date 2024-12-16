import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from "../../../lib/mongodb";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_NAME);
   
 
    switch (req.method) {
        case "POST":
            try{
                const body = JSON.parse(req.body)
               
                // const body = req.body
                if(typeof body !== "object"){
                    throw new Error('invalid srequest')
                }
                
                if( body.nama == ""){
                  throw new Error('nama is required')
                }
                if( body.email == ""){
                    throw new Error('email is required')
                }
                if( body.content == ""){
                    throw new Error('komentar is required')
                }
               
                if( body.idBlog== ""){
                    throw new Error('komentar is required')
                }
               


                let isiDataKomentar = await db.collection("komentar").insertOne(body);
                res.status(200).json({ komentar: isiDataKomentar, message:'data berhasil di simpan' });
            }catch(err){
                res.status(422).json({ message: err.message});
            }
        break;

       
        default:
            const allKomentar = await db.collection("komentar").find({}).toArray();
            res.json({ komentar: allKomentar });
        break;
    }
}

