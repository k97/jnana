import Link from 'next/link'
import { Heading, LinkBox, LinkOverlay, Text, Image, GridItem, Spacer, Center, Flex, Box, Tooltip, HStack, Tag, TagLabel, useColorModeValue } from "@chakra-ui/react"

type Props = {
  title: string
  coverImage: string
  excerpt: string
  slug: string
  locked: any
  sessionStatus: any
  tags: any
}

const WorkPreview = ({
  title,
  coverImage,
  excerpt,
  slug,
  locked,
  sessionStatus,
  tags
}: Props) => {

  const tagsCollection: any = tags ? tags.split(', ') : [];
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const borderHoverColor = useColorModeValue("brand.50", "gray.600");
  const bgHoverColor = useColorModeValue("transparent", "gray.700");

  const tagBgColor = useColorModeValue("brand.50", "gray.600");
  const tagTextColor = useColorModeValue("brand.400", "white.600");

  return (
    <Link as={`/work/${slug}`} href={`/work/${slug}`}>

      <LinkBox p="6" mb="20px" borderWidth="1px" borderColor={borderColor} rounded="lg" cursor="pointer" _hover={{ background: bgHoverColor, rounded: "xl", textDecoration: 'none', shadow: "2xl", borderColor: borderHoverColor }}>
        <Flex>

          <Center display={{ base: "none", sm: "none", md: "inherit" }} width={{ sm: "60px", md: "120px" }} mr={{ sm: "3", md: "5" }} >
            {coverImage && <Image src={coverImage} alt={`Cover Image for ${title}`} rounded="2xl" />}
          </Center>

          <Box flex="1" >

            <Flex mb="2" >
              <Tooltip label="Private project">
                <Heading fontSize={{ sm: "xl", md: "2xl" }} fontWeight="600" opacity="0.85" textDecoration="none">
                  {title}
                  <>
                    {locked && !sessionStatus && (<Image src="/assets/lock.svg" className="work-lock-icon" htmlWidth="14px" opacity="0.65" display="inline-block" position="relative" bottom="3px" ml="3" />)}
                    {locked && sessionStatus && (<Image src="/assets/unlock.svg" className="work-lock-icon" htmlWidth="18px" opacity="0.65" display="inline-block" position="relative" bottom="3px" ml="3" />)}
                  </>
                </Heading>
              </Tooltip>
              <Spacer />

            </Flex>

            <Text fontSize={{ sm: "xl", md: "2xl" }} opacity="0.75" >{excerpt}</Text>

            <HStack spacing={3} mt="4">
              {tagsCollection.map((tag: any) => (
                <Tag size="md" key={tag} background={tagBgColor}>
                  <TagLabel color={tagTextColor} fontSize="md" >{tag}</TagLabel>
                </Tag>
              ))}
            </HStack>

          </Box>

        </Flex>
      </LinkBox>

    </Link >
  )
}

export default WorkPreview
