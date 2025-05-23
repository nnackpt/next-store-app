import { Box, Container, Typography } from "@mui/material";

type Props = {}

export default function ContactPage({}: Props) {
    return (
        <>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                height='65vh'
                flexDirection='column'
            >
                <Container maxWidth='lg'>
                    <Typography variant="h1">Contact Page</Typography>
                    <Typography variant="h2">This is the Contact page</Typography>
                    <Typography variant="body1" my={2}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae praesentium quas possimus! Autem nulla delectus repellat quia deserunt, vel minus velit mollitia excepturi, soluta cupiditate error iste et, molestias id!
                        Nostrum ea eligendi consequatur dolorem itaque, explicabo, dolore autem nulla assumenda maxime a incidunt debitis laborum quasi sed, praesentium voluptatem corporis? Sequi quas nesciunt cum sunt ipsa error quos repellat?
                        Ut quisquam quod laborum cum in omnis corporis praesentium facere. Voluptatum odio enim dolorem sapiente modi exercitationem fugiat aspernatur veritatis est, cum sequi libero doloribus, maxime nam at culpa iste.
                        Unde id quibusdam soluta modi quo repellat. Autem et fuga explicabo tempora eum aliquid rerum doloribus, doloremque illum dolore voluptatum dolorum quibusdam tenetur delectus natus corrupti non! Magni, omnis odio.
                        Voluptatum in fuga esse. Ea culpa delectus iure est soluta nulla deleniti suscipit pariatur quidem, accusamus sunt reprehenderit minus dicta repellat ipsam assumenda, fugiat autem debitis! Laboriosam molestiae deserunt repellendus.
                        Sed tempore quo ab, dolores accusantium reprehenderit voluptatem fuga odit tempora voluptatibus. Illo ducimus a est pariatur suscipit at ipsam assumenda error, ipsa quas veniam debitis tenetur soluta perspiciatis consequatur?
                        Corporis quidem maxime maiores ipsum exercitationem. Odio, voluptatibus reiciendis ullam facere accusantium inventore ipsa vitae rem quo, nesciunt pariatur, iure in excepturi aliquam. Magni temporibus reprehenderit eum veniam, eos repudiandae!
                        Explicabo, eveniet necessitatibus in adipisci quae nobis enim dicta maiores magni dolor id ea hic illum soluta. Ad optio consectetur laudantium neque distinctio, eaque, laborum nihil enim voluptas corporis adipisci?
                    </Typography>
                </Container>
            </Box>
        </>
    )
}