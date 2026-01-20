import axios from "axios";

export const API_URL = "https://alqamerautoparts.com/royalindustry/api";

// simple GET
export const apiGet = (endpoint) => {
  return axios.get(`${API_URL}/${endpoint}`);
};

// simple POST
export const apiPost = async (endpoint, data) => {
  return axios.post(`${API_URL}/${endpoint}`, data, {
  });
};

// login user
export const loginUser = async (username, password) => {
  const res = await axios.post(
    `${API_URL}/loginUser.php`,
    { username, password },
    {
      headers: { "Content-Type": "application/json" }
    }
  );
  return res.data;
};


// register user
export const registerUser = async (userData) => {
  const res = await axios.post(`${API_URL}/signupUser.php`, userData, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};

// edit user
export const editUser = async (data) => {
    const res = await axios.post(`${API_URL}/updateProfile.php`, data, {
        headers: { "Content-Type": "application/json" }
    });

    return res.data;
};



// Fetch user profile
export const fetchUserProfile = async (uid, lkey) => {
  const res = await axios.post(`${API_URL}/fetchUserProfile.php`, { uid, lkey });
  console.log(res);
  return res.data;
};

// Fetch product detail
export const fetchProductDetail = async (id) => {
  try {
    const res = await axios.post(
      `${API_URL}/fetchProductById.php`,
      { pro_id: id }
    );

    return res.data;

  } catch (error) {
    console.error("Error fetching product:", error);
    return { status: "error", message: "Failed to fetch product" };
  }
};

// Add to cart
export const addToCartAPI = async (uid, productId, quantity = 1, lkey = "") => {
  const res = await axios.post(`${API_URL}/addToCart.php`, {
    uid,
    product_id: productId,
    quantity,
    lkey,
  });
  return res.data;
};

// Fetch cart item
export const getCartItemsAPI = async (uid, lkey) => {
  try {
    const res = await axios.post(`${API_URL}/getFromCart.php`, {
      uid,
      lkey
    });

    return res.data;
  } catch (err) {
    console.error("GET CART ITEMS API ERROR:", err);
    return { status: false, data: [] };
  }
};









