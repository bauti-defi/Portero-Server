import { Controller, Post, Body } from "@nestjs/common";
import PropietarioRegistrationDTO from "./propietario.registration.dto";
import PropietarioService from "./propietario.service";

@Controller('propietario')
export default class PropietarioController{

    constructor(private readonly propietarioService:PropietarioService){}

    @Post('register')
    async register(@Body() registrationDTO:PropietarioRegistrationDTO){
        return await this.propietarioService.register(registrationDTO);
    }

}