import { NextRequest, NextResponse } from "next/server";
const secret = process.env.KEY;

export const  GET = (req:NextRequest, res:NextResponse)=>{
    const check_key = req.headers.get('x-api-key');
    if(check_key !== secret){
        return NextResponse.json({message: 'Invalid key'}, {status: 401});
    }
    const userData = {
        name: 'John',
        age: 30
    }
    return NextResponse.json({ userData, message: 'kem cho'});
}