import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Task name has to be a string' })
  @IsNotEmpty({ message: 'Filed has not to be empty' })
  @Length(2, 40, { message: 'Length has to be from 2 to 40 symbols' })
  title: string;
  @IsBoolean({ message: 'Status has to be a boolean expression' })
  isCompleted: boolean;
}
