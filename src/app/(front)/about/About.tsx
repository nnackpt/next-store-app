import { Box, Container, Typography } from "@mui/material";

type Props = {}

export default function AboutPage({}: Props) {
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
                    <Typography variant="h1">About Page</Typography>
                    <Typography variant="h2">This is the about page</Typography>
                    <Typography variant="body1" my={2}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis doloremque ipsam debitis sapiente, consectetur recusandae eligendi temporibus pariatur quos labore minima! Mollitia consequuntur facilis totam deserunt reiciendis, consequatur quos iure.
                        Illum, architecto blanditiis pariatur deleniti quod vitae, quos veniam aliquid nam id quo tenetur facere impedit earum consectetur possimus illo omnis rerum, amet quaerat provident et quas? Optio, dignissimos obcaecati?
                        Quibusdam dolores ipsum tempore praesentium. Delectus fugit illo nobis earum, eligendi aperiam alias est voluptas repellendus vero dolorum quae voluptates, optio deserunt dicta adipisci numquam reiciendis explicabo eveniet in rem!
                        Error repellat doloribus sunt ducimus, odit nostrum itaque temporibus rem illum eligendi amet omnis et a tempora nisi cum nemo ex excepturi ipsum adipisci pariatur eveniet quia obcaecati. Esse, enim?
                        Distinctio, illo. Fugit earum nam accusamus voluptatibus quod sed sunt, maxime consequuntur odit odio eaque quaerat itaque! Sint expedita quia asperiores, tenetur quas autem cupiditate sed similique unde libero laborum.
                    </Typography>
                </Container>
            </Box>
        </>
    )
}