// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
    const myHeaders = new Headers();
    myHeaders.append("authorization", process.env.NEXT_PUBLIC_ASSEMBLY_AI_API_KEY);
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    const {id} = req.query
    const r = await fetch('https://api.assemblyai.com/v2/transcript/' + id, requestOptions)
    const data = await r.json()
    res.send(data)
}