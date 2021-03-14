import Link from 'next/link'
import { Button, Heading, Text, Grid, GridItem, Box } from "@chakra-ui/react"

const HeroText = () => {
  return (
    <Grid columns={2}
      templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={5}>

        <strong>Hello! I am</strong>
        <Heading as="h1" size="4xl" className="ff-hero">Karthik</Heading>

        <Text fontSize="lg">Designer based in Melbourne, who likes to code, create experiences that makes people’s lives easier.</Text>

        <Link href="/about">
          <Button size="lg" colorScheme="blue">More about me</Button>
        </Link>

        <Text fontSize="sm">See few of my selective <Link href="/work"><a>work here</a></Link>, or If you want to read some interesting collation of <Link href="/articles"><a>articles here</a></Link>.</Text>
      </GridItem>
      <GridItem colSpan={7} ><img src="/assets/hero.svg" className="hero-static" />
      </GridItem>
    </Grid>
  )
}

export default HeroText
