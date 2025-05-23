import { Box, Container, Typography } from "@mui/material";

type Props = {}

export default function BlogPage({}: Props) {
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
                    <Typography variant="h1">Blog Page</Typography>
                    <Typography variant="h2">This is the Blog page</Typography>
                    <Typography variant="body1" my={2}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor corrupti esse voluptatibus libero, neque quibusdam voluptatem nisi quas fugiat eveniet repellat nobis rem, tempore facilis voluptas. Id dolores ut vero.
                        Praesentium facilis a libero excepturi itaque nam, neque doloremque fugit, doloribus aliquid distinctio ab, modi fuga. Ex delectus quisquam error eius tempore optio ducimus ullam at unde eveniet! Deserunt, provident.
                        Molestiae accusamus deserunt, quod aspernatur animi voluptate sint fuga, doloremque corporis id tempore saepe pariatur similique quo vel libero adipisci placeat? Voluptatibus et numquam sit tenetur? Quam temporibus possimus a.
                        Aperiam architecto rem excepturi voluptatibus. Placeat, dolorem eligendi? Assumenda in, iure amet voluptates officia deleniti, neque fuga facere porro iste sit ipsum labore, voluptas eligendi quaerat quidem exercitationem recusandae sint?
                        Excepturi, saepe. Quos optio reiciendis et, dicta magnam nostrum, quas ab aliquam praesentium quibusdam asperiores nemo sunt quasi neque. Perferendis omnis temporibus blanditiis quisquam odio voluptatem! Temporibus deleniti eaque dolorum.
                        Nesciunt sint a temporibus quidem ex illo eos quis aperiam autem vero! Corporis dolore assumenda consequatur possimus, laborum eos modi quis dicta facilis ex veniam vel reprehenderit aliquam provident cumque.
                    </Typography>
                </Container>
            </Box>
        </>
    )
}