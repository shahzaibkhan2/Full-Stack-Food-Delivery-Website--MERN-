// import { User } from "../models/user.models.js";
// import { ApiError } from "../utils/ApiError.js";
// import { asyncHandler } from "../utils/asyncHandler.js";
// import jwt from "jsonwebtoken";

// const verifyJWT = asyncHandler(async (req, _, next) => {
//   try {
//     const token =
//       (await req.cookies?.accessToken) ||
//       req.header("Authorization")?.replace("Bearer ", "");

//     if (!token) {
//       throw new ApiError(401, "Invalid Access Token !");
//     }

//     const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

//     if (!decodedToken) {
//       throw new ApiError(401, "Unauthorized Access !");
//     }

//     const user = await User.findById(decodedToken?._id).select(
//       "-password -refreshToken"
//     );

//     if (!user) {
//       throw new ApiError("Invalid Access Token");
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     throw new ApiError(401, error?.message || "Invalid Access Token");
//   }
// });

// export { verifyJWT };
