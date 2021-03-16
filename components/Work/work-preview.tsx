import Link from 'next/link'
import { Heading, LinkBox, LinkOverlay, Text, Image, GridItem, Spacer, Center, Flex, Box, Tooltip, HStack, Tag, TagLabel } from "@chakra-ui/react"

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

  return (
    <Link as={`/work/${slug}`} href={`/work/${slug}`}>
      <GridItem>
        <LinkBox as="article" p="6" borderWidth="1px" borderColor="gray.100" rounded="lg" cursor="pointer" _hover={{ rounded: "xl", textDecoration: 'none', shadow: "2xl", borderColor: "brand.50" }}>
          <Flex>

            <Center width="120px" mr="5" >
              {coverImage && <Image src={coverImage} alt={`Cover Image for ${title}`} rounded="2xl" />}
            </Center>

            <Box flex="1" >

              <Flex mb="2" >
                <Tooltip label="Private project">
                  <Heading fontSize="2xl" fontWeight="600" color="gray.600" textDecoration="none">
                    {title}
                    <>
                      {locked && !sessionStatus && (<Image src="/assets/lock.svg" htmlWidth="14px" opacity="0.65" display="inline-block" position="relative" bottom="3px" ml="3" />)}
                      {locked && sessionStatus && (<Image src="/assets/unlock.svg" htmlWidth="18px" opacity="0.65" display="inline-block" position="relative" bottom="3px" ml="3" />)}
                    </>
                  </Heading>
                </Tooltip>
                <Spacer />

              </Flex>

              <Text fontSize="2xl" color="gray.500" >{excerpt}</Text>

              <HStack spacing={3} mt="4">
                {tagsCollection.map((tag: any) => (
                  <Tag size="md" key={tag} background="brand.50">
                    <TagLabel color="brand.400" fontSize="md" >{tag}</TagLabel>
                  </Tag>
                ))}
              </HStack>

            </Box>

          </Flex>
        </LinkBox>
      </GridItem>

    </Link >
  )
}

export default WorkPreview
