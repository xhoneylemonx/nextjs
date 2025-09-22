import { useForm } from 'react-hook-form';

const { register } = useForm();

<>
  <input type="url" {...register('photoUrl')} placeholder="ลิงก์รูปถ่าย" />
  <input type="url" {...register('works.0')} placeholder="ลิงก์ผลงานที่ 1" />
</>