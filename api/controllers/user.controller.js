export const signIn = (req, res) => {
  try {
    res.json({ message: "Hello G" });
  } catch (error) {
    console.log("User Controller => Sign In Api", error);
  }
};
