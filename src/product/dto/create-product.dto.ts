import { IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateProductDto {
    
    @IsNotEmpty()
    @IsString()
    @MinLength(3, { message: 'Minimo de 3 caracteres' })
    name: string;

    @IsNotEmpty()
    @IsInt()
    quantity: number;
}
