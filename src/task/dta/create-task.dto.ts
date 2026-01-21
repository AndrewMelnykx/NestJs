import {
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  Length,
  IsArray,
  IsEnum,
} from 'class-validator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

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

  @IsArray({ message: 'Tags have to be an array' })
  @IsEnum(TaskTag, { each: true, message: 'Forbidden tag value' })
  @IsOptional()
  tags: TaskTag[];
}
