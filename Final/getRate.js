export async function getRate(jsonSource) 
        {
            console.log("GetRate");
            const response = await fetch(jsonSource);
            //check to see if the fetch was successful
            if (response.ok) 
            {
                const data = await response.json();
                return (data);
            }
        
        }
export function processRate(jsonIn) 
{
    console.log("ProccessRate");
    console.log(jsonIn);
    let results = jsonIn;
    return results.RateV4Response.Package.Postage.Rate;
}