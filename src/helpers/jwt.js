import * as jose from "jose";

const extractUser = async (token) => {
  try {
    const secret = new TextEncoder().encode(import.meta.env.VITE_PASS_TOKEN);
    const { payload } = await jose.jwtVerify(token, secret);
    return payload;
  } catch (error) {
    console.log(error);
  }
};

export { extractUser };
