import { router, publicProcedure } from '../../trpc';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import getData from './crawler.service';

export const crawlerRouter = router({
    list: publicProcedure
      .query(async () => {
        /**
         * For pagination docs you can have a look here
         * @see https://trpc.io/docs/useInfiniteQuery
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/pagination
         */

        // console.log(await getData())

        return {
          items: "reddit crawled"
        };
      }),
  });

