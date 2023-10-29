async function getUSPSCost(weight, size, destinationZipCode, USPSApiKey) {
    const uspsApiEndpoint = 'https://secure.shippingapis.com/ShippingAPI.dll';
    
    // Build the request parameters
    const requestParams = new URLSearchParams();
    requestParams.append('API', 'RateV4');
    requestParams.append('XML', `
      <RateV4Request USERID="${USPSApiKey}">
        <Package ID="1ST">
          <Service>PRIORITY</Service>
          <ZipOrigination>94105</ZipOrigination>
          <ZipDestination>${destinationZipCode}</ZipDestination>
          <Pounds>${weight}</Pounds>
          <Ounces>0</Ounces>
          <Size>REGULAR</Size>
        </Package>
      </RateV4Request>
    `);
  
    const requestURL = `${uspsApiEndpoint}?${requestParams.toString()}`;
    
    try {
      const response = await fetch(requestURL);
      const xmlData = await response.text();
  
      // You can parse the XML response to extract the cost
      // Here, I'll assume you use a simple XML parser like DOMParser
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
      const postage = xmlDoc.querySelector('RateV4Response Rate FirstClassMail InternationalMailService Postage');
  
      if (postage) {
        const cost = postage.textContent;
        console.log(`USPS Shipping Cost: $${cost}`);
      } else {
        console.log('Unable to retrieve shipping cost.');
      }
    } catch (error) {
      console.error('Error fetching USPS API:', error);
    }
  }
  
  // Usage
  const USPSApiKey = 'YOUR_USPS_API_KEY';
  const weight = 1; // Weight in pounds
  const size = 'REGULAR'; // You can change this to other size options
  const destinationZipCode = '90210'; // Replace with the actual destination ZIP code
  
  getUSPSCost(weight, size, destinationZipCode, USPSApiKey);
  