import { router, publicProcedure } from '../../trpc';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

export const crawlerRouter = router({
    list: publicProcedure
      .query(async () => {
        /**
         * For pagination docs you can have a look here
         * @see https://trpc.io/docs/useInfiniteQuery
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/pagination
         */
  
        return {
          items: "reddit crawled"
        };
      }),
  });

