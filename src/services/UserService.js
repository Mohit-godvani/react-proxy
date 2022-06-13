export async function getAllUsers() {
  var authtoken = localStorage.getItem("__token");
  try {
    const response = await fetch("/abc/ks!djf!!ksdf", {
      mode: "cors",
      headers: {
        Authorization: authtoken,
      },
      credentials: "include",
    });
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function createUser(data) {
  var authtoken = localStorage.getItem("__token");
  const response = await fetch(`/abc/uidij!23&dd`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authtoken,
    },
    credentials: "include",
    body: JSON.stringify({ user: data }),
  });
  return await response.json();
}

export async function Login(data) {
  const response = await fetch(`/abc/posdfir@3!!`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ user: data }),
  });
  return await response.json();
}

export async function logout() {
  const response = await fetch(`/abc/ji@213sd@`, {
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}
