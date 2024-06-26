import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  price: z.number().min(1).max(100)
  //   email: z.string().email(),
  //   age: z.number()
});

export default schema;
