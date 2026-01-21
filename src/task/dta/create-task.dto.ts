import {
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  Length,
  IsArray,
  IsEnum,
  Matches,
  IsUrl,
  IsUUID,
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

  @IsString({ message: 'Password has to be a string' })
  @Length(6, 10, { message: 'Password has to be from 6 to 10 symbols' })
  @Matches(/^(?=.*[A-Z])(?=.*[0-9]).+$/, {
    message: 'Password has to contain at least one capital letter and a number',
  })
  password: string;

  @IsUrl(
    {
      protocols: ['https'],
      require_valid_protocol: false,
      host_whitelist: ['google.com'],
      host_blacklist: ['htmllessons.io'],
    },
    { message: 'Incorrect url formate' },
  )
  websiteUrl: string;

  @IsUUID('4', { message: 'Incorrect UID' })
  userId: string;
}
