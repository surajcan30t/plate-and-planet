import { NextRequest, NextResponse } from "next/server";

export const GET = async(req:NextRequest, res:NextResponse)=>{

    const key = process.env.KEY;

    const getData = async () => {
        const response = await fetch('http://localhost:3000/api/give',{
            method: 'GET',
            headers: {
                'x-api-key': `${key}`
            }
            
        }).then((res) => res.json());
        
        return response;
    }
    const data = await getData()

    return NextResponse.json(data);
}