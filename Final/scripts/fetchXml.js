async function getUSPSShippingCost(username, password, weight, size, destinationZip) {
    // Construct the API URL
    const apiUrl = `https://secure.shippingapis.com/ShippingAPI.dll`;
    const queryParameters = `API=RateV4&XML=<RateV4Request USERID="${username}"><Package ID="1ST">
      <Service>Priority</Service>
      <ZipOrigination>90210</ZipOrigination>
      <ZipDestination>${destinationZip}</ZipDestination>
      <Pounds>${Math.floor(weight)}</Pounds>
      <Ounces>${(weight % 1) * 16}</Ounces>
      <Size>${size}</Size>
      </Package></RateV4Request>`;
  
    try {
      const response = await fetch(`${apiUrl}?${queryParameters}`, {
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch USPS API');
      }
  
      const xmlResponse = await response.text();
  
      // You can parse the XML response here and extract the shipping cost.
      // You may need an XML parser library or parse it manually.
  
      // For example, using a simple parser like DOMParser:
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlResponse, 'text/xml');
  
      const postagePrice = xmlDoc.querySelector('Postage');
      if (postagePrice) {
        return postagePrice.textContent;
      } else {
        return 'Cost not available';
      }
    } catch (error) {
      console.error('Error:', error);
      return 'Error fetching USPS API';
    }
  }
  
  // Usage
  const username = 'YourUSPSUsername';
  const password = 'YourUSPSPassword';
  const weight = 2.5; // Weight in pounds
  const size = 'REGULAR'; // Package size
  const destinationZip = '12345'; // Destination ZIP code
  
  getUSPSShippingCost(username, password, weight, size, destinationZip)
    .then((cost) => {
      console.log('Shipping cost:', cost);
    })
    .catch((error) => {
      console.error(error);
    });
  