import * as z from 'zod';
import 'dotenv/config';

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  APP_URL: z
    .string()
    .url('有効なURLを指定してください。')
    .default(
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : 'https://your-production-domain.com',
    ),
  API_URL: z.string().url('有効なAPIのURLを指定してください'),
});

const createEnv = () => {
  const envVars = {
    NODE_ENV: process.env.NODE_ENV,
    APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  };

  const parsedEnv = EnvSchema.safeParse(envVars);

  if (!parsedEnv.success) {
    throw new Error(
      `Invalid environment variables:\n${Object.entries(
        parsedEnv.error.flatten().fieldErrors,
      )
        .map(([key, errors]) => `- ${key}: ${errors?.join(', ')}`)
        .join('\n')}`,
    );
  }

  return parsedEnv.data;
};

export const env = createEnv();
