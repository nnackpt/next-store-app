"use client"

import DashboardCard from "@/app/components/back/shared/DashboardCard"
import { Box, Typography } from "@mui/material"

type Props = {}

export default function ReportPage({}: Props) {
    return (
        <>
            <Box mt={2}>
                <DashboardCard title="Report">
                    <Typography>This is a report page</Typography>
                </DashboardCard>
            </Box>

            <Box mt={2}>
                <DashboardCard title="Report Summary">
                    <>
                        <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat consectetur animi nulla alias, tempore, eligendi asperiores repellendus iste obcaecati quod nihil, labore ducimus magni rerum dolores hic deleniti in eos!
                        Porro enim magni provident optio. Dolores sunt repudiandae beatae aspernatur rerum laboriosam ipsa ipsum aut, quibusdam totam error, ab excepturi asperiores aliquid. Optio necessitatibus magnam perferendis ea, aliquid earum iste!
                        Nisi, consequuntur, exercitationem corrupti rerum delectus consectetur fugiat expedita sed modi dolores quisquam, officia temporibus sit nulla hic tenetur. Modi accusantium molestias quae, maxime reiciendis quidem tempore cumque sequi veniam?
                        In quod soluta architecto enim. Illum accusamus hic minima ab omnis! Doloremque nihil facere exercitationem voluptates illum sunt nobis nemo quod voluptatum ea totam, nulla neque quo, enim repellendus. Veritatis?
                        Eum odit, tempore obcaecati officia sequi suscipit nobis repellat molestias nesciunt pariatur eaque quisquam! Molestiae voluptates quasi minus soluta beatae cumque aut accusamus atque eum? Nobis necessitatibus reprehenderit enim vel?</Typography>
                    
                        <Typography mt={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quibusdam veritatis suscipit hic consequuntur id exercitationem dolores laboriosam, excepturi accusantium doloribus, voluptates odit recusandae culpa dignissimos totam adipisci rem velit!
                        Voluptates ab nisi minima quos totam deleniti in accusantium repellat soluta eaque veniam, consequatur, tempore ipsam repudiandae omnis molestiae! Sed voluptate modi et nobis, velit omnis tempore cum nulla eos!
                        Quis totam molestiae necessitatibus sint, voluptatum repellendus! Dolorem dicta cupiditate rem temporibus, eos modi distinctio fugiat, aut libero porro nesciunt architecto eius natus et atque a corrupti excepturi! Fuga, iusto!
                        Totam doloribus ipsum dicta alias nulla unde maxime minus repudiandae suscipit placeat, amet magni neque explicabo enim eos beatae qui in voluptates consequatur! Maxime voluptatem, corporis accusantium ea nihil fugiat.
                        Culpa laborum qui aut molestias? Sit vitae nisi tenetur animi, sed sapiente dolor autem at ad tempora veritatis consequatur rem quod est ea suscipit laudantium earum fugit velit ipsa. Molestiae!</Typography>
                    </>
                </DashboardCard>
            </Box>
        </>
    )
}