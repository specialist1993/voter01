async function getIp() {
  const res = await fetch("https://api.ipify.org/?format=json");
  if (res.ok) {
    const data = await res.json();

    return data.ip;
  }
}

async function getLocationDetails(ip, setLoading) {
  if (!ip) {
    return Promise.reject("IP address is required");
  }

  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    if (!response.ok) {
      throw new Error("Failed to fetch location details");
    }

    const jsonData = await response.json();

    // Extract the needed location details
    const locationDetails = {
      country: jsonData.country_name,
      region: jsonData.region,
      city: jsonData.city,
      timezone: jsonData.timezone,
    };

    if (response.ok) {
      setLoading(false);
      return locationDetails;
    }
  } catch (error) {
    return Promise.reject(error.message);
  }
}

async function getLogs() {
  const res = await fetch("http://localhost/server/logs.php");
  if (res.ok) {
    const data = await res.json();

    return data;
  }
}

export { getIp, getLocationDetails, getLogs };
