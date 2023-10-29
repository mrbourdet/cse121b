export async function GetFamily(jsonSource) 
        {
            //console.log("GetFamily");
            const response = await fetch(jsonSource);
            //check to see if the fetch was successful
            if (response.ok) 
            {
                const data = await response.json();
                console.log(data);
                // let dataOut = data.family.array;
                //console.log(data.family);

                // data.foreach (member => 
                //     {
                //         console.log(member.firstName, member.lastName);
                //     }
                // )
                return (data);
            }
        
        }
export function ProcessFamily(jsonIn) 
{
    console.log("ProcessFamily");
    console.log(jsonIn);
    let results = jsonIn;
    return results;
}