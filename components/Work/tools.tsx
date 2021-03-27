
import { Link, Heading, LinkBox, Flex, Center, Spacer, Box, Text, Image, Grid, GridItem, Button } from "@chakra-ui/react"

const WorkTools = () => {

  const toolCollection = [
    {
      title: "Yanx",
      cover: '/assets/tools/cover/yanx.png',
      description: "Google Chrome browser extension to take notes on new-tab space",
      isExternal: true,
      link: "https://chrome.google.com/webstore/detail/yanx/difdegoclpgdhiagmenkbcfabilednaj?hl=en",
      source: "https://github.com/k97/yanx-chrome"
    },
    {
      title: "Design deck",
      cover: '/assets/tools/cover/figma.png',
      description: "Figma document template outlining the design pointers that could be captured and tracked in a design workflow",
      isExternal: true,
      link: "https://www.figma.com/file/shjHYroXtEzqxOZBiPIrY1/design-deck-template?node-id=0%3A1"
    },
    {
      title: "Viewport resizer",
      cover: '/assets/tools/cover/viewport.png',
      description: "Front-end tool to test and validate different viewport and screen sizes",
      isExternal: true,
      link: "https://k97.github.io/viewport/",
      source: "https://github.com/k97/viewport"
    }
  ]

  const yearVal = new Date().getFullYear();
  return (
    <>
      <Grid gap={8} mt="6">
        {toolCollection.map((tool: any) => (
          <GridItem>
            <LinkBox as="article" p="6" borderWidth="1px" borderColor="gray.100" rounded="lg" cursor="pointer" _hover={{ rounded: "xl", textDecoration: 'none', shadow: "2xl", borderColor: "brand.50" }}>
              <Flex>
                <Center display={{ base: "none", sm: "none", md: "inherit" }} width="120px" mr="5" >
                  {tool.cover && <Image src={tool.cover} alt={`Cover Image for ${tool.cover}`} rounded="2xl" />}
                </Center>
                <Box flex="1" >
                  <Flex mb="2" >
                    <Heading fontSize={{ sm: "xl", md: "2xl" }} fontWeight="600" color="gray.600" textDecoration="none">
                      <>
                        {tool.title}
                      </>
                    </Heading>
                  </Flex>
                  <Text fontSize={{ sm: "lg", md: "2xl" }} color="gray.500" >{tool.description}</Text>
                  <Box mt="4">
                    <Link href={tool.link} isExternal={tool.isExternal} _hover={{ textDecoration: 'none' }}>
                      <Button mr="2" fontWeight="400" variant="outline" colorScheme="brand">View {tool.isExternal && (<Image src=" /assets/external-brand.svg" htmlWidth="15px" display="inline-block" position="relative" bottom="0px" ml="2" />)}</Button>
                    </Link>
                    <Link href={tool.source} isExternal={tool.isExternal} _hover={{ textDecoration: 'none' }}>
                      {tool.source && <Button fontWeight="400" variant="ghost" colorScheme="brand">Source</Button>}
                    </Link>
                  </Box>
                </Box>
              </Flex>
            </LinkBox>
          </GridItem>
        ))}
      </Grid>


    </>

  )
}


export default WorkTools
