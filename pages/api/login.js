import nextConnect from "next-connect";

const handler = nextConnect();

handler.post((req, res) => {
  res.status(200).json({ status: "success", message: "login message" });
});
export default handler;
