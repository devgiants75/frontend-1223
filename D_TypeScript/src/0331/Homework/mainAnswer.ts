document
  .getElementById("fetchUserData")!
  .addEventListener("click", async () => {
    const userDataDiv = document.getElementById("userData")!;
    const userIdElement = document.getElementById("userId") as HTMLInputElement;

    const userId = userIdElement ? userIdElement.value : "";

    const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

    userDataDiv.innerHTML = `<p>Loading user data</p>`;

    try {
      const fetchResponse = await fetch(apiUrl);
      if (!fetchResponse.ok)
        throw new Error("User data could not be retrieved.");

      const user = await fetchResponse.json();

      userDataDiv.innerHTML = `
          <h2>User Details</h2>
          <p>Id: ${user.id}</p>
          <p>Name: ${user.name}</p>
          <p>Email: ${user.email}</p>
          <p>Username: ${user.username}</p>
          <p>Address: ${user.address.street}, ${user.address.city}</p>
      `;
    } catch (error) {
      userDataDiv.innerHTML = `<p>${error}</p>`;
    }
  });
