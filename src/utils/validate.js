export const validateData = (email, password, name) => {
  // validate email

  try {
    // const isValidName =
    //   /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(name);
    const isEmailValid =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );

    // validata password
    const isPasswordValid =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

    if (!isEmailValid) return "Invalid email";
    if (!isPasswordValid) return "Invalid password";
    // if (!isValidName) return "Invalid name";

    return;
  } catch (error) {
    console.log(error.message);
  }
};
