import { router, publicProcedure } from '../../trpc';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import getData from './crawler.service';

export const crawlerRouter = router({
    list: publicProcedure
    .input(
      z.object({
        keyword: z.string()
      })
    )
      .query(async ({ input }) => {
        const { keyword } = input;
        await getData(keyword)

        return {
          items: "reddit crawled"
        };
      }),
  });

