
async function getUser ( username: any )
{
  const fetch = require( 'node-fetch' );
  try
  {
    const response = await fetch( `https://api.github.com/users/${ username }` );
    return await response.json();
  } catch ( error )
  {
    console.log( error );
  }
}

getUser( 'nitinreddy3' );