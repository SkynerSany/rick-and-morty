import { IInputProps } from '../form-interfaces';

function isImage(fileList: FileList) {
  if (fileList.length === 0) return false;
  if (!fileList[0].type.includes('image')) return false;
  return true;
}

export default function InputFile({ register, errors }: IInputProps) {
  return (
    <div className="input__wrapper">
      <input
        type="file"
        className="form__file"
        accept="image/*"
        {...register('file', {
          validate: (value) => isImage(value),
        })}
      />
      {errors.file && <p className="input-error">You can load only images</p>}
    </div>
  );
}
