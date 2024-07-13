import {Request, Response, NextFunction} from "express";
import { ServerException } from "../../lib/custom-errors";

class UserController {
    public static listAll(req:Request, res:Response, next:NextFunction) {
        // service.get().then((data:any) => {
        //     if (data && data.length > 0) {
        //         res.status(200).json({
        //             status: true,
        //             message: "Data successfully get.",
        //             data,
        //         })
        //     } else {
        //         res.status(404).json({
        //             status: false,
        //             message: "Data not available",
        //             data: []
        //         })
        //     }
        // }).catch((error:Error) => {
        //     next(new ServerException(error.message))
        // });
    }

    public static getOneUser(req:Request, res:Response, next:NextFunction) {
        // service.getOne().then((data:any) => {
        //     if (data) {
        //         res.status(200).json({
        //             status: true,
        //             message: "Data successfully get.",
        //             data,
        //         })
        //     } else {
        //         res.status(404).json({
        //             status: false,
        //             message: "Data not available",
        //             data: null
        //         })
        //     }
        // }).catch((error:Error) => {
        //     next(new ServerException(error.message))
        // });
    }
}

export default UserController;