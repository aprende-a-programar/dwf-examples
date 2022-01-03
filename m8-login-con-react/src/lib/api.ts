export async function checkEmail(email) {
  // chequea contra la api si existe
  // simulamos que existe
  return {
    exists: true,
  };
}
export async function auth(email, password) {
  // obtiene un token
  return {
    token: "asdf1234",
  };
}
export async function getMe() {
  // obtiene la data del user vinculada al token
  return {
    token: 1234,
  };
}
