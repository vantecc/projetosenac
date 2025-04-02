export async function registerUser({ name, email, password }) {
  const response = await fetch("http://192.168.0.2:8000/api/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await response.json();
  return { ok: response.ok, data };
}

export async function loginUser({ email, password }) {
  const response = await fetch("http://192.168.0.2:8000/api/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  return { ok: response.ok, data };
}
