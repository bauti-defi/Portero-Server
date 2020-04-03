import { IsEmail, IsNotEmpty, IsNumber, IsString, IsOptional } from "class-validator";

export class LogInDTO{

    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    password:string;

}