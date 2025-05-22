/*import { Button, Typography } from "@mui/material"
*import { AddCircleOutline, NotificationAddOutlined, EditNote } from "@mui/icons-material"

*type Props = {}
*/

"use client"

import Frameworks from "@/app/components/frameworks/Frameworks"
import Banner from "@/app/components/front/banner/Banner"

export default function HomePage() {
  return (
    <>
      <Banner />
      <Frameworks />
    </>
  )
}