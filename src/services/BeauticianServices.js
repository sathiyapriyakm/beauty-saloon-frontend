export async function addNewBeautician(values, token) {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/beautician/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: "Please try again later" };
  }
}

export async function deleteBeautician(values, token) {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/beautician/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: "Please try again later" };
  }
}

export async function getBeauticianList() {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/beautician/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: "Please try again later" };
  }
}
