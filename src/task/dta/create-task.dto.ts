import {
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 40)
  title: string;

  @IsString({ message: 'Description has to be a string' })
  @IsOptional()
  description: string;

  @IsInt({ message: 'Priority has to be an integer' })
  @IsOptional()
  @IsPositive({ message: 'Priority has to be positive' })
  priority: number;
}
