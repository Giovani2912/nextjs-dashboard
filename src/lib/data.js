import { connectToDB } from "@/app/utils/utils";
import { Product, User } from "./models";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 1;
  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count()
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return {count, users};
  } catch (err) {
    console.log(err);
    throw new Error("Failed do fetch users!");
  }
};


export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 1;
  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count()
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return {count, products};
  } catch (err) {
    console.log(err);
    throw new Error("Failed do fetch products!");
  }

};