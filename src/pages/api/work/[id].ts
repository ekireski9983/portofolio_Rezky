import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from 'mongodb';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_NAME);
    const idParam:string = req?.query?.id as string || ''
    const id = new ObjectId(idParam);

    switch (req.method) {
        case "GET":
            try{
                const work = await db.collection("work")
                    .find({_id: id }).toArray(); 

                res.status(200).json({data: work});
            }catch(err){
                res.status(422).json({ message: err.message});
            }
            break;
        case "PUT":
            try{
                const filter = {_id: id }
                const body = JSON.parse(req.body)
                const updateDoc = {
                    $set: {
                        title:body.title,
                        employeType: body.employeType,
                        companyName: body.companyName,
                        location: body.location,
                        startDate: body.startDate,
                        endDate: body.endDate,
                    },
                  };

                const work = await db.collection("work")
                        .updateOne(filter, updateDoc, { upsert: true })

                res.status(200).json({message: 'date berhasil di perbaharui'});
            }catch(err){
                console.log(err)
            }
        break;
        default:
            res.status(404).json({message: "page not found"});
        break;
    }
}