import { ExceptionFilter, Catch, ArgumentsHost } from "@nestjs/common";
import { QueryFailedError } from "typeorm";
import {Response} from 'express'

@Catch(QueryFailedError)
export class QueryFailedExceptionFilter implements ExceptionFilter{
    catch(exception: QueryFailedError, host: ArgumentsHost) {
       const ctx = host.switchToHttp()
       const response = ctx.getResponse<Response>()

       response.status(400)
       .json({
           error: exception.message
       })
    }

}