
import { Link, Heading, LinkBox, Flex, Center, Divider, Box, Text, Image, Grid, GridItem, Button, useColorModeValue } from "@chakra-ui/react"

const ToolsCard = () => {

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

  const borderColor = useColorModeValue("gray.100", "gray.700");
  const borderHoverColor = useColorModeValue("brand.50", "gray.600");
  const bgHoverColor = useColorModeValue("transparent", "gray.700");

  const buttonColor = useColorModeValue("brand.500", "brand.100");

  const yearVal = new Date().getFullYear();
  return (
    <>
      {toolCollection.map((tool: any) => (
        <>
          <Flex pt="6" pb="6">
            <Center display={{ base: "none", sm: "none", md: "inherit" }} width="120px" mr="5" >
              {tool.cover && <Image src={tool.cover} alt={`Cover Image for ${tool.cover}`} rounded="2xl" />}
            </Center>
            <Box flex="1" >
              <Heading fontSize={{ sm: "xl", md: "2xl" }} fontWeight="600" opacity="0.85" mt="2" mb="2" textDecoration="none">
                {tool.title}
              </Heading>
              <Text fontSize={{ sm: "lg", md: "2xl" }} opacity="0.75">{tool.description}</Text>
              <Box mt="6">
                <Link href={tool.link} isExternal={tool.isExternal} _hover={{ textDecoration: 'none' }}>
                  <Button mr="2" fontWeight="400" variant="outline" color={buttonColor} borderColor={buttonColor}>View &nbsp;↗</Button>
                </Link>
                <Link href={tool.source} isExternal={tool.isExternal} _hover={{ textDecoration: 'none' }}>
                  {tool.source && <Button fontWeight="400" variant="ghost" color={buttonColor}>Source</Button>}
                </Link>
              </Box>
            </Box>
          </Flex>
          <Divider />
        </>

      ))}
    </>

  )
}


export default ToolsCard
