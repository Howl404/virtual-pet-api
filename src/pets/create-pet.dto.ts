import { IsEnum, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreatePetDto {
  @IsString()
  name: string;

  @IsEnum(['cat', 'dog', 'dragon'])
  type: 'cat' | 'dog' | 'dragon';

  @IsNumber()
  @Min(0)
  @Max(100)
  happiness: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  health: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  hunger: number;
}
