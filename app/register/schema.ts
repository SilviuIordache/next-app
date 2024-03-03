import { z } from 'zod';

const schema = z.object({
  email: z.string().min(3),
  name: z.string().min(1).max(100),
  password: z.string().min(5),
});

export default schema;
