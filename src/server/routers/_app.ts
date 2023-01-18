/**
 * This file contains the root router of your tRPC-backend
 */
 import { publicProcedure, router } from '../trpc';
import { crawlerRouter } from './crawler/crawler';

 
 export const appRouter = router({
   hello: publicProcedure.query(() => {
    return {
      greeting: `hello world`,
    };
  }),
  crawler: crawlerRouter
 });
 
 export type AppRouter = typeof appRouter;