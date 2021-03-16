
import { Link, Heading, LinkBox, Flex, Center, Spacer, Box, Text, Image, Grid, GridItem } from "@chakra-ui/react"

const WorkTools = () => {

  const toolCollection = [
    {
      title: "Yanx",
      cover: '/assets/tools/cover/yanx.png',
      description: "Google Chrome browser extension to take notes on new-tab space",
      isExternal: true,
      link: "https://chrome.google.com/webstore/detail/yanx/difdegoclpgdhiagmenkbcfabilednaj?hl=en"
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
      link: "https://github.com/k97/viewport"
    }
  ]

  const yearVal = new Date().getFullYear();
  return (
    <>
      <Heading as="h2" fontSize="4xl" fontWeight="800" mt={75} color="gray.700" >Tools</Heading>
      <Text fontSize="xl" fontWeight="400" mt={2} color="gray.600" >A list of tools that I have designed to facilitate any design workflows</Text>
      <Grid gap={8} mt="6">
        {toolCollection.map((tool: any) => (
          <GridItem>
            <Link href={tool.link} isExternal={tool.isExternal} _hover={{ textDecoration: 'none' }}>
              <LinkBox as="article" p="6" borderWidth="1px" borderColor="gray.100" rounded="lg" cursor="pointer" _hover={{ rounded: "xl", textDecoration: 'none', shadow: "2xl", borderColor: "brand.50" }}>
                <Flex>
                  <Center width="120px" mr="5" >
                    {tool.cover && <Image src={tool.cover} alt={`Cover Image for ${tool.cover}`} rounded="2xl" />}
                  </Center>
                  <Box flex="1" >
                    <Flex mb="2" >
                      <Heading fontSize="2xl" fontWeight="600" color="gray.600" textDecoration="none">
                        <>
                          {tool.title}
                          {tool.isExternal && (<Image src="/assets/external.svg" htmlWidth="20px" opacity="0.5" display="inline-block" position="relative" bottom="2px" ml="2" />)}
                        </>
                      </Heading>
                    </Flex>
                    <Text fontSize="2xl" color="gray.500" >{tool.description}</Text>
                  </Box>
                </Flex>
              </LinkBox>
            </Link>
          </GridItem>
        ))}
      </Grid>


    </>

  )
}


export default WorkTools
