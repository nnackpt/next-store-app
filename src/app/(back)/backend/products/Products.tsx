"use client"

import { Box, Typography } from "@mui/material"
import DashboardCard from "@/app/components/back/shared/DashboardCard"

type Props = {}

export default function ProductsPage({}: Props) {
  return (
    <>
      <Box mt={2}>
        <DashboardCard title="Products">    
          <Typography>This is products page</Typography>
        </DashboardCard>
      </Box>

      <Box mt={2}>
        <DashboardCard title="Summary">
          <>
            <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit rerum tempore facilis doloremque eaque architecto magni ad tempora, ipsa iste harum quidem commodi sapiente illum earum nulla laborum aperiam consequatur!
            Iusto cum animi laborum aperiam eum omnis explicabo fugit delectus ipsum ex expedita facere sunt, recusandae sequi aliquid, iure officia. Atque sequi enim nihil ea neque, accusamus doloremque alias expedita.
            Suscipit, sunt sequi. Earum excepturi recusandae totam iusto labore, at amet illo facilis veniam ut dicta sit enim ullam placeat rerum maxime. Minus, nesciunt. Maiores voluptatum nemo aliquid repellat animi?
            Deleniti eum beatae mollitia adipisci, nesciunt aliquid distinctio, corrupti inventore aut id in quos. Est, quam? Laboriosam eaque rerum repudiandae rem consequuntur veritatis hic, consequatur iusto, sint aut nihil ea.
            Commodi laboriosam dolorum quas ipsum temporibus ad vero sequi, porro possimus molestias alias, illo, id suscipit sed eum in accusamus? Totam eveniet aperiam cum labore blanditiis et recusandae consequatur suscipit.</Typography>

            <Typography mt={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quibusdam inventore nulla, repellat ut suscipit asperiores blanditiis iure consequuntur, aut velit deserunt consectetur error obcaecati accusantium est. Quia, autem voluptatibus.
            Ratione quo aliquid dolorem eveniet in adipisci, rem aliquam consectetur possimus quisquam veniam perferendis nostrum enim dicta, voluptatem eum molestiae sed quasi repudiandae deleniti quod voluptate. Fuga eum dolores voluptatem!
            Quos incidunt vel nihil, explicabo asperiores voluptates ducimus quod exercitationem numquam, facere sint animi sapiente corrupti deserunt vitae magnam itaque eaque. Reprehenderit illo, voluptates omnis officia natus aut rerum iure.
            Officia, pariatur. Facere rem quae amet odit et! Tempora officia aspernatur eius ea dolor perferendis excepturi, quasi accusamus vero beatae expedita commodi dicta. Quo voluptatum esse repellendus, doloribus reiciendis officia!
            Esse atque asperiores deserunt sint accusamus vero quae, doloremque qui accusantium dolore similique suscipit illum dolor earum cupiditate saepe consequuntur odit corrupti minus provident beatae nulla voluptas commodi assumenda? Consectetur?</Typography>
          </>
        </DashboardCard>
      </Box>
    </>
  )
}